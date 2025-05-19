import { useEffect, useState } from "react";
import { CardPayment } from "@mercadopago/sdk-react";
import Swal from "sweetalert2";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { AppModal } from "../../presentation/Components/AppModal/AppModal";
import { AppFormLabel } from "../../presentation/Components/AppFormLabel";
import { AppTextField } from "../../presentation/Components/AppTextField";

declare global {
  interface Window {
    cardPaymentBrickController?: { unmount: () => void };
  }
}

type RecurrentPaymentFormProps = {
  onClose: () => void;
  amount: number;
  onReset: () => void;
  isVisible: boolean;
  cupon?: string;
  email?: string;
};
export const RecurrentPaymentForm = ({
  amount,
  onClose,
  isVisible,
  cupon,
  email,
}: RecurrentPaymentFormProps) => {
  const [cuponValue, setCuponValue] = useState<string>("");
  initMercadoPago(import.meta.env.VITE_API_KEY);
  let initialization = {
    amount: amount,
    payer: {
      email: email,
    },
  };

  let customization = {
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 1,
    },
    visual: {
      texts: {
        formTitle: email
          ? `Reactivación de membresía. $${amount} MXN (IVA incluido)`
          : `Pago de membresía mensual (pago recurrente). $${amount}.00 MXN (IVA incluido)`,
      },
    },
  };

  const onError = async (error: any) => {
    // callback llamado para todos los casos de error de Brick
  };

  const onReady = async () => {
    /*Callback llamado cuando Brick está listo. Aquí puedes ocultar cargamentos de su sitio, por ejemplo.*/
  };

  return (
    <AppModal onClose={onClose} isVisible={isVisible}>
      <div className="h-full sm:mt-1 mt-3 flex flex-col">
        <div className="sm:w-1/3 w-full flex flex-col items-start justify-center bg-info-100 rounded-lg p-4 mt-2">
          <AppFormLabel label="Cupón:" />
          <AppTextField
            placeholder="Ingresa tu cupón"
            value={cupon ? cupon : cuponValue}
            name="cupon"
            onChange={(e) => {
              setCuponValue(e.target.value);
            }}
            className="w-full"
            inputMode="text"
            disabled={cupon ? true : false}
          />
        </div>
        <CardPayment
          locale="es-MX"
          customization={customization}
          initialization={initialization}
          onSubmit={async (formData, additionalData) => {
            // callback llamado al hacer clic en el botón enviar datos
            let jsonData = !email
              ? JSON.stringify({
                  email: formData.payer.email,
                  cardToken: formData.token,
                  amount: amount,
                  description: "Pago mensual",
                  method: formData.payment_method_id,
                  cupon: cupon ? cupon : cuponValue,
                  nombre: additionalData?.cardholderName,
                })
              : JSON.stringify({
                  email: formData.payer.email,
                  cardToken: formData.token,
                  amount: amount,
                  description: "Pago mensual",
                  method: formData.payment_method_id,
                  cupon: cupon ? cupon : cuponValue,
                });
            return new Promise((resolve, reject) => {
              fetch(
                !email
                  ? `${
                      import.meta.env.VITE_API_URL
                    }/membresia/CreateTokenization`
                  : `${
                      import.meta.env.VITE_API_URL
                    }/membresia/CreateNextTokenization`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: jsonData,
                }
              )
                .then((response) => response.json())
                .then((data) => {
                  // recibir el resultado del pago
                  // setResponse(data);
                  resolve(data);
                  if (data.success) {
                    Swal.fire({
                      title: "Pago exitoso",
                      text: !email
                        ? `${data.message}. Revisa tu correo para finalizar la suscripción.`
                        : `${data.message}`,
                      icon: "success",
                      confirmButtonText: "Ok",
                      confirmButtonColor: "#15A186",
                    });

                    onClose();
                  }
                  if (!data.success) {
                    Swal.fire({
                      title: "Error",
                      text: `${data.message}`,
                      icon: "error",
                      confirmButtonText: "Ok",
                      confirmButtonColor: "#15A186",
                    });
                    onClose();
                  }
                })
                .catch((error) => {
                  // manejar la respuesta de error al intentar crear el pago
                  Swal.fire({
                    title: "Error",
                    text: `Hubo un error al procesar el pago. Intenta nuevamente.`,
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#15A186",
                  });
                  onClose();
                  reject();
                });
            });
          }}
          onReady={onReady}
          onError={onError}
        />
        <div className="sm:w-1/2 w-full flex items-center justify-start">
          <span className="sm:text-sm text-xs text-gray-700 self-start">
            Al proporcionar los datos de su tarjeta de débito o crédito, usted
            autoriza expresamente a FarmaLeal a almacenar de manera segura su
            información de pago y a realizar cargos recurrentes según los
            términos acordados.
          </span>
        </div>
      </div>
    </AppModal>
  );
};
