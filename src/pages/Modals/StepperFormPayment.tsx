import React from "react";
import { AppModal } from "../../presentation/Components/AppModal/AppModal";

export type StepperFormPaymentProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const StepperFormPayment = ({
  isVisible,
  onClose,
}: StepperFormPaymentProps) => {
  return <AppModal onClose={onClose} isVisible={isVisible}></AppModal>;
};
