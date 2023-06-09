import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { AppFormLabel } from "../../presentation/Components/AppFormLabel";
import { AppTextField } from "../../presentation/Components/AppTextField";
import { useAutoAnimate } from "@formkit/auto-animate/react";
// import { createMembership } from "./services/createMembership";
import { getEstados } from "../../services/getEstados";
import { getCity } from "../../services/getCity";
import * as Yup from "yup";
import { FooterModal } from "./FooterModal";
import Swal from "sweetalert2";
import { usePaymentMembership } from "../../hooks/use-payment-membership";
import { Loader } from "../../components/Loader";

type FormPaymentProps = {
  typeCard: string;
  cardForm: any;
  tokenID: string;
  onClose: () => void;
  setLoadPayment: (flag: boolean) => void;
};

export const FormPayment = ({
  typeCard,
  cardForm,
  tokenID,
  onClose,
  setLoadPayment,
}: FormPaymentProps) => {
  const [estados, setEstados] = useState([
    {
      idEstado: 0,
      descripcion: "",
    },
  ]);
  const [municipios, setMunicipios] = useState([
    {
      idMunicipio: 0,
      descripcion: "",
    },
  ]);

  const [parent] = useAutoAnimate();
  const [idEstadoState, setIdEstadoState] = useState(33);
  const [idMunicipioState, setIdMunicipioState] = useState(0);
  const [stateName, setStateName] = useState("");
  const [municipioName, setMunicipioName] = useState("");
  const { loading: loadingPayment, paymentMembership } = usePaymentMembership();
  const formSchema = Yup.object().shape({
    mesesSI: Yup.string()
      .min(1, "Debes seleccionar una opción")
      .required("Campo Obligatorio"),
    nombre: Yup.string().required("Campo Obligatorio"),
    paterno: Yup.string().required("Campo Obligatorio"),
    materno: Yup.string().required("Campo Obligatorio"),
    line1: Yup.string().required("Campo Obligatorio"),
    postalCode: Yup.string()
      .required("Campo Obligatorio")
      .length(5, "Codigo Postal Inválido")
      .matches(/^\d+$/, "Código Postal Inválido"),
    state: Yup.string()
      .min(1, "Debes seleccionar una opción")
      .required("Debes seleccionar un estado"),
    city: Yup.string()
      .min(1, "Debes seleccionar una opción")
      .required("Debes seleccionar una opción"),
    correo: Yup.string().email("Correo inválido").required("Campo Obligatorio"),
    edad: Yup.string()
      .required("Obligatorio")
      .matches(/^\d+$/, "Edad inválida"),
    sexo: Yup.string()
      .min(1, "Debes seleccionar una opción")
      .required("Campo Obligatorio"),
  });

  useEffect(() => {
    const esta = getEstados();
    esta.then((response) => setEstados(response));
  }, []);
  useEffect(() => {
    const muni = getCity(idEstadoState);
    muni.then((response) => setMunicipios(response));
  }, [idEstadoState]);

  useEffect(() => {
    const s = estados.filter((element) => element.idEstado === idEstadoState);
    if (s.length > 0) {
      setStateName(s[0].descripcion);
    }
    if (municipios.length > 0) {
      const m = municipios.filter(
        (element) => element.idMunicipio === idMunicipioState
      );
      if (m.length > 0) {
        setMunicipioName(m[0].descripcion);
      }
    }
  }, [idEstadoState, idMunicipioState]);

  const handleSubmit = async (values: any, actions: any) => {
    const respuesta = await paymentMembership({
      cargo: {
        name: values.nombre,
        lastName: values.paterno,
        email: values.correo,
        city: municipioName,
        state: stateName,
        idCiudad: idMunicipioState.toString(),
        idEstado: idEstadoState.toString(),
        postalCode: values.postalCode,
        line1: values.line1,
        cardNumber: cardForm.card_number,
        holderName: cardForm.holder_name,
        expirationMonth: cardForm.expiration_month,
        expirationYear: cardForm.expiration_year,
        cvv2: cardForm.cvv2,
        mesesSI: values.mesesSI,
      },
      persona: {
        correo: values.correo,
        nombre: values.nombre,
        paterno: values.paterno,
        materno: values.materno,
        edad: values.edad.toString,
        sexo: values.sexo,
      },
      sessionId: tokenID,
    });

    if (respuesta.data.result) {
      Swal.fire({
        title: "Pago exitoso",
        text: `Para finalizar tu suscripción revisa tu correo ${values.correo}`,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#15A186",
      });
      actions.resetForm({
        nombre: "",
        correo: "",
        paterno: "",
        materno: "",
        edad: "",
        sexo: "",
        city: "",
        state: "",
        postalCode: "",
        line1: "",
        mesesSI: "0",
      });
      onClose();
    }
    if (!respuesta.data.result) {
      Swal.fire({
        title: "Error al crear la cuenta",
        text: `${respuesta.data.exceptionMessage}`,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#15A186",
      });
    }
  };
  useEffect(() => {
    setLoadPayment(loadingPayment);
  }, [loadingPayment]);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          paterno: "",
          materno: "",
          edad: "",
          sexo: "",
          city: "",
          state: "",
          postalCode: "",
          line1: "",
          mesesSI: "0",
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {(props) => (
          <form
            action="#"
            method="POST"
            id="paymentForm"
            onSubmit={props.handleSubmit}
          >
            <div className="pt-2">
              <div className="gap-2 pt-2 grid grid-cols-12 mb-3">
                <div className="col-span-12 font-medium text-lg max-sm:text-sm">
                  Datos del Cliente
                </div>
                <div
                  ref={parent}
                  className="w-full col-span-2  flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-12"
                >
                  <AppFormLabel label="Nombre(s):" />
                  <AppTextField
                    placeholder="Nombre"
                    value={props.values.nombre}
                    name="nombre"
                    onChange={props.handleChange}
                    className="w-full"
                    onBlur={props.handleBlur}
                    inputMode="text"
                  />
                  {props.errors.nombre && props.touched.nombre && (
                    <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                      <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                        {props.errors.nombre}
                      </span>
                    </div>
                  )}
                </div>
                <div
                  ref={parent}
                  className="w-full col-span-2  flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-6"
                >
                  <AppFormLabel label="Apellido Paterno:" />
                  <AppTextField
                    placeholder=""
                    value={props.values.paterno}
                    name="paterno"
                    onChange={props.handleChange}
                    className="w-full"
                    onBlur={props.handleBlur}
                    inputMode="text"
                  />
                  {props.errors.paterno && props.touched.paterno && (
                    <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                      <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                        {props.errors.paterno}
                      </span>
                    </div>
                  )}
                </div>
                <div
                  ref={parent}
                  className="w-full col-span-2  flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-6"
                >
                  <AppFormLabel label="Apellido Materno:" />
                  <AppTextField
                    placeholder=""
                    value={props.values.materno}
                    name="materno"
                    onChange={props.handleChange}
                    className="w-full"
                    onBlur={props.handleBlur}
                    inputMode="text"
                  />
                  {props.errors.materno && props.touched.materno && (
                    <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                      <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                        {props.errors.materno}
                      </span>
                    </div>
                  )}
                </div>
                <div
                  ref={parent}
                  className="w-full col-span-3  flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-6"
                >
                  <AppFormLabel label="Calle:" />
                  <AppTextField
                    placeholder=""
                    value={props.values.line1}
                    name="line1"
                    onChange={props.handleChange}
                    className="w-full"
                    onBlur={props.handleBlur}
                    inputMode="text"
                  />
                  {props.errors.line1 && props.touched.line1 && (
                    <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                      <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                        {props.errors.line1}
                      </span>
                    </div>
                  )}
                </div>
                <div
                  ref={parent}
                  className="w-full col-span-2  flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-6"
                >
                  <AppFormLabel label="Código Postal:" />
                  <AppTextField
                    placeholder="5 dígitos"
                    value={props.values.postalCode}
                    name="postalCode"
                    onChange={props.handleChange}
                    className="w-full"
                    onBlur={props.handleBlur}
                    inputMode="numeric"
                  />
                  {props.errors.postalCode && props.touched.postalCode && (
                    <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                      <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                        {props.errors.postalCode}
                      </span>
                    </div>
                  )}
                </div>
                <div
                  ref={parent}
                  className="w-full col-span-2  flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-6"
                >
                  <AppFormLabel label="Estado:" />
                  <select
                    value={props.values.state}
                    onChange={(ev) => {
                      props.handleChange(ev);
                      setIdEstadoState(parseInt(ev.target.value));
                    }}
                    name="state"
                    onBlur={props.handleBlur}
                    className="max-sm:text-xs"
                  >
                    <option value="">Estado</option>
                    {estados.map((item) => (
                      <option key={item.idEstado} value={item.idEstado}>
                        {item.descripcion}
                      </option>
                    ))}
                  </select>
                  {props.errors.state && props.touched.state && (
                    <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                      <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                        {props.errors.state}
                      </span>
                    </div>
                  )}
                </div>
                <div
                  ref={parent}
                  className="w-full col-span-3  flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-6"
                >
                  <AppFormLabel label="Ciudad:" />
                  <select
                    value={props.values.city}
                    onChange={(ev) => {
                      props.handleChange(ev);
                      setIdMunicipioState(parseInt(ev.target.value));
                    }}
                    name="city"
                    onBlur={props.handleBlur}
                    className="max-sm:text-xs"
                  >
                    <option value={""}>Ciudad</option>
                    {municipios.map((item) => (
                      <option key={item.idMunicipio} value={item.idMunicipio}>
                        {item.descripcion}
                      </option>
                    ))}
                  </select>
                  {props.errors.city && props.touched.city && (
                    <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                      <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                        {props.errors.city}
                      </span>
                    </div>
                  )}
                </div>

                <div
                  ref={parent}
                  className="w-full col-span-2  flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-12"
                >
                  <AppFormLabel label="Correo Electrónico:" />
                  <AppTextField
                    placeholder="email"
                    value={props.values.correo}
                    name="correo"
                    onChange={props.handleChange}
                    className="w-full"
                    type="email"
                    onBlur={props.handleBlur}
                    inputMode="email"
                  />
                  {props.errors.correo && props.touched.correo && (
                    <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                      <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                        {props.errors.correo}
                      </span>
                    </div>
                  )}
                </div>
                <div
                  ref={parent}
                  className="w-full col-span-1  flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-6"
                >
                  <AppFormLabel label="Edad:" />
                  <AppTextField
                    placeholder="Edad"
                    type="text"
                    value={props.values.edad}
                    name="edad"
                    onChange={props.handleChange}
                    className="w-full"
                    onBlur={props.handleBlur}
                    inputMode="numeric"
                  />
                  {props.errors.edad && props.touched.edad && (
                    <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                      <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                        {props.errors.edad}
                      </span>
                    </div>
                  )}
                </div>
                <div
                  ref={parent}
                  className="w-full col-span-2  flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-6"
                >
                  <AppFormLabel label="Sexo:" />
                  <select
                    value={props.values.sexo}
                    name="sexo"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className="max-sm:text-xs"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                  {props.errors.sexo && props.touched.sexo && (
                    <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                      <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                        {props.errors.sexo}
                      </span>
                    </div>
                  )}
                </div>
                {typeCard.toString() === "credit" && (
                  <div
                    ref={parent}
                    className="w-full col-span-2 flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-6"
                  >
                    <AppFormLabel label="Meses sin Intereses" />
                    <select
                      value={props.values.mesesSI}
                      onChange={props.handleChange}
                      name="mesesSI"
                      onBlur={props.handleBlur}
                      className="max-sm:text-xs"
                    >
                      <option value="">Escoge una opción</option>
                      <option value="0">Una sola exhibición</option>
                      <option value="3">3 Meses sin Intereses</option>
                      <option value="6">6 Meses sin Intereses</option>
                      <option value="9">9 Meses sin Intereses</option>
                      <option value="12">12 Meses sin Intereses</option>
                    </select>
                    {props.errors.mesesSI && props.touched.mesesSI && (
                      <div className="border border-red-800 rounded-md bg w-full p-1 relative -top-2 bg-red-50">
                        <span className="text-red-700 font-semibold text-sm max-sm:text-xs">
                          {props.errors.mesesSI}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="max-sm:hidden">
                <FooterModal />
              </div>
              <hr className="max-sm:hidden" />
              <div className="flex justify-end mt-5">
                <button
                  type="submit"
                  className="bg-sky-900 text-white px-10 py-3 hover:bg-sky-800 transition duration-200"
                  id="pay-button"
                  disabled={loadingPayment}
                >
                  Pagar
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
