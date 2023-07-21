import { Benefits, Hero } from "../components";
import { useState } from "react";
import { StepperFormPayment } from "./Modals/StepperFormPayment";

export const LandingPage = () => {
  const [showModalMembership, setShowModalMembership] = useState(false);

  const handleClickScroll = () => {
    const element = document.getElementById("benefits");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <StepperFormPayment
        isVisible={showModalMembership}
        onClose={() => setShowModalMembership(false)}
      />
      <Hero
        setModalVerificationCard={() => setShowModalMembership(true)}
        handleClickScroll={handleClickScroll}
      />
      <div className="w-full flex flex-col mx-2">
        <Benefits
          setModalVerificationCard={() => setShowModalMembership(true)}
        />
      </div>
    </div>
  );
};
