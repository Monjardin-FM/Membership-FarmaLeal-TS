import Step1 from "../assets/img/PasosMembresia-1.png";
import Step2 from "../assets/img/PasosMembresia-2.png";
import Step3 from "../assets/img/PasosMembresia-3.png";
import Step4 from "../assets/img/PasosMembresia-4.png";
import Benfit1 from "../assets/img/Membresia_Beneficios-01.jpg";
import Benfit2 from "../assets/img/Membresia_Beneficios-02.jpg";
import Benfit3 from "../assets/img/Membresia_Beneficios-03.jpg";
import Icon1 from "../assets/img/Icono_Cintillo-03.png";
import Icon3 from "../assets/img/Icono_Cintillo-05.png";
import Icon4 from "../assets/img/Icono_Cintillo-06.png";
import cintillo from "../assets/img/cintillo.png";
import ButtonMembership from "../assets/img/boton_Membresia.png";
import { PaymentSection } from "./shopify-payment-section/PaymentSection";

const items = [
  {
    image: Step1,
  },
  {
    image: Step2,
  },
  {
    image: Step3,
  },
  {
    image: Step4,
  },
];
const benefits = [{ image: Benfit1 }, { image: Benfit2 }, { image: Benfit3 }];
const info = [
  {
    image: Icon1,
    text: "Grandes ahorros en tus tratamientos",
  },

  {
    image: Icon3,
    text: "Envíos a la CDMX y área metropolitana",
    subtext: "Próximamente toda la República",
  },
  {
    image: Icon4,
    text: "Asistencia telefónica especializada",
  },
];

type BenefitsProps = {
  paymentRef: React.RefObject<HTMLDivElement>;
  onScrollToPayment: () => void;
};
export const Benefits = ({ paymentRef, onScrollToPayment }: BenefitsProps) => {
  return (
    <section
      // id="benefits"
      className="color-primary flex flex-col items-center w-screen overflow-hidden container sm:gap-5 gap-5"
    >
      <div className="grid grid-cols-4 w-full items-center justify-center gap-3 ">
        {items.map((element, i) => {
          return (
            <div className="sm:col-span-1  col-span-2 p-3" key={i}>
              <img src={element.image} className="" />
            </div>
          );
        })}
      </div>
      <div className="separator w-screen top-0"></div>

      {/* Sección dónde se muestra la tabla y se abren los modals para pagar la membresía */}
      <div ref={paymentRef}>
        <PaymentSection />
      </div>
      {/*  */}

      <div className="grid grid-cols-3 gap-5 container">
        {benefits.map((element, i) => {
          return (
            <div className="sm:col-span-1 col-span-4" key={i}>
              <img src={element.image} className="" />
            </div>
          );
        })}
      </div>
      <div className="separator w-screen top-0"></div>
      <div className="flex flex-col items-center justify-center w-full gap-2 container">
        <picture>
          <img src={cintillo} />
        </picture>
        <div className="w-full grid grid-cols-3 gap-2 justify-center items-center ">
          {info.map((element, i) => {
            return (
              <div
                className="sm:col-span-1 col-span-3 flex flex-row items-center justify-center gap-3"
                key={i}
              >
                <div className="sm:w-1/3 w-1/4">
                  <img src={element.image} className="" />
                </div>
                <span className="text-left sm:text-lg text-sm font-bold flex flex-col">
                  {element.text}
                  {element.subtext ? (
                    <span className="text-xs font-medium">
                      {element.subtext}
                    </span>
                  ) : (
                    ""
                  )}
                </span>
                {i < info.length - 1 && (
                  <div className="hidden sm:flex col-span-full justify-center">
                    <div className="w-px bg-gray-400 h-16 mx-auto" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center container">
        <img
          src={ButtonMembership}
          className="sm:w-3/5 w-full hover:cursor-pointer"
          onClick={() => {
            onScrollToPayment();
          }}
        />
      </div>
    </section>
  );
};
