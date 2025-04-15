import React from "react";
import { DataCard } from "./StepperFormPayment";
import { AppFormLabel } from "../../presentation/Components/AppFormLabel";
type DataInformationProps = {
  // formInfoClient: any;
  cardInfoForm: any;
  dataCard: DataCard;
  amount: number;
};
export const DataInformation = ({
  cardInfoForm,
  // formInfoClient,
  amount,
  dataCard,
}: DataInformationProps) => {
  return (
    <div className="grid grid-cols-2 items-sart w-full gap-3">
      <div className="p-4 col-span-1 flex flex-col gap-2 bg-info-100 rounded-lg w-full">
        <h1 className="text-info-800 font-semibold text-lg">
          Información del Cliente
        </h1>
        <span>
          <b className="text-info-700">Nombre del Cliente:</b>
          {` ${cardInfoForm.values.name} ${cardInfoForm.values.lastName}`}
        </span>
        <span>
          <b className="text-info-700">Correo:</b>
          {` ${cardInfoForm.values.email}`}
        </span>
        <span>
          <b className="text-info-700">Teléfono:</b>
          {` ${cardInfoForm.values.phoneNumber}`}
        </span>
      </div>
      <div className="p-4 col-span-1 flex flex-col gap-2 bg-info-100 rounded-lg w-full">
        <h1 className="text-info-800 font-semibold text-lg">
          Datos de la tarjeta
        </h1>
        <span>
          <b className="text-info-700">Número de tarjeta: </b>
          {dataCard.card_number}
        </span>
        <span>
          <b className="text-info-700">Tipo de tarjeta: </b>
          {dataCard.type === "debit" ? "Débito" : "Crédito"}
        </span>
        <span>
          <b className="text-info-700">Fecha de expiración: </b>
          {`${dataCard.expiration_month} / ${dataCard.expiration_year}`}
        </span>
        <span>
          <b className="text-info-700">Monto: </b>
          {`$${amount}`}
        </span>
      </div>
      {dataCard.type === "credit" && (
        <div className="col-span-2 gap-10 bg-warn-100 p-10 flex flex-col items-center justify-center w-full">
          <div className="text-warn-900 w-full">
            Al hacer la compra de la membresía con tarjeta de crédito puedes
            pagar hasta 12 meses sin intereses.
          </div>
        </div>
      )}
    </div>
  );
};
