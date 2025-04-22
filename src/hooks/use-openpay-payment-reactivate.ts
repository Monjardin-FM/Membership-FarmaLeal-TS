import { useAsyncFn } from "react-use";
import { openPayPaymentReactivate } from "./../services/openPayPaymentReactivate";
export const useOpenPayPaymentReactivate = () => {
  const [{ error, loading }, openPayPayment] = useAsyncFn(
    openPayPaymentReactivate,
    [openPayPaymentReactivate]
  );
  return { error, loading, openPayPayment };
};
