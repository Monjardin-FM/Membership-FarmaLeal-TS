import React, { useState } from "react";
import ImageHero from "../assets/img/Banner_VIP.jpg";
import ImageHeroMovil from "../assets/img/Banner_VIP_Movil.jpg";
import { AppFormLabel } from "../presentation/Components/AppFormLabel";
import { AppTextField } from "../presentation/Components/AppTextField";
import Swal from "sweetalert2";

type VipUserForm = {
  nombreCompleto: string;
  nombreMedico: string;
  especialidad: string;
  estado: string;
  alcaldia: string;
  colonia: string;
  folio: string;
};
export const MembershipVIP = () => {
  const [formData, setFormData] = useState<VipUserForm>({
    nombreCompleto: "",
    nombreMedico: "",
    especialidad: "",
    estado: "",
    alcaldia: "",
    colonia: "",
    folio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    return new Promise((resolve, reject) => {
      fetch(`${import.meta.env.VITE_API_URL}/membresia/CreateUserVip`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
          }
          if (!data.success) {
            Swal.fire({
              title: "Error al intentar activar la membresía.",
              text: `${data.message}`,
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor: "#15A186",
            });
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
          console.log(error);
          reject();
        });
    });
  };
  return (
    <>
      <section id="hero" className="flex flex-col items-center w-screen">
        <div className="w-full relative">
          {/* <div
          className="absolute w-full h-4/6 self-center left-0 hover:cursor-pointer"
          //   onClick={() => openModalTypePayment()}
        ></div> */}

          {/* Imagen para Desktop */}
          <div className="hidden sm:block">
            <img src={ImageHero} alt="Hero Desktop" />
          </div>

          {/* Imagen para Móvil */}
          <div className="block sm:hidden">
            <img src={ImageHeroMovil} alt="Hero Móvil" />
          </div>
        </div>
      </section>
      <section className="sm:p-10 p-3">
        <div className="max-w-full sm:mx-20 mx-auto  p-6 bg-white rounded-2xl shadow-lg border border-gray-200 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            ¡Te obsequiamos una membresía anual de Costo Farma!
          </h2>
          <p className="mb-4 text-gray-700">
            Queremos agradecerte tu apoyo con un beneficio especial: una{" "}
            <strong>membresía totalmente gratuita</strong> con valor de{" "}
            <strong>$2,100 al año</strong>, que te permitirá comprar
            medicamentos en{" "}
            <a
              href="https://costofarma.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              costofarma.mx
            </a>{" "}
            al mejor precio.
          </p>
          <p className="mb-4 text-gray-700">
            Es un beneficio pensado para ti y tu familia, para que puedan
            ahorrar en sus tratamientos sin comprometer la calidad.
          </p>
          <p className="mb-4 text-gray-700">
            Además, vamos a dejar algunos volantes informativos en el
            consultorio. Si puedes ayudarnos a compartir esta información con
            tus pacientes que toman medicamentos de forma regular, estarías
            haciendo una gran diferencia.
          </p>
          <p className="mb-6 text-gray-700 font-semibold">
            ¡Puedes ayudarles a ahorrar mucho en sus recetas!
          </p>
          <p className="text-gray-700 font-medium">
            Gracias por ser parte de este esfuerzo por hacer la salud más
            accesible para todos.
          </p>
          <div className="grid grid-cols-4 gap-3 w-full mt-5 border border-radius-2 p-3 rounded-xl bg-gray-100">
            <div className="sm:col-span-1 col-span-4">
              <AppFormLabel label="Nombre Completo:" />
              <AppTextField
                dataOpenCard="nombreCompleto"
                name="nombreCompleto"
                onChange={handleChange}
                placeholder="Juan García"
                value={formData.nombreCompleto}
                className="w-full "
                inputMode="text"
              />
            </div>
            <div className="sm:col-span-1 col-span-4">
              <AppFormLabel label="Nombre del Médico:" />
              <AppTextField
                dataOpenCard="nombreMedico"
                name="nombreMedico"
                onChange={handleChange}
                placeholder=""
                value={formData.nombreMedico}
                className="w-full "
                inputMode="text"
              />
            </div>
            <div className="sm:col-span-1 col-span-4">
              <AppFormLabel label="Especialidad:" />
              <AppTextField
                dataOpenCard="especialidad"
                name="especialidad"
                onChange={handleChange}
                placeholder=""
                value={formData.especialidad}
                className="w-full "
                inputMode="text"
              />
            </div>
            <div className="sm:col-span-1 col-span-4">
              <AppFormLabel label="Estado:" />
              <AppTextField
                dataOpenCard="estado"
                name="estado"
                onChange={handleChange}
                placeholder=""
                value={formData.estado}
                className="w-full "
                inputMode="text"
              />
            </div>
            <div className="sm:col-span-1 col-span-4">
              <AppFormLabel label="Alcaldía o Municipio:" />
              <AppTextField
                dataOpenCard="alcaldia"
                name="alcaldia"
                onChange={handleChange}
                placeholder=""
                value={formData.alcaldia}
                className="w-full "
                inputMode="text"
              />
            </div>
            <div className="sm:col-span-1 col-span-4">
              <AppFormLabel label="Colonia:" />
              <AppTextField
                dataOpenCard="colonia"
                name="colonia"
                onChange={handleChange}
                placeholder=""
                value={formData.colonia}
                className="w-full "
                inputMode="text"
              />
            </div>
            <div className="sm:col-span-1 col-span-4">
              <AppFormLabel label="Folio:" />
              <AppTextField
                dataOpenCard="folio"
                name="folio"
                onChange={handleChange}
                placeholder=""
                value={formData.folio}
                className="w-full "
                inputMode="text"
              />
            </div>
            <div className="sm:col-span-4 col-span-4 flex flex-col sm:items-end">
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="mt-5 px-4 py-2 bg-info-600 text-white rounded-xl hover:bg-info-700 transition duration-300"
              >
                Enviar{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
