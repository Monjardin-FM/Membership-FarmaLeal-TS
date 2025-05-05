import { api } from "../utils/api";
import { verifyResponse } from "../utils/check-response";

export type openPayPaymentReactivateParams = {
  tokenId: string;
  deviceSessionId: string;
  msi: number;
  amount: number;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cupon: string;
};
export const openPayPaymentReactivate = async (
  params: openPayPaymentReactivateParams
) => {
  const response = await api().post("membresia/OPChargeMSIReactivation", {
    timeout: 40000,
    headers: {
      // ApiKey: import.meta.env.VITE_API_KEY,
    },
    json: params,
  });
  const { body } = await verifyResponse({ response });
  return body;
};
