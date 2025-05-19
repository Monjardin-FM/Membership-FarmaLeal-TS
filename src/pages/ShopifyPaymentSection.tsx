import React, { useState } from "react";
import { SelectorPayment } from "../components/shopify-payment-section/SelectorPayment";
import { ModalPaymentMP } from "./MP-Modal/ModalPaymentMP";
import { AnualPaymentSelectorModal } from "../components/shopify-payment-section/AnualPaymentSelectorModal";

export const ShopifyPaymentSection = () => {
  const [showModalMembership, setShowModalMembership] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [showModalAnual, setShowModalAnual] = useState(false);
  const onOpenPaymentModal = (type: string) => {
    setShowModalMembership(true);
    setShowModalAnual(false);
    if (type === "1") {
      setAmount(1914);
    } else if (type === "2") {
      setAmount(175);
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
      />
      <AnualPaymentSelectorModal
        onOpenPaymentModal={onOpenPaymentModal}
        onClose={() => setShowModalAnual(false)}
        isVisible={showModalAnual}
      />
      <SelectorPayment
        onOpenPaymentModal={onOpenPaymentModal}
        onOpenaAnualPaymentSelector={() => setShowModalAnual(true)}
      />
    </>
  );
};
