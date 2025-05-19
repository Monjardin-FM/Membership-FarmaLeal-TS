import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ModalPaymentMP } from "../../pages/MP-Modal/ModalPaymentMP";
import { Table } from "../Table";
export type MembershipTypes = {
  tipo: "Anual" | "Mensual";
  vigencia: string;
  costo: string;
  ahorro: string | null;
  nota: string | null;
  pago: string;
  subpago: string;
  envios: string;
  detalleEnvios: string;
  id: string;
};
export const PaymentSection = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const email = searchParams.get("email");
  const cupon = searchParams.get("cupon");
  const [showModalMembership, setShowModalMembership] = useState(false);
  const [amount, setAmount] = useState<number>(0);

  const allTypes: MembershipTypes[] = [
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

  const anualTypes = allTypes.filter((m) => m.tipo === "Anual");

  const onOpenPaymentModal = (type: string) => {
    setShowModalMembership(true);
    if (type === "2") {
      setAmount(175);
    } else if (type === "1") {
      setAmount(1914);
    } else if (type === "3") {
      setAmount(1740);
    }
  };

  return (
    <>
      <ModalPaymentMP
        isVisible={showModalMembership}
        onClose={() => setShowModalMembership(false)}
        amount={amount}
        onReset={() => {
          setShowModalMembership(false);
          setShowModalMembership(true);
        }}
        cupon={cupon ? cupon : ""}
        email={email ? email : ""}
      />
      <Table
        onOpenPaymentModal={onOpenPaymentModal}
        memberships={
          location.pathname.startsWith("/referenced") ? anualTypes : allTypes
        }
      />
    </>
  );
};
