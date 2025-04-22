import { useEffect, useState } from "react";
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
  onReset,
  isVisible,
  cupon,
  email,
}: RecurrentPaymentFormProps) => {
  initMercadoPago(import.meta.env.VITE_API_KEY);
  const [response, setResponse] = useState("");
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
          ? `Reactivación de membresía $${amount}`
          : `Pago de membresía mensual (recurrente) $175 ${amount}`,
      },
    },
  };

  const onError = async (error: any) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };

  const onReady = async () => {
    /*
          Callback llamado cuando Brick está listo.
          Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
          */
  };
  const onSuccess = () => {
    Swal.fire({
      title: "Pago exitoso",
      text: `Tu pago se ha procesado correctamente. Revisa tu correo electrónico para más detalles.`,
      icon: "success",
      showConfirmButton: false,
    });
    onClose();
  };
  const onErrorPayment = () => {
    Swal.fire({
      title: "Error al intentar realizar el cobro",
      text: `${response}`,
      icon: "error",
      showConfirmButton: false,
    });
    onReset();
  };
  const onErrorMail = () => {
    Swal.fire({
      title: `${response}`,
      text: "El usuario que estas tratando de ingresar ya existe activo en la plataforma, intenta con un correo diferente.",
      icon: "error",
      showConfirmButton: false,
    });
    onReset();
  };
  useEffect(() => {
    if (response) {
      checkReponse();
    }
  }, [response]);
  const checkReponse = () => {
    if (response.includes("Error")) {
      onErrorPayment();
    } else if (response.includes("El mail")) {
      onErrorMail();
    } else {
      onSuccess();
    }
  };
  let urlService = "";
  useEffect(() => {
    if (amount === 1) {
      urlService = `${
        import.meta.env.VITE_API_URL
      }/membresia/CreateTokenization`;
    } else if (amount === 175) {
      urlService = `${
        import.meta.env.VITE_API_URL
      }/membresia/CreateNextTokenization`;
    }

    return () => {
      setResponse("");
      urlService = "";
    };
  }, [amount]);
  return (
    <AppModal onClose={onClose} isVisible={isVisible}>
      <span> mail:{email ? email : ""}</span>
      <span>monto:{amount ? amount : ""}</span>
      <span>url:{urlService ? urlService : ""}</span>
      <div className="h-full sm:mt-1 mt-3">
        <CardPayment
          locale="es-MX"
          customization={customization}
          initialization={initialization}
          onSubmit={async (formData) => {
            // callback llamado al hacer clic en el botón enviar datos
            return new Promise((resolve, reject) => {
              fetch(urlService, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: formData.payer.email,
                  cardToken: formData.token,
                  amount: amount,
                  description: "Pago mensual",
                  method: formData.payment_method_id,
                  cupon: cupon ? cupon : "",
                }),
              })
                .then((response) => response.text())
                .then((data) => {
                  // recibir el resultado del pago
                  setResponse(data);
                  resolve();
                })
                .catch((error) => {
                  // manejar la respuesta de error al intentar crear el pago
                  console.log(error);
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
