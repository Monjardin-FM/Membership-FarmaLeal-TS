import React from "react";
import Header from "../../assets/img/ACTU.PAGO_.jpg";
import HeaderMobile from "../../assets/img/ACTU_PAGO_MOVIL.jpg";
import { PaymentSection } from "../../components/shopify-payment-section/PaymentSection";
export const Reactivation = () => {
  return (
    <div className="flex flex-col itmes-center justify-center w-full gap-5">
      <picture>
        {/* Imagen para pantallas grandes (desktop) */}
        <source media="(min-width: 768px)" srcSet={Header} />
        {/* Imagen para pantallas pequeñas (mobile) */}
        <img
          src={HeaderMobile}
          alt="Imagen responsive"
          className="w-full h-auto"
        />
      </picture>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-12 mx-3 sm:mx-0">
          <PaymentSection />
        </div>
      </div>
    </div>
  );
};
