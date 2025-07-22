import React from "react";
import { MembershipTypes } from "./PaymentSection";
import { CiDeliveryTruck } from "react-icons/ci";
import Swipe from "../../assets/animations/Swipe Grey.gif";
export const TableComparisonMemberships = () => {
  const typesMemberships = [
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
      id: "1",
    },
    {
      tipo: "Anual",
      vigencia: "12 meses",
      costo: "$1650",
      ahorro: "Ahorra $150 si pagas de contado ($1500)",
      nota: null,
      pago: "Pago de contado ($1500 + IVA)",
      subpago: "o pago a 12 MSI ($1650 + IVA) con tarjeta de crédito",
      envios: "12 Envíos al año",
      detalleEnvios: "12 envíos GRATIS pagando membresía anual",
      id: "2",
    },
  ];
  const classGrids = `grid grid-cols-${
    typesMemberships.length + 1
  } border border-black border-collapse color-primary text-center`;
  return (
    <div className="flex flex-col items-center gap-3 mx-auto container">
      <div>
        {typesMemberships.length === 3 && (
          <div className="left-1/2 bg-warn-400 rounded-2xl sm:text-3xl text-lg font-extrabold text-center w-full p-2">
            Costo de membresía
          </div>
        )}
      </div>

      {/* Contenedor con scroll horizontal */}
      <div className="overflow-x-auto w-full">
        <div
          className={`grid grid-cols-${
            typesMemberships.length + 1
          } text-center border border-black min-w-[500px]`}
        >
          {/* Fila: Tipo */}
          <div className="border sm:p-4 font-bold sm:text-lg text-xs sticky left-0 bg-white z-10 flex items-center justify-center">
            Tipo de Membresía
          </div>
          {typesMemberships.map((m) => (
            <div
              key={m.id + "-tipo"}
              className="border sm:p-4 font-extrabold sm:text-2xl text-lg"
            >
              {m.tipo}
            </div>
          ))}

          {/* Fila: Vigencia */}
          <div className="border sm:p-4 font-bold sm:text-lg text-xs sticky left-0 bg-white z-10 flex items-center justify-center">
            Vigencia
          </div>
          {typesMemberships.map((m) => (
            <div
              key={m.id + "-vigencia"}
              className="border sm:p-4 font-extrabold sm:text-3xl text-lg"
            >
              {m.vigencia}
            </div>
          ))}

          {/* Fila: Costo */}
          <div className="border sm:p-4 font-bold sm:text-lg text-xs sticky left-0 bg-white z-10 flex items-center justify-center">
            Costo de membresía
          </div>
          {typesMemberships.map((m) => (
            <div
              key={m.id + "-costo"}
              className="border sm:p-4 flex flex-col items-center"
            >
              <p className="bg-warn-500 p-2 rounded-xl font-extrabold sm:text-3xl text-lg">
                {m.costo}
              </p>
              {m.ahorro && (
                <span className="text-xs font-bold">{m.ahorro}</span>
              )}
              {m.nota && <span className="text-xs font-bold">{m.nota}</span>}
            </div>
          ))}

          {/* Fila: Tipo de pago */}
          <div className="border sm:p-4 font-bold sm:text-lg text-xs sticky left-0 bg-white z-10 flex items-center justify-center">
            Tipo de pago
          </div>
          {typesMemberships.map((m) => (
            <div
              key={m.id + "-pago"}
              className="border sm:p-4 flex flex-col items-center"
            >
              <span className="font-extrabold sm:text-3xl text-sm">
                {m.pago}
              </span>
              {m.subpago && (
                <span className="text-xs font-semibold">{m.subpago}</span>
              )}
            </div>
          ))}

          {/* Fila: Envíos */}
          <div className="border sm:p-4 font-bold sm:text-lg text-xs sticky left-0 bg-white z-10 flex items-center justify-center">
            Envíos <b className="ml-1">GRATIS</b>
          </div>
          {typesMemberships.map((m) => (
            <div
              key={m.id + "-envios"}
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
        </div>
      </div>
      <div className="-mt-5 sm:hidden">
        <img src={Swipe} width="100px" />
      </div>
    </div>
  );
};
