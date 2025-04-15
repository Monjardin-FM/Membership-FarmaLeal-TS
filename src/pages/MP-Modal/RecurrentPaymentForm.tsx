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
};
export const RecurrentPaymentForm = ({
  amount,
  onClose,
  onReset,
  isVisible,
}: RecurrentPaymentFormProps) => {
  initMercadoPago(import.meta.env.VITE_API_KEY);
  const [response, setResponse] = useState("");
  const [enabled, setEnabled] = useState<boolean>(false);
  const initialization = {
    amount: amount,
  };
  let customization = {
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 1,
    },
    visual: {
      texts: {
        formTitle: `Pago de memebresía $${amount}`,
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
  useEffect(() => {
    return () => {
      setResponse("");
      setEnabled(false);
    };
  }, []);
  return (
    <AppModal onClose={onClose} isVisible={isVisible}>
      <div className="h-full">
        {amount === 170 && (
          <div className="w-full flex flex-row align-items-center justify-start gap-2">
            <div className=" flex flex-row gap-2 ml-5">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                value={enabled ? "true" : "false"}
                onChange={() => {
                  setEnabled(!enabled);
                }}
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Pago domiciliado
              </label>
            </div>
          </div>
        )}

        {/* {String(enabled)} */}
        {amount === 170 && enabled && (
          <div className="w-3/4">
            <span className="text-xs text-gray-500">
              Al proporcionar los datos de su tarjeta de débito o crédito, usted
              autoriza expresamente a Farma Leal a almacenar de manera segura su
              información de pago y a realizar cargos recurrentes según los
              términos acordados.
            </span>
          </div>
        )}
        <CardPayment
          locale="es-MX"
          customization={customization}
          initialization={initialization}
          onSubmit={async (formData, additionalData) => {
            // callback llamado al hacer clic en el botón enviar datos
            if (!enabled) {
              return new Promise((resolve, reject) => {
                fetch(
                  `${import.meta.env.VITE_API_URL}/membresia/CreatePayment`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                  }
                )
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
            } else {
              return new Promise((resolve, reject) => {
                fetch(
                  `${
                    import.meta.env.VITE_API_URL
                  }/membresia/CreateTokenization`,
                  {
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
                    }),
                  }
                )
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
            }
          }}
          onReady={onReady}
          onError={onError}
        />
      </div>
    </AppModal>
  );
};
