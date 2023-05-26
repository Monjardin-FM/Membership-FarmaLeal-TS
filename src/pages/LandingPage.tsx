import { Container, Row, Col } from "react-bootstrap";
import { Benefits, Hero, Pricing } from "../components";
import { useRef, useState } from "react";
import { ModalVerificationCard } from "./Modals/ModalVerificationCard";
import { ModalPayment } from "./Modals/ModalPayment";

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
    setShowModalVerificationCard(false);
    setShowModalMembership(true);
  };
  return (
    <div className="w-full">
      <ModalPayment
        isVisible={showModalMembership}
        onClose={() => setShowModalMembership(false)}
        tokenID={tokenID}
        typeCard={typeCard}
        cardForm={cardForm}
      />
      <ModalVerificationCard
        isVisible={showModalVerificationCard}
        onClose={() => setShowModalVerificationCard(false)}
        nextForm={nextForm}
        setTokenID={setTokenID}
        setTypeCard={setTypeCard}
        cardForm={cardForm}
        setCardForm={setCardForm}
      />
      <Hero
        setModalVerificationCard={() => setShowModalVerificationCard(true)}
        handleClickScroll={handleClickScroll}
      />
      <div className="grid grid-cols-12 max-sm:grid max-sm:grid-cols-2 items-end justify-center mx-2">
        <div className="max-sm:col-span-2 col-span-12">
          <Benefits />
        </div>
        <div className="max-sm:col-span-2 col-span-12 ">
          <Pricing
            setModalVerificationCard={() => setShowModalVerificationCard(true)}
          />
        </div>
      </div>
    </div>
  );
};
