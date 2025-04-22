import Comprar from "../assets/img/comprar-button.jpg";
import { CiDeliveryTruck } from "react-icons/ci";
export type TableProps = {
  onOpenPaymentModal: (type: string) => void;
};
export const Table = ({ onOpenPaymentModal }: TableProps) => {
  return (
    <div className="grid grid-cols-3 border border-black border-collapse mt-10 color-primary">
      {/* Fila: Encabezado */}
      <div className="border border-black p-4 flex items-center justify-center col-span-1 text-center">
        <span className="sm:text-lg font-bold text-sm">Tipo de Membresía</span>
      </div>
      <div className="border border-black p-4 flex items-center justify-center col-span-1 relative">
        <span className="sm:text-4xl  font-extrabold">Anual</span>
        <div className="absolute -top-12 p-2 bg-warn-400 rounded-2xl text-center">
          <span className="font-extrabold sm:text-2xl">Costo de membresía</span>
        </div>
      </div>
      <div className="border border-black p-4 flex items-center justify-center col-span-1">
        <span className="sm:text-4xl font-extrabold">Mensual</span>
      </div>

      {/* Fila: Vigencia */}
      <div className="border border-black p-4 flex items-center justify-center col-span-1">
        <span className="sm:text-lg font-bold text-sm">Vigencia</span>
      </div>
      <div className="border border-black p-4 flex items-center justify-center col-span-1 text-center">
        <span className="sm:text-4xl font-extrabold">12 meses</span>
      </div>
      <div className="border border-black p-4 flex items-center justify-center col-span-1 text-center">
        <span className="sm:text-4xl font-extrabold">1 mes</span>
      </div>

      {/* Fila: Costo de membresía */}
      <div className="border border-black p-4 flex items-center justify-center col-span-1 text-center">
        <span className="sm:text-lg font-bold text-sm">Costo de membresía</span>
      </div>
      <div className="border border-black p-4 flex flex-col items-center justify-center col-span-1 text-center">
        <p className="bg-warn-500 rounded-xl p-2 font-extrabold">
          <span className="sm:text-4xl text-xl ">$1,650</span>
          <span className="text-xs">.00 + IVA</span>
        </p>
        <span className="font-bold sm:text-base text-sm">Ahorra $150</span>
      </div>
      <div className="border border-black p-4 flex flex-col items-center justify-center col-span-1">
        <p className="bg-warn-500 rounded-xl p-2 font-extrabold">
          <span className="sm:text-4xl text-xl font-extrabold">$150.00</span>
          <span className="text-xs">.00 + IVA</span>
        </p>
        <span className="text-xs font-medium">*Cancela SIN PENALIZACIONES</span>
      </div>

      {/* Fila: Tipo de pago */}
      <div className="border border-black p-4 flex items-center justify-center col-span-1 text-center">
        <span className="sm:text-lg font-bold text-sm">Tipo de pago</span>
      </div>
      <div className="border border-black p-4 flex flex-col items-center justify-center text-center col-span-1">
        <span className="sm:text-4xl font-extrabold">Pago a 12 MSI</span>
        <span className="font-semibold sm:text-sm text-xs">
          con tarjeta de crédito
        </span>
      </div>
      <div className="border border-black p-4 flex items-center justify-center text-center col-span-1">
        <span className="sm:text-4xl font-extrabold">
          Pago recurrente mensual
        </span>
      </div>

      {/* Fila: Envíos GRATIS */}
      <div className="border border-black p-4 flex items-center justify-center col-span-1 text-center">
        <span className="sm:text-lg font-bold text-sm">
          Envíos <b>GRATIS</b>
        </span>
      </div>
      <div className="border border-black sm:p-4 flex flex-col items-center justify-center text-center col-span-1">
        <CiDeliveryTruck size={80} />
        <span className="sm:text-4xl font-extrabold">12 Envíos al año</span>
        <span className="sm:text-sm font-bold text-xs">
          12 envíos GRATIS pagando membresía anual
        </span>
      </div>
      <div className="border border-black sm:p-4 flex flex-col items-center justify-center text-center col-span-1">
        {/* <img src={Icon3} alt="" /> */}
        <CiDeliveryTruck size={80} />
        <span className="sm:text-4xl font-extrabold">1 Envío al mes</span>
        <span className="sm:text-sm font-bold text-xs">
          1 envío GRATIS al mes con pago recurrente
        </span>
      </div>

      {/* {Fila: Comprar} */}
      <div className="border border-black p-4 flex items-center justify-center col-span-1 text-center">
        <span className="sm:text-2xl font-bold">Empieza a ahorrar</span>
      </div>
      <div className="border border-black sm:p-4 flex flex-col items-center justify-center text-center col-span-1">
        <img
          src={Comprar}
          alt=""
          className="hover:cursor-pointer"
          onClick={() => {
            onOpenPaymentModal("1");
          }}
        />
      </div>
      <div className="border border-black sm:p-4 flex flex-col items-center justify-center text-center col-span-1">
        <img
          src={Comprar}
          alt=""
          className="hover:cursor-pointer"
          onClick={() => {
            onOpenPaymentModal("2");
          }}
        />
      </div>
    </div>
  );
};
