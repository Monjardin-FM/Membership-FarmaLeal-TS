import { Container, Row, Col } from "react-bootstrap";
import { Benefits, Hero, Pricing } from "../components";
import { useRef, useState } from "react";
import { ModalVerificationCard } from "./Modals/ModalVerificationCard";
import { ModalPayment } from "./Modals/ModalPayment";
import { useEffect } from "react";
import { StepperFormPayment } from "./Modals/StepperFormPayment";

export const LandingPage = () => {
  const [showModalMembership, setShowModalMembership] = useState(false);
  const [showModalVerificationCard, setShowModalVerificationCard] =
    useState(false);
  const [tokenID, setTokenID] = useState("");
  const [typeCard, setTypeCard] = useState("");
  const [cardForm, setCardForm] = useState({
    card_number: "",
    holder_name: "",
    expiration_year: "",
    expiration_month: "",
    cvv2: "",
  });

  const handleClickScroll = () => {
    const element = document.getElementById("benefits");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const nextForm = () => {
    setShowModalMembership(false);
    setShowModalVerificationCard(true);
  };

  return (
    <div className="w-full">
      <StepperFormPayment
        isVisible={showModalMembership}
        onClose={() => setShowModalMembership(false)}
      />
      {/* <ModalPayment
        isVisible={showModalMembership}
        onClose={() => setShowModalMembership(false)}
        tokenID={tokenID}
        typeCard={typeCard}
        cardForm={cardForm}
        nextForm={nextForm}
      />
      <ModalVerificationCard
        isVisible={showModalVerificationCard}
        onClose={() => setShowModalVerificationCard(false)}
        nextForm={nextForm}
        setTokenID={setTokenID}
        setTypeCard={setTypeCard}
        cardForm={cardForm}
        setCardForm={setCardForm}
      /> */}
      <Hero
        setModalVerificationCard={() => setShowModalMembership(true)}
        handleClickScroll={handleClickScroll}
      />
      <div className="w-full flex flex-col mx-2">
        {/* <div className="max-sm:col-span-2 col-span-12 "> */}
        <Benefits
          setModalVerificationCard={() => setShowModalMembership(true)}
        />

        {/* </div> */}
        {/* <div className="max-sm:col-span-2 col-span-12"> */}
        {/* <Pricing
          setModalVerificationCard={() => setShowModalVerificationCard(true)}
        /> */}
        {/* </div> */}
      </div>
    </div>
  );
};
