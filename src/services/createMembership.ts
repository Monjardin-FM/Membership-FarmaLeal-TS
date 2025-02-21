import { api } from "../utils/api";
// import { ApiKey } from "../../variables";
import { verifyResponse } from "../utils/check-response";

export const createMembership = async (params: any) => {
  const response = await api().post("PaymentMembership", {
    timeout: 40000,
    headers: {
      // ApiKey: import.meta.env.VITE_API_KEY,
    },
    json: params,
  });
  const { body } = await verifyResponse({ response });
  return body;
};
