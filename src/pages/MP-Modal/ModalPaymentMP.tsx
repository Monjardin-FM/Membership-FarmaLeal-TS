import { RecurrentPaymentForm } from "./RecurrentPaymentForm";
import { StepperFormPayment } from "../Modals/StepperFormPayment";

export type ModalPaymentMPProps = {
  isVisible: boolean;
  onClose: () => void;
  amount: number;
  onReset: () => void;
  cupon?: string;
  email?: string;
};

export const ModalPaymentMP = ({
  isVisible,
  onClose,
  amount,
  cupon,
  email,
}: ModalPaymentMPProps) => {
  return (
    <StepperFormPayment
      isVisible={isVisible}
      onClose={onClose}
      amount={amount}
      emailURL={email}
      cupon={cupon}
    />
  );
};
