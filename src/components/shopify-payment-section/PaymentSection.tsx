import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ModalPaymentMP } from "../../pages/MP-Modal/ModalPaymentMP";
import { Table } from "../Table";

export const PaymentSection = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const cupon = searchParams.get("cupon");
  const [showModalMembership, setShowModalMembership] = useState(false);
  const [amount, setAmount] = useState<number>(0);
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
      <Table onOpenPaymentModal={onOpenPaymentModal} />
    </>
  );
};
