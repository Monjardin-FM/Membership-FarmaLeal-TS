import { api } from "../utils/api";
// import { ApiKey } from "../../variables";
import { verifyResponse } from "../utils/check-response";
export type PaymentMSIParams = {
  tokenId: string;
  deviceSessionId: string;
  msi: number;
  amount: number;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};
export const createMembership = async (params: PaymentMSIParams) => {
  const response = await api().post("membresia/OPChargeMSI", {
    // timeout: 40000,
    headers: {
      // ApiKey: import.meta.env.VITE_API_KEY,
    },
    json: params,
  });
  const { body } = await verifyResponse({ response });
  return body;
};
