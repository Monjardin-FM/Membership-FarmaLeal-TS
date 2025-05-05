import React from "react";
import ImageHero from "../assets/img/Banner_VIP.jpg";
import ImageHeroMovil from "../assets/img/Banner_VIP_Movil.jpg";
import { MembershipVIPForm } from "./Membership-VIP-Form";

export const MembershipVIP = () => {
  return (
    <>
      <section id="hero" className="flex flex-col items-center w-screen">
        <div className="w-full relative">
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
          <MembershipVIPForm />
        </div>
      </section>
    </>
  );
};
