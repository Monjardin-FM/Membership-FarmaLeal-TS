import React from "react";
import { DataCard } from "./StepperFormPayment";
import { AppFormLabel } from "../../presentation/Components/AppFormLabel";
type DataInformationProps = {
  formInfoClient: any;
  cardInfoForm: any;
  dataCard: DataCard;
};
export const DataInformation = ({
  cardInfoForm,
  formInfoClient,
  dataCard,
}: DataInformationProps) => {
  return (
    <div className="grid grid-cols-2 items-center w-full gap-3">
      <div className="p-4 col-span-1 flex flex-col gap-2 bg-primary-100 rounded-lg w-full">
        <h1 className="text-primary-800 font-semibold text-lg">
          Información del Cliente
        </h1>
        <span>
          <b className="text-primary-700">Nombre del Cliente:</b>
          {` ${formInfoClient.values.nombre} ${formInfoClient.values.paterno} ${formInfoClient.values.materno}`}
        </span>
        <span>
          <b className="text-primary-700">Correo:</b>
          {` ${formInfoClient.values.correo}`}
        </span>
        <span>
          <b className="text-primary-700">Sexo:</b>
          {` ${formInfoClient.values.sexo}`}
        </span>
      </div>
      <div className="p-4 col-span-1 flex flex-col gap-2 bg-primary-100 rounded-lg w-full">
        <h1 className="text-primary-800 font-semibold text-lg">
          Datos de la tarjeta
        </h1>
        <span>
          <b className="text-primary-700">Número de tarjeta: </b>
          {dataCard.card_number}
        </span>
        <span>
          <b className="text-primary-700">Tipo de tarjeta: </b>
          {dataCard.type === "debit" ? "Débito" : "Crédito"}
        </span>
        <span>
          <b className="text-primary-700">Fecha de expiración: </b>
          {`${dataCard.expiration_month} / ${dataCard.expiration_year}`}
        </span>
      </div>
      {dataCard.type === "credit" && (
        <div className="col-span-2 gap-10 bg-warn-100 p-10 flex flex-col items-center justify-center w-full">
          <div className="text-warn-900 w-full">
            Al hacer la compra de la membresía con tarjeta de crédito puedes
            pagar hasta 12 meses sin intereses. Por favor elige una opción antes
            de finalizar con el proceso de pago.
          </div>
          <div className="w-full text-center">
            <AppFormLabel label="Meses sin Intereses: " />
            <select
              value={formInfoClient.values.mesesSI}
              onChange={formInfoClient.handleChange}
              name="mesesSI"
              //   onBlur={formInfoClient.handleBlur}
              className="max-sm:text-xs"
            >
              <option value="">Escoge una opción</option>
              <option value="0">Una sola exhibición</option>
              <option value="3">3 Meses sin Intereses</option>
              <option value="6">6 Meses sin Intereses</option>
              <option value="9">9 Meses sin Intereses</option>
              <option value="12">12 Meses sin Intereses</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
