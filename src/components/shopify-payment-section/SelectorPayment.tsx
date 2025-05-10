import React from "react";
import ButtonInfo from "../../assets/img/Botones_Login-16.png";
import ButtonAnual from "../../assets/img/Botones_Login-17.png";
import ButtonMensual from "../../assets/img/Botones_Login-18.png";
type SelectorPaymentProps = {
  onOpenPaymentModal: (type: string) => void;
  onOpenaAnualPaymentSelector: () => void;
};
export const SelectorPayment = ({
  onOpenPaymentModal,
  onOpenaAnualPaymentSelector,
}: SelectorPaymentProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-10 text-center">
      <h1 className="text-info-900 text-4xl font-semibold">
        Hazte socio de CostoFarma
      </h1>
      <div className="flex width-1/2">
        <a
          href="http://costofarma.mx/pages/membresianv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ButtonInfo} width="100%" />
        </a>
      </div>
      <span className="text-info-900 text-2xl font-medium">
        ¡Estás a un paso de disfrutar increíbles descuentos!
      </span>
      <div className="flex flex-row items-center justify-center gap-4 ">
        <div
          className="hover:cursor-pointer flex flex-col items-center justify-center"
          onClick={() => {
            onOpenaAnualPaymentSelector();
          }}
        >
          <img src={ButtonAnual} width="80%" />
        </div>
        <div
          className="hover:cursor-pointer flex flex-col items-center justify-center"
          onClick={() => {
            onOpenPaymentModal("2");
          }}
        >
          <img src={ButtonMensual} width="80%" />
        </div>
      </div>
    </div>
  );
};
