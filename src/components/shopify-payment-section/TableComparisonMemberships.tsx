import React from "react";
import Swipe from "../../assets/animations/Swipe Grey.gif";
import IconVigencia from "../../assets/img/icono_vigencia.png";
import IconInversion from "../../assets/img/icono_inversión.png";
import IconPayment from "../../assets/img/icono_como pagas.png";
import IconDelivery from "../../assets/img/icono_envíos gratis.png";
type TableComparisonMembershipsProps = {
  onOpenPaymentModal: (id: string) => void;
  onOpenaAnualPaymentSelector: () => void;
};
export const TableComparisonMemberships = ({
  onOpenPaymentModal,
  onOpenaAnualPaymentSelector,
}: TableComparisonMembershipsProps) => {
  const typesMemberships = [
    {
      tipo: "Mensual",
      vigencia: "1 mes",
      costo: "$150",
      nota: "*Cancela cuando quieras",
      pago: "Pago recurrente mensual",
      subpago: "con tarjeta de crédito o débito",
      envios: "1 envío al mes",
      detalleEnvios: "1 envío GRATIS al mes con pago recurrente",
      id: "2",
    },
    {
      tipo: "Anual",
      vigencia: "12 meses",
      costo: "$1,650",
      nota: "Ahorra $150 si pagas de contado ($1500)",
      pago: "Pago de contado ($1500 + IVA)",
      subpago: "o 12 MSI ($1650 + IVA) con tarjeta de crédito",
      envios: "12 envíos al año",
      detalleEnvios: "12 envíos GRATIS pagando membresía anual",
      id: "1",
    },
  ];

  const membershipsTypes = () => {
    if (location.pathname === "/update-payment") {
      return typesMemberships.filter((m) => m.id !== "2");
    }
    return typesMemberships;
  };

  // 🔥 CLAVE: colores por fila + tipo
  const getBg = (tipo: string, row: number) => {
    if (tipo === "Mensual") {
      return row % 2 === 0 ? "bg-white" : "bg-[#DDEAF0]";
    } else {
      return row % 2 === 0 ? "bg-gray-200" : "bg-white";
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 mx-auto container">
      <h2 className="text-xl sm:text-2xl font-bold text-center">
        Elige cómo quieres ahorrar
      </h2>

      {/* Scroll mobile */}
      <div className="overflow-x-auto w-full">
        <div
          className={`grid grid-cols-${
            membershipsTypes().length + 1
          } min-w-[600px] `}
        >
          {/* HEADER */}
          <div className="bg-warn-100 font-bold flex items-center justify-center p-4 border">
            Tipo de membresía
          </div>

          {membershipsTypes().map((m) => (
            <div
              key={m.id}
              className={`relative flex items-center justify-center p-4 font-extrabold text-lg border ${
                m.tipo === "Anual"
                  ? "bg-[#0D2A5C] text-white"
                  : "bg-[#7FC6D6] text-black"
              }`}
            >
              {m.tipo}

              {m.tipo === "Anual" && (
                <span className="absolute top-1 right-1 bg-warn-400 text-black text-[10px] px-2 py-0.5 rounded">
                  MÁS AHORRO
                </span>
              )}
            </div>
          ))}

          {/* VIGENCIA */}
          <div className="flex gap-3 bg-warn-100 font-bold p-4 border items-center justify-center">
            <div className="w-12 h-12">
              <img src={IconVigencia} alt="Vigencia" />
            </div>
            Vigencia
          </div>
          {membershipsTypes().map((m) => (
            <div
              key={m.id + "vig"}
              className={`p-4 border flex flex-col items-center justify-center text-center font-bold text-xl ${getBg(
                m.tipo,
                0,
              )}`}
            >
              {m.vigencia}
            </div>
          ))}

          {/* COSTO */}
          <div className="bg-warn-100 font-bold p-4 border flex gap-3 items-center justify-center">
            <div className="w-12 h-12">
              <img src={IconInversion} alt="Inversión" />
            </div>
            Inversión
          </div>
          {membershipsTypes().map((m) => (
            <div
              key={m.id + "costo"}
              className={`p-4 border flex items-center justify-center text-center gap-3 ${getBg(
                m.tipo,
                1,
              )}`}
            >
              <span className="text-4xl font-bold ">{m.costo}</span>

              {m.nota && (
                <span className="text-sm font-semibold">{m.nota}</span>
              )}
            </div>
          ))}

          {/* PAGO */}
          <div className="bg-warn-100 font-bold p-4 border flex gap-3 items-center justify-center">
            <div className="w-12 h-12">
              <img src={IconPayment} alt="Payment" />
            </div>
            Cómo pagas
          </div>
          {membershipsTypes().map((m) => (
            <div
              key={m.id + "pago"}
              className={`p-4 border flex flex-col items-center text-center ${getBg(
                m.tipo,
                2,
              )}`}
            >
              <span className="font-bold text-base">{m.pago}</span>
              <span className="text-sm">{m.subpago}</span>
            </div>
          ))}

          {/* ENVIOS */}
          <div className="bg-warn-100 font-bold p-4 border flex gap-3 items-center justify-center">
            <div className="w-12 h-12">
              <img src={IconDelivery} alt="Delivery" />
            </div>
            Envíos GRATIS
          </div>
          {membershipsTypes().map((m) => (
            <div
              key={m.id + "envios"}
              className={`p-4 border flex flex-col items-center text-center ${getBg(
                m.tipo,
                3,
              )}`}
            >
              <span className="font-bold">{m.envios}</span>
              <span className="text-xs">{m.detalleEnvios}</span>
            </div>
          ))}

          {/* BOTONES */}
          <div className="bg-transparent border-none"></div>
          {membershipsTypes().map((m) => (
            <div key={m.id + "btn"} className="flex justify-center p-4">
              <button
                onClick={() => {
                  if (m.tipo === "Anual") {
                    onOpenaAnualPaymentSelector();
                  } else {
                    onOpenPaymentModal(m.id);
                  }
                }}
                className={`px-6 py-2 rounded-full font-bold ${
                  m.tipo === "Anual"
                    ? "bg-[#0D2A5C] text-white"
                    : "bg-[#7FC6D6]"
                }`}
              >
                Suscribirse ahora
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Swipe hint mobile */}
      <div className="-mt-4 sm:hidden">
        <img src={Swipe} width="80px" />
      </div>
    </div>
  );
};
