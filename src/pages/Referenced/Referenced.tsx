import React from "react";
import { PaymentSection } from "../../components/shopify-payment-section/PaymentSection";
import Girl from "../../assets/img/referenced-girl.png";
import Header from "../../assets/img/Header-referidos.png";
export const Referenced = () => {
  return (
    <div className="flex flex-col itmes-center justify-center w-full">
      <div>
        <picture>
          <img src={Header} alt="Logo Referido" className="w-full h-auto" />
        </picture>
      </div>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="sm:col-span-4 col-span-12 items-center justify-center hidden sm:flex">
          <picture>
            <img
              src={Girl}
              alt="Logo Referido"
              className="w-full h-auto"
              width="50%"
            />
          </picture>
        </div>
        <div className="sm:col-span-8 col-span-12 mx-3 sm:mx-0">
          <PaymentSection />
        </div>
      </div>
    </div>
  );
};
