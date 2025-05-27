import Comprar from "../assets/img/comprar-button.jpg";
import { CiDeliveryTruck } from "react-icons/ci";
import { MembershipTypes } from "./shopify-payment-section/PaymentSection";
export type TableProps = {
  onOpenPaymentModal: (type: string) => void;
  memberships: MembershipTypes[];
};

export const Table = ({ onOpenPaymentModal, memberships }: TableProps) => {
  const classGrids = `grid grid-cols-${
    memberships.length + 1
  } border border-black border-collapse color-primary text-center`;
  return (
    <div className="flex flex-col items-center gap-3">
      <div>
        {memberships.length === 3 && (
          <div className="left-1/2 bg-warn-400 rounded-2xl sm:text-3xl text-lg font-extrabold text-center w-full p-2">
            Costo de membresía
          </div>
        )}
      </div>
      <div className={classGrids}>
        {/* Encabezados */}
        <div className="border sm:p-4 font-bold sm:text-lg text-xs flex items-center justify-center">
          Tipo de Membresía
        </div>
        {memberships.map((m) => (
          <div
            key={m.tipo + m.id}
            className="border sm:p-4 font-extrabold sm:text-2xl text-lg relative"
          >
            {m.tipo}
          </div>
        ))}

        {/* Vigencia */}
        <div className="border sm:p-4 font-bold sm:text-lg text-xs flex items-center justify-center">
          Vigencia
        </div>
        {memberships.map((m) => (
          <div
            key={m.tipo + "-vigencia" + m.id}
            className="border sm:p-4 font-extrabold sm:text-3xl text-lg "
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
            key={m.tipo + "-costo" + m.id}
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
            key={m.tipo + "-pago" + m.id}
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
          <span>Envíos&nbsp;</span>
          <b> GRATIS</b>
        </div>
        {memberships.map((m) => (
          <div
            key={m.tipo + "-envios" + m.id}
            className="border sm:p-4 flex flex-col items-center"
          >
            <CiDeliveryTruck size={60} />
            <span className="font-extrabold sm:text-lg text-sm">
              {m.envios}
            </span>
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
            key={m.tipo + "-comprar" + m.id}
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
    </div>
  );
};
