import React, { useEffect, useState } from "react";
import { AppModal } from "../../presentation/Components/AppModal/AppModal";
import { Stepper } from "../../presentation/Components/AppStepper";
import { AppButton } from "../../presentation/Components/AppButton";
import { useFormik } from "formik";
import { FormInfoClient } from "./FormInfoClient";
import * as Yup from "yup";
import { CardInfoForm } from "./CardInfoForm";
import Swal from "sweetalert2";
import { useToggle } from "react-use";
import { Loader } from "../../components/Loader";
import { DataInformation } from "./DataInformation";
import { usePaymentMembership } from "../../hooks/use-payment-membership";

export type StepperFormPaymentProps = {
  isVisible: boolean;
  onClose: () => void;
};
export type DataCard = {
  adress: "" | null;
  brand: string | null;
  card_number: string | null;
  creation_date: string | null;
  expiration_month: string | null;
  expiration_year: string | null;
  holder_name: string | null;
  type: string | null;
};
export const StepperFormPayment = ({
  isVisible,
  onClose,
}: StepperFormPaymentProps) => {
  const { loading: loadingPayment, paymentMembership } = usePaymentMembership();
  const [isLoadingCardValidate, setIsloadingValidateCard] = useToggle(false);
  const [paymentData, setPaymentData] = useState({
    deviceSessionId: "",
    tokenId: "",
  });
  const [stateName, setStateName] = useState("");
  const [municipioName, setMunicipioName] = useState("");
  const [tokenID, setTokenID] = useState("");
  const [dataCard, setDataCard] = useState<DataCard>({
    adress: null,
    brand: null,
    card_number: null,
    creation_date: null,
    expiration_month: null,
    expiration_year: null,
    holder_name: null,
    type: null,
  });
  const formInfoClient = useFormik({
    enableReinitialize: true,
    initialValues: {
      nombre: "",
      paterno: "",
      materno: "",
      line1: "",
      postalCode: "",
      state: "",
      city: "",
      correo: "",
      edad: "",
      sexo: "",
      mesesSI: "0",
    },
    validationSchema: Yup.object().shape({
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
      correo: Yup.string()
        .email("Correo inválido")
        .required("Campo Obligatorio"),
      edad: Yup.string()
        .required("Obligatorio")
        .matches(/^\d+$/, "Edad inválida"),
      sexo: Yup.string()
        .min(1, "Debes seleccionar una opción")
        .required("Campo Obligatorio"),
    }),
    onSubmit: () => {},
  });
  const cardInfoForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      card_number: "",
      holder_name: "",
      expiration_year: "",
      expiration_month: "",
      cvv2: "",
    },
    validationSchema: Yup.object().shape({
      card_number: Yup.string().matches(
        /^\d+$/,
        "El número de tarjeta solo deben de ser dígitos"
      ),
      holder_name: Yup.string().required("Campo Obligatorio"),
      expiration_year: Yup.string()
        .matches(/^\d+$/)
        .length(2, "Fecha Inválida"),
      expiration_month: Yup.string()
        .matches(/^\d+$/)
        .length(2, "Fecha Inválida"),
      cvv2: Yup.string().required("Campo Obligatorio"),
    }),
    onSubmit: () => {},
  });

  const onPayment = async () => {
    const respuesta = await paymentMembership({
      cargo: {
        name: formInfoClient.values.nombre,
        lastName: formInfoClient.values.paterno,
        email: formInfoClient.values.correo,
        city: municipioName,
        state: stateName,
        idCiudad: formInfoClient.values.city.toString(),
        idEstado: formInfoClient.values.state.toString(),
        postalCode: formInfoClient.values.postalCode,
        line1: formInfoClient.values.line1,
        cardNumber: cardInfoForm.values.card_number.replace(/(\D)/g, ""),
        holderName: cardInfoForm.values.holder_name,
        expirationMonth: cardInfoForm.values.expiration_month,
        expirationYear: cardInfoForm.values.expiration_year,
        cvv2: cardInfoForm.values.cvv2,
        mesesSI: formInfoClient.values.mesesSI,
      },
      persona: {
        correo: formInfoClient.values.correo,
        nombre: formInfoClient.values.nombre,
        paterno: formInfoClient.values.paterno,
        materno: formInfoClient.values.materno,
        edad: formInfoClient.values.edad.toString,
        sexo: formInfoClient.values.sexo,
      },
      sessionId: tokenID,
    });
    if (respuesta.data.result) {
      Swal.fire({
        title: "Pago exitoso",
        text: `Para finalizar tu suscripción revisa tu correo ${formInfoClient.values.correo}`,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#15A186",
      });
      formInfoClient.resetForm();
      cardInfoForm.resetForm();

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
    /*global OpenPay*/
    window.OpenPay.setId(import.meta.env.VITE_API_KEY_OPENPAY_ID);
    window.OpenPay.setApiKey(import.meta.env.VITE_API_KEY_OPENPAY);
    // window.OpenPay.setSandboxMode(import.meta.env.VITE_API_KEY_OPENPAY_MODE);
    window.OpenPay.setSandboxMode(true);
    //Se genera el id de dispositivo
    setPaymentData({
      ...paymentData,
      deviceSessionId: window.OpenPay.deviceData.setup(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Loader isVisible={isLoadingCardValidate}>
        <div className="text-center">
          <span>
            <p className="font-semibold text-lg text-success-600">
              Validando los datos de la tarjeta
            </p>
            <br />
            No recargues ni cierres la página. El proceso puede tardar algunos
            segundos.
          </span>
        </div>
      </Loader>
      <Loader isVisible={loadingPayment}>
        <div className="text-center">
          <span>
            <p className="font-semibold text-lg text-success-600">
              Generando Cobro
            </p>
            <br />
            No recargues ni cierres la página. El proceso puede tardar algunos
            segundos.
          </span>
        </div>
      </Loader>
      <AppModal onClose={onClose} isVisible={isVisible}>
        <Stepper initialValue={{ step: 1 }}>
          {({ handleChange }) => {
            const onSubmit = () => {
              handlePayment();
            };
            const handlePayment = () => {
              createToken();
            };

            const createToken = () => {
              window.OpenPay.token.create(
                {
                  card_number: cardInfoForm.values.card_number.replace(
                    /(\D)/g,
                    ""
                  ),
                  holder_name: cardInfoForm.values.holder_name,
                  expiration_year: cardInfoForm.values.expiration_year,
                  expiration_month: cardInfoForm.values.expiration_month,
                  cvv2: cardInfoForm.values.cvv2,
                },
                sucessCallbak,
                errorCallBack
              );
            };

            const sucessCallbak = (response: any) => {
              setPaymentData({
                ...paymentData,
                tokenId: response.data.id,
              });

              setTokenID(response.data.id);
              setDataCard(response.data.card);

              Swal.fire({
                icon: "success",
                title: "Tarjeta Válida",
                showConfirmButton: false,
                timer: 2000,
              });
              handleChange({ value: 3 });
              setIsloadingValidateCard(false);
            };

            const errorCallBack = (response: any) => {
              Swal.fire({
                icon: "error",
                title: `${response.data.description}`,
                showConfirmButton: true,
              });
              handleChange({ value: 2 });
              setIsloadingValidateCard(false);
            };
            return (
              <>
                <Stepper.Header>
                  <Stepper.Step step={1} />
                  <Stepper.Step step={2} />
                  <Stepper.Step step={3} />
                </Stepper.Header>
                <form action="">
                  <Stepper.Items className="mt-4">
                    <Stepper.StepContent step={1}>
                      <div className="flex flex-col items-center justify-center">
                        <FormInfoClient
                          formInfoClient={formInfoClient}
                          setStateName={setStateName}
                          setMunicipioName={setMunicipioName}
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <AppButton
                          colorScheme="primary"
                          onClick={() => handleChange({ value: 2 })}
                          isDisabled={
                            formInfoClient.values.nombre === "" ||
                            formInfoClient.values.paterno === "" ||
                            formInfoClient.values.materno === "" ||
                            formInfoClient.values.correo === "" ||
                            // formInfoClient.values.city === "" ||
                            // formInfoClient.values.state === "" ||
                            formInfoClient.values.edad === "" ||
                            formInfoClient.values.line1 === "" ||
                            formInfoClient.values.postalCode === "" ||
                            formInfoClient.values.sexo === ""
                          }
                        >
                          Siguiente
                        </AppButton>
                      </div>
                    </Stepper.StepContent>
                    <Stepper.StepContent step={2}>
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-full">
                          <CardInfoForm cardInfoForm={cardInfoForm} />
                        </div>
                        <div className="flex flex-row gap-3">
                          <AppButton onClick={() => handleChange({ value: 1 })}>
                            Atrás
                          </AppButton>
                          <AppButton
                            colorScheme="primary"
                            onClick={() => {
                              setIsloadingValidateCard(true);
                              onSubmit();
                            }}
                            isDisabled={
                              cardInfoForm.values.card_number === "" ||
                              cardInfoForm.values.holder_name === "" ||
                              cardInfoForm.values.expiration_month === "" ||
                              cardInfoForm.values.expiration_year === "" ||
                              cardInfoForm.values.cvv2 === "" ||
                              isLoadingCardValidate
                            }
                          >
                            Siguiente
                          </AppButton>
                        </div>
                      </div>
                    </Stepper.StepContent>
                    <Stepper.StepContent step={3}>
                      <div className="flex flex-col items-center justify-center">
                        <DataInformation
                          formInfoClient={formInfoClient}
                          cardInfoForm={cardInfoForm}
                          dataCard={dataCard}
                        />
                        <div className="flex flex-row gap-3 mt-3">
                          <AppButton onClick={() => handleChange({ value: 2 })}>
                            Atrás
                          </AppButton>
                          <AppButton
                            colorScheme="primary"
                            onClick={() => onPayment()}
                            isDisabled={
                              (dataCard.type === "credit" &&
                                formInfoClient.values.mesesSI === "") ||
                              loadingPayment
                            }
                          >
                            Realizar Pago
                          </AppButton>
                        </div>
                      </div>
                    </Stepper.StepContent>
                  </Stepper.Items>
                </form>
              </>
            );
          }}
        </Stepper>
      </AppModal>
    </>
  );
};
