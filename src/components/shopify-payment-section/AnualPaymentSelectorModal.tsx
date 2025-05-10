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
      amount: 1740,
      label: "12 meses de contado",
      modalType: "3",
    },
    {
      amount: 1914,
      label: "12 MSI",
      modalType: "1",
    },
  ];
  return (
    <AppModal onClose={onClose} isVisible={isVisible}>
      <div className="h-full sm:mt-1 mt-3 flex flex-col items-center justify-center gap-10 p-10 text-center">
        <h1 className="text-info-900 text-3xl font-semibold">
          Selecciona el tipo de pago anual
        </h1>
        <div className="flex items-center justify-center gap-10 w-3/4 h-40">
          {paymentOptions.map(({ amount, label, modalType }) => (
            <div
              key={modalType}
              className="flex flex-col items-center justify-center text-center p-5 border-2 bg-warn-500 text-info-800 rounded-lg hover:cursor-pointer hover:bg-info-900 hover:text-white transition-all duration-300 ease-in-out w-1/2 h-full"
              onClick={() => onOpenPaymentModal(modalType)}
            >
              <span className="text-3xl font-extrabold">${amount}</span>
              <span className="text-xl font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </AppModal>
  );
};
