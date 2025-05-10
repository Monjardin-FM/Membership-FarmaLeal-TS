import Comprar from "../assets/img/comprar-button.jpg";
import { CiDeliveryTruck } from "react-icons/ci";
export type TableProps = {
  onOpenPaymentModal: (type: string) => void;
};
export const Table = ({ onOpenPaymentModal }: TableProps) => {
  const memberships = [
    {
      tipo: "Anual",
      vigencia: "12 meses",
      costo: "$1,650",
      ahorro: "Ahorra $150",
      nota: null,
      pago: "Pago a 12 MSI",
      subpago: "con tarjeta de crédito",
      envios: "12 Envíos al año",
      detalleEnvios: "12 envíos GRATIS pagando membresía anual",
      id: "1",
    },
    {
      tipo: "Anual",
      vigencia: "12 meses",
      costo: "$1,500",
      ahorro: "mensual $125",
      nota: null,
      pago: "Pago de contado",
      subpago: "pago en una sola exhibición",
      envios: "12 Envíos al año",
      detalleEnvios: "12 envíos GRATIS pagando membresía anual",
      id: "3",
    },
    {
      tipo: "Mensual",
      vigencia: "1 mes",
      costo: "$150",
      ahorro: null,
      nota: "*Cancela cuando quieras",
      pago: "Pago recurrente mensual",
      subpago: "",
      envios: "1 Envío al mes",
      detalleEnvios: "1 envío GRATIS al mes con pago recurrente",
      id: "2",
    },
  ];
  return (
    <div className="grid grid-cols-4 border border-black border-collapse mt-10 color-primary text-center">
      {/* Encabezados */}
      <div className="border sm:p-4 font-bold sm:text-lg text-xs flex items-center justify-center">
        Tipo de Membresía
      </div>
      {memberships.map((m) => (
        <div
          key={m.tipo}
          className="border sm:p-4 font-extrabold sm:text-2xl text-lg relative"
        >
          {m.tipo}
          {m.tipo === "Anual" && m.id === "1" && (
            <div className="absolute -top-10 sm:-top-20 left-1/2 bg-warn-400 rounded-2xl sm:text-3xl text-sm font-extrabold text-center w-full">
              Costo de membresía
            </div>
          )}
        </div>
      ))}

      {/* Vigencia */}
      <div className="border sm:p-4 font-bold sm:text-lg text-xs flex items-center justify-center">
        Vigencia
      </div>
      {memberships.map((m) => (
        <div
          key={m.tipo + "-vigencia"}
          className="border sm:p-4 font-extrabold sm:text-3xl text-lg"
        >
          {m.vigencia}
        </div>
      ))}

      {/* Costo */}
      <div className="border sm:p-4 font-bold sm:text-lg text-xs flex items-center justify-center">
        Costo de membresía
      </div>
      {memberships.map((m) => (
        <div
          key={m.tipo + "-costo"}
          className="border sm:p-4 flex flex-col items-center justify-center"
        >
          <p className="bg-warn-500 p-2 rounded-xl font-extrabold sm:text-3xl text-lg">
            {m.costo}
          </p>
          {m.ahorro && <span className="text-xs font-bold">{m.ahorro}</span>}
          {m.nota && <span className="text-xs font-bold">{m.nota}</span>}
        </div>
      ))}

      {/* Tipo de pago */}
      <div className="border sm:p-4 font-bold sm:text-lg text-xs flex items-center justify-center">
        Tipo de pago
      </div>
      {memberships.map((m) => (
        <div
          key={m.tipo + "-pago"}
          className="border sm:p-4 flex flex-col items-center"
        >
          <span className="font-extrabold sm:text-3xl text-sm">{m.pago}</span>
          {m.subpago && (
            <span className="text-xs font-semibold">{m.subpago}</span>
          )}
        </div>
      ))}

      {/* Envíos */}
      <div className="border sm:p-4 font-bold sm:text-lg text-xs flex items-center justify-center">
        Envíos <b>GRATIS</b>
      </div>
      {memberships.map((m) => (
        <div
          key={m.tipo + "-envios"}
          className="border sm:p-4 flex flex-col items-center"
        >
          <CiDeliveryTruck size={60} />
          <span className="font-extrabold sm:text-lg text-sm">{m.envios}</span>
          <span className="sm:text-sm text-xs font-bold">
            {m.detalleEnvios}
          </span>
        </div>
      ))}

      {/* Comprar */}
      <div className="border sm:p-4 font-bold sm:text-lg text-xs flex items-center justify-center">
        Empieza a ahorrar
      </div>
      {memberships.map((m) => (
        <div
          key={m.tipo + "-comprar"}
          className="border sm:p-4 items-center justify-center flex"
        >
          <img
            src={Comprar}
            alt={`Comprar ${m.tipo}`}
            className="cursor-pointer"
            onClick={() => onOpenPaymentModal(m.id)}
          />
        </div>
      ))}
    </div>
  );
};
