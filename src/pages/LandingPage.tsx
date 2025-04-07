import { Benefits, Hero } from "../components";
import { useState } from "react";
import { ModalPaymentMP } from "./MP-Modal/ModalPaymentMP";

export const LandingPage = () => {
  const [showModalMembership, setShowModalMembership] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [paymentExc, setPaymentExc] = useState<string[]>([]);
  const handleClickScroll = () => {
    const element = document.getElementById("benefits");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* <StepperFormPayment
        isVisible={showModalMembership}
        onClose={() => setShowModalMembership(false)}
      /> */}
      <ModalPaymentMP
        isVisible={showModalMembership}
        onClose={() => setShowModalMembership(false)}
        amount={amount}
        excludedPayment={paymentExc}
        onReset={() => {
          setShowModalMembership(false);
          setShowModalMembership(true);
        }}
      />
      <Hero
        setModalVerificationCard={() => setShowModalMembership(true)}
        handleClickScroll={handleClickScroll}
        setAmount={setAmount}
        setPaymentExc={setPaymentExc}
      />
      <div className="w-full flex flex-col mx-2">
        <Benefits
          setModalVerificationCard={() => setShowModalMembership(true)}
          setPaymentExc={setPaymentExc}
          setAmount={setAmount}
        />
      </div>
    </div>
  );
};
