import { Benefits, Hero } from "../components";
import { useState } from "react";
import { ModalPaymentMP } from "./MP-Modal/ModalPaymentMP";
import { TypePaymentModal } from "./Modals/TypePaymentModal";
import { useSearchParams } from "react-router-dom";

export const LandingPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const cupon = searchParams.get("cupon");
  const [showModalMembership, setShowModalMembership] = useState(false);
  const [showModalTypePayment, setShowModalTypePayment] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const onOpenPaymentModal = (type: string) => {
    setShowModalTypePayment(false);
    setShowModalMembership(true);
    if (type === "2") {
      setAmount(175);
    } else if (type === "1") {
      setAmount(1914);
    }
  };
  return (
    <div className="w-full">
      <TypePaymentModal
        isVisible={showModalTypePayment}
        onClose={() => setShowModalTypePayment(false)}
        onOpenPaymentModal={onOpenPaymentModal}
      />
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
      <Hero
        openModalTypePayment={() => {
          setShowModalTypePayment(true);
        }}
      />
      <Benefits
        openModalTypePayment={() => {
          setShowModalTypePayment(true);
        }}
        onOpenPaymentModal={onOpenPaymentModal}
      />
    </div>
  );
};
