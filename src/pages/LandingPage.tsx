import { useRef } from "react";
import { Benefits, Hero } from "../components";

export const LandingPage = () => {
  const paymentRef = useRef<HTMLDivElement>(null);

  const handleScrollToPayment = () => {
    paymentRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full">
      <Hero onScrollToPayment={handleScrollToPayment} />
      <Benefits
        paymentRef={paymentRef}
        onScrollToPayment={handleScrollToPayment}
      />
    </div>
  );
};
