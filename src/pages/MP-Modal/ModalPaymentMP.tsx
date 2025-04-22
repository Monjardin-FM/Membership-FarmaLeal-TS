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
  onReset,
  cupon,
  email,
}: ModalPaymentMPProps) => {
  return amount === 175 ? (
    <RecurrentPaymentForm
      cupon={cupon}
      onClose={onClose}
      onReset={onReset}
      amount={amount}
      isVisible={isVisible}
      email={email}
    />
  ) : (
    <StepperFormPayment
      isVisible={isVisible}
      onClose={onClose}
      amount={amount}
      emailURL={email}
      cupon={cupon}
    />
  );
};
