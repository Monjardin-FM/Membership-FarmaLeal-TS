import React, { useState } from "react";
import Swal from "sweetalert2";
import { AppFormLabel } from "../presentation/Components/AppFormLabel";
import { AppTextField } from "../presentation/Components/AppTextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type VipUserForm = {
  nombreCompleto: string;
  mail: string;
  nombreMedico: string;
  especialidad: string;
  estado: string;
  alcaldia: string;
  colonia: string;
  folio: string;
};
export const MembershipVIPForm = () => {
  const [parent] = useAutoAnimate();

  const membershipForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      nombreCompleto: "",
      mail: "",
      nombreMedico: "",
      especialidad: "",
      estado: "",
      alcaldia: "",
      colonia: "",
      folio: "",
    },
    validationSchema: Yup.object().shape({
      nombreCompleto: Yup.string().required("Campo requerido"),
      mail: Yup.string().email("Email inválido").required("Campo requerido"),
      nombreMedico: Yup.string().required("Campo requerido"),
      especialidad: Yup.string().required("Campo requerido"),
      estado: Yup.string().required("Campo requerido"),
      alcaldia: Yup.string().required("Campo requerido"),
      colonia: Yup.string().required("Campo requerido"),
      folio: Yup.string().required("Campo requerido"),
    }),
    onSubmit: () => {
      onSubmitForm();
    },
  });

  const onSubmitForm = async () => {
    return new Promise((resolve, reject) => {
      fetch(`${import.meta.env.VITE_API_URL}/membresia/CreateUserVip`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(membershipForm.values),
      })
        .then((response) => response.json())
        .then((data) => {
          // recibir el resultado del pago
          resolve(data);
          if (data.success) {
            Swal.fire({
              title: "Pago exitoso",
              text: `La activación de tu membresía se ha procesado correctamente.`,
              icon: "success",
              confirmButtonText: "Ok",
              confirmButtonColor: "#15A186",
            });
            membershipForm.resetForm();
          }
          if (!data.success) {
            Swal.fire({
              title: "Error al intentar activar la membresía.",
              text: `${data.message}`,
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor: "#15A186",
            });
            membershipForm.resetForm();
          }
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago
          Swal.fire({
            title: "Error al intentar activar la membresía.",
            text: `Error: ${error}`,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#15A186",
          });
          membershipForm.resetForm();

          reject();
        });
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        membershipForm.handleSubmit();
      }}
    >
      <div className="grid grid-cols-4 gap-3 w-full mt-5 border border-radius-2 p-3 rounded-xl bg-gray-100">
        <div ref={parent} className="sm:col-span-1 col-span-4">
          <AppFormLabel label="Nombre Completo:" />
          <AppTextField
            dataOpenCard="nombreCompleto"
            name="nombreCompleto"
            onChange={membershipForm.handleChange}
            placeholder="Juan García"
            value={membershipForm.values.nombreCompleto}
            className="w-full "
            inputMode="text"
          />
          {membershipForm.errors.nombreCompleto && (
            <div className="border border-danger-800 bg-danger-100 rounded-md bg w-full p-1 relative -top-2 ">
              <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                {membershipForm.errors.nombreCompleto}
              </span>
            </div>
          )}
        </div>
        <div ref={parent} className="sm:col-span-1 col-span-4">
          <AppFormLabel label="Correo Electrónico:" />
          <AppTextField
            dataOpenCard="mail"
            name="mail"
            onChange={membershipForm.handleChange}
            placeholder="correo@mail.com"
            value={membershipForm.values.mail}
            className="w-full "
            inputMode="text"
          />
          {membershipForm.errors.mail && (
            <div className="border border-danger-800 bg-danger-100 rounded-md bg w-full p-1 relative -top-2 ">
              <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                {membershipForm.errors.mail}
              </span>
            </div>
          )}
        </div>
        <div ref={parent} className="sm:col-span-1 col-span-4">
          <AppFormLabel label="Nombre del Médico:" />
          <AppTextField
            dataOpenCard="nombreMedico"
            name="nombreMedico"
            onChange={membershipForm.handleChange}
            placeholder=""
            value={membershipForm.values.nombreMedico}
            className="w-full "
            inputMode="text"
          />
          {membershipForm.errors.nombreMedico && (
            <div className="border border-danger-800 bg-danger-100 rounded-md bg w-full p-1 relative -top-2 ">
              <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                {membershipForm.errors.nombreMedico}
              </span>
            </div>
          )}
        </div>
        <div ref={parent} className="sm:col-span-1 col-span-4">
          <AppFormLabel label="Especialidad:" />
          <AppTextField
            dataOpenCard="especialidad"
            name="especialidad"
            onChange={membershipForm.handleChange}
            placeholder=""
            value={membershipForm.values.especialidad}
            className="w-full "
            inputMode="text"
          />
          {membershipForm.errors.especialidad && (
            <div className="border border-danger-800 bg-danger-100 rounded-md bg w-full p-1 relative -top-2 ">
              <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                {membershipForm.errors.especialidad}
              </span>
            </div>
          )}
        </div>
        <div ref={parent} className="sm:col-span-1 col-span-4">
          <AppFormLabel label="Estado:" />
          <AppTextField
            dataOpenCard="estado"
            name="estado"
            onChange={membershipForm.handleChange}
            placeholder=""
            value={membershipForm.values.estado}
            className="w-full "
            inputMode="text"
          />
          {membershipForm.errors.estado && (
            <div className="border border-danger-800 bg-danger-100 rounded-md bg w-full p-1 relative -top-2 ">
              <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                {membershipForm.errors.estado}
              </span>
            </div>
          )}
        </div>
        <div ref={parent} className="sm:col-span-1 col-span-4">
          <AppFormLabel label="Alcaldía o Municipio:" />
          <AppTextField
            dataOpenCard="alcaldia"
            name="alcaldia"
            onChange={membershipForm.handleChange}
            placeholder=""
            value={membershipForm.values.alcaldia}
            className="w-full "
            inputMode="text"
          />
          {membershipForm.errors.alcaldia && (
            <div className="border border-danger-800 bg-danger-100 rounded-md bg w-full p-1 relative -top-2 ">
              <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                {membershipForm.errors.alcaldia}
              </span>
            </div>
          )}
        </div>
        <div ref={parent} className="sm:col-span-1 col-span-4">
          <AppFormLabel label="Colonia:" />
          <AppTextField
            dataOpenCard="colonia"
            name="colonia"
            onChange={membershipForm.handleChange}
            placeholder=""
            value={membershipForm.values.colonia}
            className="w-full "
            inputMode="text"
          />
          {membershipForm.errors.colonia && (
            <div className="border border-danger-800 bg-danger-100 rounded-md bg w-full p-1 relative -top-2 ">
              <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                {membershipForm.errors.colonia}
              </span>
            </div>
          )}
        </div>
        <div ref={parent} className="sm:col-span-1 col-span-4">
          <AppFormLabel label="Folio:" />
          <AppTextField
            dataOpenCard="folio"
            name="folio"
            onChange={membershipForm.handleChange}
            placeholder=""
            value={membershipForm.values.folio}
            className="w-full "
            inputMode="text"
          />
          {membershipForm.errors.folio && (
            <div className="border border-danger-800 bg-danger-100 rounded-md bg w-full p-1 relative -top-2 ">
              <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                {membershipForm.errors.folio}
              </span>
            </div>
          )}
        </div>
        <div className="sm:col-span-4 col-span-4 flex flex-col sm:items-end">
          <button
            type="submit"
            disabled={membershipForm.isSubmitting}
            //   onClick={() => {
            //     membershipForm.handleSubmit();
            //   }}
            className="mt-5 px-4 py-2 bg-info-600 text-white rounded-xl hover:bg-info-700 transition duration-300"
          >
            {membershipForm.isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </form>
  );
};
