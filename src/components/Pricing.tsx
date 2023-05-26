import { Button } from "react-bootstrap";
type PricingProps = {
  setModalVerificationCard: (flag: boolean) => void;
};
export const Pricing = ({ setModalVerificationCard }: PricingProps) => {
  return (
    <section
      id="pricing"
      className="secondary-bg text-white lg:px-5 py-5 mb-5 w-10/12 max-sm:w-full"
    >
      <div className="flex flex-col text-center gap-3 ">
        <h6 className="h6 fw-400">SÓLO</h6>
        <h1 className="fw-500 text-4xl">
          <b>$1,200 al año</b>
        </h1>
        <p>
          {/* Compra y descubre todo lo que podrás ahorrar... <br /> */}
          ¡12 meses sin intereses!
        </p>
        <a href="#">
          <Button
            size="sm"
            className="main-button  rounded-pill w-100 fw-500 py-3 px-4 border-0"
            onClick={() => setModalVerificationCard(true)}
          >
            OBTENER MEMBRESÍA
          </Button>
        </a>
      </div>
    </section>
  );
};
