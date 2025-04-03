import { Button } from "react-bootstrap";
type PricingProps = {
  setModalVerificationCard: (flag: boolean) => void;
  setPaymentExc: React.Dispatch<React.SetStateAction<string[]>>;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};
export const Pricing = ({
  setModalVerificationCard,
  setAmount,
  setPaymentExc,
}: PricingProps) => {
  return (
    <div
      id="pricing"
      className="secondary-bg text-white lg:px-5 py-5 mb-5 w-10/12 max-sm:w-full max:md:w-full "
    >
      <div className="flex flex-col text-center gap-3 ">
        <h6 className="h6 fw-400">
          <b>ADQUIERE TU MEMBRESÍA</b> POR SÓLO
        </h6>
        <div className="flex lg:flex-row lg:items-end gap-2 justify-center max-sm:flex-col">
          <div
            onClick={() => {
              setAmount(170);
              setPaymentExc(["credit_card"]);
              setModalVerificationCard(true);
            }}
            className="cursor-pointer"
          >
            <h2 className="fw-700 price text-3xl">$170</h2>
          </div>
          <div>
            <h6 className="h6 fw-500">AL MES,</h6>
          </div>
          <div
            onClick={() => {
              setAmount(900);
              setPaymentExc(["credit_card"]);
              setModalVerificationCard(true);
            }}
            className="cursor-pointer"
          >
            <h2 className="fw-700 price  text-3xl">$150</h2>
          </div>
          <div>
            <h6 className="h6 fw-500">DURANTE 6 MESES ($900),</h6>
          </div>
          <div
            onClick={() => {
              setAmount(1560);
              setPaymentExc(["credit_card"]);
              setModalVerificationCard(true);
            }}
            className="cursor-pointer"
          >
            <h2 className="fw-700 price  text-3xl">$130</h2>
          </div>
          <div>
            <h6 className="h6 fw-500">DURANTE 12 MESES ($1560),</h6>
          </div>
        </div>
        <div className="flex lg:flex-row lg:items-end gap-2 justify-center max-sm:flex-col">
          <div
            onClick={() => {
              setAmount(1421.24);
              setPaymentExc(["debit_card"]);
              setModalVerificationCard(true);
            }}
            className="cursor-pointer"
          >
            <h2 className="fw-700 price  text-3xl">$150</h2>
          </div>
          <div>
            <h6 className="h6 fw-500">
              DURANTE 12 MESES ($1800) A MESES SIN INTERESES,
            </h6>
          </div>
        </div>
        {/* <a href="#">
          <Button
            size="sm"
            className="main-button  rounded-pill w-100 fw-500 py-3 px-4 border-0"
            onClick={() => setModalVerificationCard(true)}
          >
            OBTENER MEMBRESÍA
          </Button>
        </a> */}
      </div>
    </div>
  );
};
