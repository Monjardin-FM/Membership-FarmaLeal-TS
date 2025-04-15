import React, { useEffect, useState } from "react";
import { AppModal } from "../../presentation/Components/AppModal/AppModal";
import { RecurrentPaymentForm } from "./RecurrentPaymentForm";
import { StepperFormPayment } from "../Modals/StepperFormPayment";

export type ModalPaymentMPProps = {
  isVisible: boolean;
  onClose: () => void;
  amount: number;
  onReset: () => void;
};

export const ModalPaymentMP = ({
  isVisible,
  onClose,
  amount,
  onReset,
}: ModalPaymentMPProps) => {
  return amount === 170 ? (
    <RecurrentPaymentForm
      onClose={onClose}
      onReset={onReset}
      amount={amount}
      isVisible={isVisible}
    />
  ) : (
    <StepperFormPayment
      isVisible={isVisible}
      onClose={onClose}
      amount={amount}
    />
  );
};
