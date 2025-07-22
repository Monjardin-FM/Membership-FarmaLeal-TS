import React from "react";
import { AppModal } from "../../presentation/Components/AppModal/AppModal";
type AnualPaymentSelectorModalProps = {
  onClose: () => void;
  isVisible: boolean;
  onOpenPaymentModal: (type: string) => void;
};
export const AnualPaymentSelectorModal = ({
  isVisible,
  onClose,
  onOpenPaymentModal,
}: AnualPaymentSelectorModalProps) => {
  const paymentOptions = [
    {
      amount: 1500,
      text: "+ IVA",
      label: "Pago en una sola exhibición",
      modalType: "3",
    },
    {
      amount: 1650,
      text: "+ IVA",
      label: "12 MSI",
      modalType: "1",
    },
  ];
  return (
    <AppModal onClose={onClose} isVisible={isVisible}>
      <div className="h-full sm:mt-1 mt-3 flex flex-col items-center justify-center gap-10  text-center">
        <h1 className="text-info-900 sm:text-3xl font-semibold text-xl">
          Selecciona tu membresía (anual)
        </h1>
        <div className="flex items-center justify-center gap-4 sm:gap-10 sm:w-3/4 h-40">
          {paymentOptions.map(({ amount, label, modalType, text }) => (
            <div
              key={modalType}
              className="relative flex flex-col items-center justify-center text-center p-8 border-2 bg-warn-500 text-info-800 rounded-lg hover:cursor-pointer hover:bg-info-900 hover:text-white transition-all duration-300 ease-in-out w-1/2 h-full overflow-hidden"
              onClick={() => onOpenPaymentModal(modalType)}
            >
              {modalType === "3" && (
                <div className="absolute top-4 -left-7 rotate-[-45deg] bg-danger-600 text-white px-6 py-1 text-xs font-bold shadow-md">
                  Promoción
                </div>
              )}

              <span className="sm:text-3xl text-xl font-extrabold">
                ${amount}
              </span>
              <span className="sm:text-lg text-xs font-semibold">{text}</span>
              <span className="sm:text-xl text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </AppModal>
  );
};
