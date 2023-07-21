import React, { useEffect, useState } from "react";
import { FooterModal } from "./FooterModal";
import { AppTextField } from "../../presentation/Components/AppTextField";
import { AppFormLabel } from "../../presentation/Components/AppFormLabel";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Card } from "../../Card/Card";
import cardExample from "../../assets/img/cvv.png";

type CardInfoProps = {
  cardInfoForm: any;
};

export const CardInfoForm = ({ cardInfoForm }: CardInfoProps) => {
  const [flagCardNumberValid, setFlagCardNumber] = useState(false);
  const [parent] = useAutoAnimate();
  const [CVV2Flag, setCVV2Flag] = useState();
  const [cardFormat, setCardFormat] = useState("");
  const [flagRotate, setFlagRotate] = useState(false);

  const onCVVFocus = () => {
    setFlagRotate(true);
  };
  const onCVVBlur = () => {
    setFlagRotate(false);
  };

  const handleValidateCard = () => {
    const typeTarjeta = window.OpenPay.card.cardType(
      cardInfoForm.values.card_number
    );
    console.log(typeTarjeta);
  };

  const handleChangeCard = (e: any) => {
    const cardValue = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
    setCardFormat(
      (e.target.value = !cardValue[2]
        ? cardValue[1]
        : `${cardValue[1]} ${cardValue[2]}${`${
            cardValue[3] ? ` ${cardValue[3]}` : ""
          }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ""}`}`)
    );
  };

  useEffect(() => {
    if (cardInfoForm.values.card_number.length > 1) {
      const flagCardNumber = window.OpenPay.card.validateCardNumber(
        cardInfoForm.values.card_number
      );
      setFlagCardNumber(flagCardNumber);
    }
  }, [cardInfoForm.values.card_number]);
  useEffect(() => {
    const cvv2Flag = window.OpenPay.card.validateCVC(
      cardInfoForm.values.cvv2,
      cardInfoForm.values.card_number
    );
    setCVV2Flag(cvv2Flag);
  }, [cardInfoForm.values.cvv2, cardInfoForm.values.card_number]);
  return (
    <>
      <div className="pt-2">
        <div className="grid grid-cols-12 mb-5">
          <div className="col-span-6 flex flex-col justify-center items-center max-sm:col-span-12">
            <Card
              cardNumber={cardFormat}
              cardForm={cardInfoForm.values}
              flagRotate={flagRotate}
            />
          </div>
          <div className=" gap-x-5 rounded-lg pb-2 grid grid-cols-12 col-span-6 max-sm:col-span-12 max-sm:gap-4">
            <div className="col-span-12 font-semibold text-xl text-primary-800 max-sm:text-sm max-sm:text-center max-sm:my-3">
              Datos de tarjeta
            </div>
            <div
              ref={parent}
              className="col-span-12 w-full  flex flex-col gap-2 justify-center items-start"
            >
              <AppFormLabel label="Nombre del titular:" />

              <AppTextField
                dataOpenCard="holder_name"
                name="holder_name"
                onChange={cardInfoForm.handleChange}
                placeholder="Como aparece en la tarjeta"
                value={cardInfoForm.values.holder_name}
                className="w-full "
                onBlur={cardInfoForm.handleBlur}
                inputMode="text"
              />
              {cardInfoForm.errors.holder_name && (
                <div className="border border-danger-800 bg-danger-100 rounded-md bg w-full p-1 relative -top-2 ">
                  <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                    {cardInfoForm.errors.holder_name}
                  </span>
                </div>
              )}
            </div>
            <div
              ref={parent}
              className="w-full col-span-12 flex flex-col gap-2 justify-center items-start text-lg font-extralight"
            >
              <AppFormLabel label="Número de Tarjeta:" />
              <AppTextField
                placeholder={"0000 0000 0000 0000"}
                name="card_number"
                value={cardFormat}
                onChange={(e: any) => {
                  cardInfoForm.handleChange(e);
                  handleChangeCard(e);
                }}
                className={
                  !flagCardNumberValid
                    ? "w-full bg-danger-100"
                    : "w-full bg-success-200"
                }
                inputMode="numeric"
                maxLength={19}
              />
              {!flagCardNumberValid && (
                <div className="border border-danger-800 rounded-md bg w-full p-1 relative -top-2 bg-danger-100">
                  <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                    {"Tarjeta Inválida"}
                  </span>
                </div>
              )}
            </div>
            <div
              ref={parent}
              className="w-full col-span-6 flex flex-col gap-2 justify-center items-start text-lg font-extralight"
            >
              <AppFormLabel label="Fecha de expiración:" />
              <div className="flex flex-row gap-3 ">
                <AppTextField
                  placeholder="MM"
                  name="expiration_month"
                  value={cardInfoForm.values.expiration_month}
                  onChange={cardInfoForm.handleChange}
                  className="w-full"
                  inputMode="numeric"
                  maxLength={2}
                />
                <AppTextField
                  placeholder="YY"
                  name="expiration_year"
                  value={cardInfoForm.values.expiration_year}
                  onChange={cardInfoForm.handleChange}
                  className="w-full"
                  inputMode="numeric"
                  maxLength={2}
                />
              </div>
              {(cardInfoForm.errors.expiration_month ||
                cardInfoForm.errors.expiration_year) && (
                <div className="border border-danger-800 rounded-md bg w-full p-1 relative -top-2 bg-danger-100">
                  <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                    {"Fecha Inválida"}
                  </span>
                </div>
              )}
            </div>
            <div
              ref={parent}
              className="w-full col-span-6 flex flex-col gap-2 justify-center items-start text-lg font-extralight"
            >
              <AppFormLabel label="Código CVV:" />
              <div className="flex flex-row items-center gap-2">
                <AppTextField
                  placeholder="CVV"
                  value={cardInfoForm.values.cvv2}
                  name="cvv2"
                  onChange={cardInfoForm.handleChange}
                  className="w-1/2 "
                  onBlur={() => {
                    onCVVBlur();
                    handleValidateCard();
                  }}
                  onFocus={onCVVFocus}
                  inputMode="numeric"
                />

                <div className="full max-sm:hidden">
                  <img src={cardExample} />
                </div>
              </div>
              {!CVV2Flag && (
                <div className="border border-danger-800 rounded-md bg w-full p-1 relative -top-2 bg-danger-100">
                  <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                    {"CVV Inválido"}
                  </span>
                </div>
              )}
            </div>
            {/* {typeCard.toString() === "credit" && (
              <div
                ref={parent}
                className="w-full col-span-2 flex flex-col gap-2 justify-center items-start text-lg font-extralight max-sm:col-span-6"
              >
                <AppFormLabel label="Meses sin Intereses" />
                <select
                  value={cardInfoForm.values.mesesSI}
                  onChange={cardInfoForm.handleChange}
                  name="mesesSI"
                  onBlur={cardInfoForm.handleBlur}
                  className="max-sm:text-xs"
                >
                  <option value="">Escoge una opción</option>
                  <option value="0">Una sola exhibición</option>
                  <option value="3">3 Meses sin Intereses</option>
                  <option value="6">6 Meses sin Intereses</option>
                  <option value="9">9 Meses sin Intereses</option>
                  <option value="12">12 Meses sin Intereses</option>
                </select>
                {cardInfoForm.errors.mesesSI &&
                  cardInfoForm.touched.mesesSI && (
                    <div className="border border-danger-800 rounded-md bg w-full p-1 relative -top-2 bg-danger-100">
                      <span className="text-danger-500 font-semibold text-sm max-sm:text-xs">
                        {cardInfoForm.errors.mesesSI}
                      </span>
                    </div>
                  )}
              </div>
            )} */}
          </div>
        </div>
        {/* // const numbers = e.target.value.replace(/(\D)/g, ""); */}
        {/* <div>{cardInfoForm.values.card_number.replace(/(\D)/g, "")}</div> */}
        <hr className="max-sm:hidden" />
        <div className="max-sm:hidden">
          <FooterModal />
        </div>
        <hr className="max-sm:hidden mb-3" />
      </div>
    </>
  );
};
