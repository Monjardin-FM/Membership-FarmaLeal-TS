import React, { useEffect, useState } from "react";
import { AppModal } from "../../presentation/Components/AppModal/AppModal";
import { CardPayment } from "@mercadopago/sdk-react";
import {
  ICardPaymentBrickPayer,
  ICardPaymentFormData,
} from "@mercadopago/sdk-react/esm/bricks/cardPayment/type";
import Swal from "sweetalert2";
import { initMercadoPago } from "@mercadopago/sdk-react";
export type ModalPaymentMPProps = {
  isVisible: boolean;
  onClose: () => void;
  amount: number;
  excludedPayment: string[];
};
declare global {
  interface Window {
    cardPaymentBrickController?: { unmount: () => void };
  }
}
export const ModalPaymentMP = ({
  isVisible,
  onClose,
  amount,
  excludedPayment,
}: ModalPaymentMPProps) => {
  initMercadoPago(import.meta.env.VITE_API_KEY);
  const [response, setResponse] = useState("");
  const initialization = {
    amount: amount,
  };
  let customization = {
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 1,
      // types: {
      //   excluded: excludedPayment,
      // },
    },
    visual: {
      texts: {
        formTitle: `Pago de memebresía $${amount}`,
        emailSectionTitle: "Ingresa tus datos",
        installmentsSectionTitle:
          "Compra ahora y paga en cómodas mensualidades",
        cardholderName: {
          //   placeholder: "Nombre del titular tal como aparece en la tarjeta.",
          label: "Nombre del titular tal como aparece en la tarjeta.",
        },
        email: {
          label: "Correo electrónico",
          //   placeholder: "",
        },
        cardholderIdentification: {
          label: "Nombre del titular tal como aparece en la tarjeta.",
        },
        cardNumber: {
          label: "Número de tarjeta",
        },
        expirationDate: {
          label: "Fecha de expiración",
        },
        securityCode: {
          label: "Código de seguridad",
        },
        // selectInstallments: "",
        // selectIssuerBank: "",
        formSubmit: "Pagar",
      },
    },
  };
  if (amount === 1421.24) {
    customization = {
      ...customization,
      paymentMethods: {
        ...customization.paymentMethods,
        minInstallments: 12, // Permitir hasta 12 meses si el amount es 1800 o mayor
        maxInstallments: 12, // Permitir hasta 12 meses si el amount es 1800 o mayor
      },
      visual: {
        texts: {
          formTitle: `Pago de memebresía $1800`,
          emailSectionTitle: "Ingresa tus datos",
          installmentsSectionTitle:
            "Compra ahora y paga en cómodas mensualidades",
          cardholderName: {
            //   placeholder: "Nombre del titular tal como aparece en la tarjeta.",
            label: "Nombre del titular tal como aparece en la tarjeta.",
          },
          email: {
            label: "Correo electrónico",
            //   placeholder: "",
          },
          cardholderIdentification: {
            label: "Nombre del titular tal como aparece en la tarjeta.",
          },
          cardNumber: {
            label: "Número de tarjeta",
          },
          expirationDate: {
            label: "Fecha de expiración",
          },
          securityCode: {
            label: "Código de seguridad",
          },
          // selectInstallments: "",
          // selectIssuerBank: "",
          formSubmit: "Pagar",
        },
      },
    };
  }
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
      // confirmButtonText: 'Cool'
    });
    onClose();
  };
  const onErrorPayment = () => {
    Swal.fire({
      title: "Error al intentar realizar el cobro",
      text: `${response}`,
      icon: "error",
      showConfirmButton: false,
      // confirmButtonText: 'Cool'
    });
  };
  useEffect(() => {
    return () => {
      if (window.cardPaymentBrickController) {
        window.cardPaymentBrickController.unmount();
        // console.log("Brick destruido");
      }
    };
  }, [isVisible]);
  useEffect(() => {
    if (response) {
      checkReponse();
    }
  }, [response]);
  const checkReponse = () => {
    if (response.includes("El mail") || response.includes("Error")) {
      onErrorPayment();
    } else {
      onSuccess();
    }
  };
  useEffect(() => {
    return () => {
      setResponse("");
    };
  }, []);
  return (
    <AppModal onClose={onClose} isVisible={isVisible}>
      <div className="h-full">
        {/* <span>{`$${amount}`}</span> */}
        <CardPayment
          customization={customization}
          initialization={initialization}
          onSubmit={async (formData) => {
            // callback llamado al hacer clic en el botón enviar datos
            return new Promise((resolve, reject) => {
              fetch(`${import.meta.env.VITE_API_URL}/membresia/CreatePayment`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              })
                .then((response) => response.text())
                .then((data) => {
                  // recibir el resultado del pago
                  setResponse(data);
                  console.log(response);
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
