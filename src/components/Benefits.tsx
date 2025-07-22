import Step1 from "../assets/img/Icono_Membresia.png";
import Step2 from "../assets/img/Icono_Pago.png";
import Step3 from "../assets/img/Icono_Verificar.png";
import Step4 from "../assets/img/Icono_Compra.png";
import Benfits from "../assets/img/Pleca_Final .png";
import Icon1 from "../assets/img/Icono_Cintillo-03.png";
import Icon3 from "../assets/img/Icono_Cintillo-05.png";
import Icon4 from "../assets/img/Icono_Cintillo-06.png";
import cintillo from "../assets/img/cintillo.png";
import ButtonMembership from "../assets/img/boton_Membresia.png";
import { PaymentSection } from "./shopify-payment-section/PaymentSection";

const items = [
  {
    image: Step1,
    text: [
      { bold: false, value: "Elige el Plan" },
      { bold: true, value: " de tu membresía" },
    ],
  },
  {
    image: Step2,
    text: [
      { bold: false, value: "Realiza " },
      { bold: true, value: "el pago " },
      { bold: false, value: "en línea" },
    ],
  },
  {
    image: Step3,
    text: [
      { bold: true, value: "Revisa tu correo " },
      { bold: false, value: "para " },
      { bold: true, value: "Activar " },
      { bold: false, value: "tu Membresía" },
    ],
  },
  {
    image: Step4,
    text: [
      { bold: false, value: "Comienza a comprar " },
      { bold: true, value: "con los mejores costos" },
    ],
  },
];
// const benefits = [{ image: Benfit1 }, { image: Benfit2 }, { image: Benfit3 }];
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
      className="color-primary flex flex-col sm:gap-5 gap-5"
    >
      <div className="grid grid-cols-4 sm:w-3/4 w-full mt-8 mx-auto text-center">
        <h1 className="sm:text-4xl text-xl col-span-4 text-center font-bold">
          ¿Cómo suscribirte a CostoFarma?
        </h1>
        {items.map((element, i) => {
          return (
            <div
              className="sm:col-span-1  col-span-2 sm:p-8 p-10 flex flex-col items-center justify-center"
              key={i}
            >
              <img src={element.image} className="" />
              <span className="text-center text-xs sm:text-base">
                {element.text.map((part, j) =>
                  part.bold ? (
                    <strong key={j}>{part.value}</strong>
                  ) : (
                    <span key={j}>{part.value}</span>
                  )
                )}
              </span>
            </div>
          );
        })}
      </div>
      {/* <div className="separator w-screen top-0"></div> */}

      {/* Sección dónde se muestra la tabla y se abren los modals para pagar la membresía */}
      <div ref={paymentRef}>
        <PaymentSection />
      </div>
      {/*  */}

      <div className=" container sm:w-4/6 w-full flex items-center justify-center">
        <img src={Benfits} alt="" />
        {/* {benefits.map((element, i) => {
          return (
            <div className="sm:col-span-1 col-span-4" key={i}>
              <img src={element.image} className="" />
            </div>
          );
        })} */}
      </div>
      {/* <div className="separator w-screen top-0"></div> */}
      <div className="flex flex-col items-center justify-center sm:w-3/4 w-full gap-2 container">
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
