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
      <div className="flex sm:mx-40">
        <img src={Content2} alt="" />
      </div>
    </div>
  );
};
