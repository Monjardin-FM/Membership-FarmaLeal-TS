import { useEffect } from "react";
import { CardPayment } from "@mercadopago/sdk-react";
import Swal from "sweetalert2";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { AppModal } from "../../presentation/Components/AppModal/AppModal";

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
    /*
          Callback llamado cuando Brick está listo.
          Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
          */
  };

  return (
    <AppModal onClose={onClose} isVisible={isVisible}>
      <div className="h-full sm:mt-1 mt-3">
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
                  cupon: cupon ? cupon : "",
                  nombre: additionalData?.cardholderName,
                })
              : JSON.stringify({
                  email: formData.payer.email,
                  cardToken: formData.token,
                  amount: amount,
                  description: "Pago mensual",
                  method: formData.payment_method_id,
                  cupon: cupon ? cupon : "",
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
      </div>
    </AppModal>
  );
};
