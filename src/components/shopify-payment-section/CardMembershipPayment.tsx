import React from "react";
import { AppButton } from "../../presentation/Components/AppButton";
type CardMembershipPaymentProps = {
  onOpenPaymentModal: (id: string) => void;
  onOpenaAnualPaymentSelector: () => void;
};
export const CardMembershipPayment = ({
  onOpenPaymentModal,
  onOpenaAnualPaymentSelector,
}: CardMembershipPaymentProps) => {
  const cardsMembership = [
    {
      id: "2",
      tipo: "Mensual",
      costo: "$150",
      pago: "Pago recurrente mensual",
      subpago: "*(cancela cuando quieras)",
      envio: "1 Envío al mes",
    },
    {
      id: "3",
      tipo: "Anual",
      costo: "$1,650",
      pago: "Por promoción pago de contado ($1500 + IVA) o 12 MSI ($1650 + IVA)",
      envio: "12 Envíos al año",
    },
    // {
    //   id: "1",
    //   tipo: "Anual",
    //   costo: "$1,650",
    //   pago: "Pago a 12 MSI",
    //   envio: "12 Envíos al año",
    // },
  ];
  return (
    <div className="w-full overflow-x-auto h-full">
      <div className="flex gap-4 p-10 sm:justify-center">
        {cardsMembership.map((card, index) => (
          <div
            key={card.id}
            className={`gap-3 border p-8 rounded-xl flex flex-col items-center min-w-[300px] max-w-[300px] hover:scale-110 transform transition-transform duration-300  relative ${
              index === 0 ? "bg-info-100 shadow-xl " : "bg-white"
            }`}
          >
            {index === 0 && (
              <span className="absolute -top-2 bg-info-500 text-gray-200 text-xs font-bold px-2 py-1 rounded-full">
                Más Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{card.tipo}</h3>
            <p className="text-4xl font-bold">{card.costo}</p>
            <AppButton
              colorScheme="info"
              variant="solid"
              onClick={() => {
                if (card.id === "2") {
                  onOpenPaymentModal(card.id);
                } else {
                  onOpenaAnualPaymentSelector();
                }
              }}
            >
              Suscribirse ahora
            </AppButton>
            <div className="my-6 border-t border-gray-400 w-full h-0"></div>
            <span className="text-sm">{card.pago}</span>
            {card.subpago && (
              <span className="text-xs font-semibold -mt-4">
                {card.subpago}
              </span>
            )}
            <span className="text-sm">{card.envio}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
