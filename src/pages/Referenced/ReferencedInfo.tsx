import React from "react";
import HeaderDesktop from "../../assets/img/Referidos-desktop.jpg";
import HeaderMobile from "../../assets/img/Referidos-mobile.jpg";
import Content1 from "../../assets/img/Landing_Recompensa-04.png";
import Content2 from "../../assets/img/Landing_Recompensa-05.png";
export const ReferencedInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 ">
      <picture>
        {/* Imagen para pantallas grandes (desktop) */}
        <source media="(min-width: 768px)" srcSet={HeaderDesktop} />
        {/* Imagen para pantallas pequeñas (mobile) */}
        <img
          src={HeaderMobile}
          alt="Imagen responsive"
          className="w-full h-auto"
        />
      </picture>
      <div className="flex sm:mx-40">
        <img src={Content1} alt="" />
      </div>
      <div className="mx-40 font-semibold text-3xl text-center">
        <p>
          Solo comparte el enlace que aparece en la sección de tu cuenta para
          referir a un amigo. Es tu liga personal de invitación y con eso tu
          referido podrá inscribirse correctamente.
        </p>
      </div>
      <div className="flex sm:mx-40">
        <img src={Content2} alt="" />
      </div>
    </div>
  );
};
