import React, { useEffect, useState } from "react";
import { AppModal } from "../../presentation/Components/AppModal/AppModal";
import { Stepper } from "../../presentation/Components/AppStepper";
import { AppButton } from "../../presentation/Components/AppButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CardInfoForm } from "./CardInfoForm";
import Swal from "sweetalert2";
import { useToggle } from "react-use";
import { Loader } from "../../components/Loader";
import { DataInformation } from "./DataInformation";
import { usePaymentMembership } from "../../hooks/use-payment-membership";

export type StepperFormPaymentProps = {
  isVisible: boolean;
  onClose: () => void;
  amount: number;
  emailURL?: string;
  cupon?: string;
};
export type DataCard = {
  adress: "" | null;
  brand: string | null;
  card_number: string | null;
  creation_date: string | null;
  expiration_month: string | null;
  expiration_year: string | null;
  holder_name: string | null;
  type: string | null;
};
export const StepperFormPayment = ({
  isVisible,
  onClose,
  amount,
  cupon,
  emailURL,
}: StepperFormPaymentProps) => {
  const [cardFormat, setCardFormat] = useState("");
  const { loading: loadingPayment, paymentMembership } = usePaymentMembership();
  const [isLoadingCardValidate, setIsloadingValidateCard] = useToggle(false);
  const [paymentData, setPaymentData] = useState({
    deviceSessionId: "",
    tokenId: "",
  });

  const [dataCard, setDataCard] = useState<DataCard>({
    adress: null,
    brand: null,
    card_number: null,
    creation_date: null,
    expiration_month: null,
    expiration_year: null,
    holder_name: null,
    type: null,
  });

  const cardInfoForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      card_number: "",
      name: "",
      lastName: "",
      phoneNumber: "",
      email: emailURL ? emailURL : "",
      expiration_year: "",
      expiration_month: "",
      cvv2: "",
    },
    validationSchema: Yup.object().shape({
      card_number: Yup.string().matches(
        /^\d+$/,
        "El número de tarjeta solo deben de ser dígitos"
      ),
      name: Yup.string().required("Campo Obligatorio"),
      lastName: Yup.string().required("Campo Obligatorio"),
      expiration_year: Yup.string()
        .matches(/^\d+$/)
        .length(2, "Fecha Inválida"),
      phoneNumber: Yup.string()
        .matches(/^\d+$/, "El número de teléfono solo deben de ser dígitos")
        .required("Campo Obligatorio"),
      email: Yup.string().email("Email inválido").required("Campo Obligatorio"),
      expiration_month: Yup.string()
        .matches(/^\d+$/)
        .length(2, "Fecha Inválida"),
      cvv2: Yup.string().required("Campo Obligatorio"),
    }),
    onSubmit: () => {},
  });
  // This function is used to handle the payment process
  const onPayment = async () => {
    const respuesta = await paymentMembership({
      tokenId: paymentData.tokenId,
      deviceSessionId: paymentData.deviceSessionId,
      msi: 12,
      amount: amount,
      name: cardInfoForm.values.name,
      lastName: cardInfoForm.values.lastName,
      phoneNumber: cardInfoForm.values.phoneNumber,
      email: cardInfoForm.values.email,
      cupon: cupon ? cupon : "",
    });
    if (respuesta.data.result) {
      Swal.fire({
        title: "Pago exitoso",
        text: `Para finalizar tu suscripción revisa tu correo `,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#15A186",
      });
      cardInfoForm.resetForm();
      setCardFormat("");
      setPaymentData({
        deviceSessionId: "",
        tokenId: "",
      });
      onClose();
    }
    if (!respuesta.data.result) {
      Swal.fire({
        title: "Error al crear la cuenta",
        text: `${respuesta.data.exceptionMessage}`,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#15A186",
      });
    }
  };

  // This function is used to handle idevice session id and token id
  useEffect(() => {
    /*global OpenPay*/
    window.OpenPay.setId(import.meta.env.VITE_API_KEY_OPENPAY_ID);
    window.OpenPay.setApiKey(import.meta.env.VITE_API_KEY_OPENPAY);
    window.OpenPay.setSandboxMode(true);
    //Se genera el id de dispositivo
    setPaymentData({
      ...paymentData,
      deviceSessionId: window.OpenPay.deviceData.setup(),
    });
    return () => {
      setPaymentData({ deviceSessionId: "", tokenId: "" });
      cardInfoForm.resetForm();
      setCardFormat("");
    };
  }, []);

  return (
    <>
      {/* This loader is used to show a loading spinner when the card is being
      validated */}
      <Loader isVisible={isLoadingCardValidate}>
        <div className="text-center">
          <span>
            <p className="font-semibold text-lg text-info-300">
              Validando los datos de la tarjeta
            </p>
            <br />
            No recargues ni cierres la página. El proceso puede tardar algunos
            segundos.
          </span>
        </div>
      </Loader>
      {/* This loader is used to show a loading spinner when the payment is being
      processed */}
      <Loader isVisible={loadingPayment}>
        <div className="text-center">
          <span>
            <p className="font-semibold text-lg text-info-300">
              Generando Cobro
            </p>
            <br />
            No recargues ni cierres la página. El proceso puede tardar algunos
            segundos.
          </span>
        </div>
      </Loader>
      <AppModal onClose={onClose} isVisible={isVisible}>
        <Stepper initialValue={{ step: 1 }}>
          {({ handleChange }) => {
            const onSubmit = () => {
              handlePayment();
            };
            const handlePayment = () => {
              createToken();
            };
            // This function is used to create a token for the card
            const createToken = () => {
              window.OpenPay.token.create(
                {
                  card_number: cardInfoForm.values.card_number.replace(
                    /(\D)/g,
                    ""
                  ),
                  holder_name: `${cardInfoForm.values.name} ${cardInfoForm.values.lastName}`,
                  expiration_year: cardInfoForm.values.expiration_year,
                  expiration_month: cardInfoForm.values.expiration_month,
                  cvv2: cardInfoForm.values.cvv2,
                },
                sucessCallbak,
                errorCallBack
              );
            };
            // This function is used to handle the success callback of the token creation
            const sucessCallbak = (response: any) => {
              setPaymentData({
                ...paymentData,
                tokenId: response.data.id,
                deviceSessionId: paymentData.deviceSessionId,
              });

              // setPaymentData({ ...paymentData, tokenId: response.data.id });
              setDataCard(response.data.card);
              if (response.data.card.type === "debit") {
                Swal.fire({
                  icon: "error",
                  title: "Tarjeta de débito",
                  text: "No se aceptan tarjetas de débito",
                  timer: 2000,
                });
                cardInfoForm.setFieldValue("card_number", "");
                cardInfoForm.setFieldValue("expiration_month", "");
                cardInfoForm.setFieldValue("expiration_year", "");
                cardInfoForm.setFieldValue("cvv2", "");
                setCardFormat("");
                handleChange({ value: 1 });
                setIsloadingValidateCard(false);
                return;
              }
              if (response.data.card.type === "credit") {
                Swal.fire({
                  icon: "success",
                  title: "Tarjeta Válida",
                  showConfirmButton: false,
                  timer: 2000,
                });
                handleChange({ value: 2 });
                setIsloadingValidateCard(false);
              }
            };
            // This function is used to handle the error callback of the token creation
            const errorCallBack = (response: any) => {
              Swal.fire({
                icon: "error",
                title: `${response.data.description}`,
                showConfirmButton: true,
              });
              handleChange({ value: 1 });
              setIsloadingValidateCard(false);
            };
            return (
              <>
                <Stepper.Header>
                  <Stepper.Step step={1} />
                  <Stepper.Step step={2} />
                </Stepper.Header>
                <form action="">
                  <Stepper.Items className="mt-4">
                    <Stepper.StepContent step={1}>
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-full">
                          <CardInfoForm
                            cardInfoForm={cardInfoForm}
                            cardFormat={cardFormat}
                            setCardFormat={setCardFormat}
                            emailURL={emailURL}
                          />
                        </div>
                        <div className="flex flex-row gap-3">
                          <AppButton onClick={() => onClose()}>
                            Cancelar
                          </AppButton>
                          <AppButton
                            colorScheme="info"
                            onClick={() => {
                              setIsloadingValidateCard(true);
                              onSubmit();
                            }}
                            isDisabled={
                              cardInfoForm.values.card_number === "" ||
                              cardInfoForm.values.name === "" ||
                              cardInfoForm.values.lastName === "" ||
                              cardInfoForm.values.expiration_month === "" ||
                              cardInfoForm.values.expiration_year === "" ||
                              cardInfoForm.values.cvv2 === "" ||
                              cardInfoForm.values.phoneNumber === "" ||
                              cardInfoForm.values.email === "" ||
                              isLoadingCardValidate
                            }
                          >
                            Siguiente
                          </AppButton>
                        </div>
                      </div>
                    </Stepper.StepContent>
                    <Stepper.StepContent step={2}>
                      <div className="flex flex-col items-center justify-center">
                        <DataInformation
                          cardInfoForm={cardInfoForm}
                          dataCard={dataCard}
                          amount={amount}
                        />
                        <div className="flex flex-row gap-3 mt-3">
                          <AppButton onClick={() => handleChange({ value: 1 })}>
                            Atrás
                          </AppButton>
                          <AppButton
                            colorScheme="info"
                            onClick={() => onPayment()}
                            isDisabled={loadingPayment}
                          >
                            Realizar Pago
                          </AppButton>
                        </div>
                      </div>
                    </Stepper.StepContent>
                  </Stepper.Items>
                </form>
              </>
            );
          }}
        </Stepper>
      </AppModal>
    </>
  );
};
