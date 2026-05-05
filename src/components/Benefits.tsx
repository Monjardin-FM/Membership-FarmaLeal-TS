import Step1 from "../assets/img/icono_activa tu membresía.png";
import Step2 from "../assets/img/icono_precios exclusivos.png";
import Step3 from "../assets/img/icono_compra y ahorra.png";
import Icon1 from "../assets/img/icono_precios exclusivos.png";
import Icon2 from "../assets/img/icono_asesoría farmaceutica.png";
import Icon3 from "../assets/img/icono_envios rapidos.png";
import Icon4 from "../assets/img/icono_clientes satisfechos.png";
import Icon5 from "../assets/img/icono_compra segura.png";
import Icon6 from "../assets/img/icono_WhatsApp.png";
import ButtonMembership from "../assets/img/cintillo2.png";
import { PaymentSection } from "./shopify-payment-section/PaymentSection";
const items = [
  {
    image: Step1,
    text: "Activa tu membresía",
    subtext: "Elige el plan que mejor se adapte a ti",
  },
  {
    image: Step2,
    text: "Acceso a precios exclusivos",
    subtext: "Miles de medicamentos a precios preferenciales",
  },
  {
    image: Step3,
    text: "Compra y ahorra",
    subtext: "Desde tu primer pedido empieza a ahorrar",
  },
];
const info = [
  {
    image: Icon1,
    text: "Precios exclusivos en medicamentos de alta especialidad, genéricos y más.",
  },

  {
    image: Icon2,
    text: "Asesoría farmacéutica para resolver tus dudas sobre medicamentos.",
  },
  {
    image: Icon3,
    text: "Envíos rápidos y seguros a la CDMX y área metropolitana.",
  },
];
const info2 = [
  {
    image: Icon4,
    text: "Más de 10,000 clientes satisfechos",
  },

  {
    image: Icon5,
    text: "Compra más segura y protegida",
  },
  {
    image: Icon6,
    text: "Atención por Whatsapp",
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
      <div className="grid grid-cols-3 sm:w-3/4 w-full mt-8 mx-auto gap-10">
        <h1 className="sm:text-4xl text-xl col-span-3 text-center font-bold">
          ¿Cómo funciona?
        </h1>

        {items.map((element, i) => {
          return (
            <div
              key={i}
              className="sm:col-span-1 col-span-3 flex flex-col items-center"
            >
              {/* Icono */}
              <div className="w-20 mb-4">
                <img src={element.image} className="w-full" />
              </div>

              {/* Contenido */}
              <div className="flex items-start gap-4 w-full max-w-[300px]">
                {/* Número */}
                <div className="bg-warn-500 w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shrink-0">
                  {i + 1}
                </div>

                {/* Texto */}
                <div className="flex flex-col text-left gap-1">
                  <p className="font-bold sm:text-lg text-sm">{element.text}</p>
                  <p className="text-gray-600 sm:text-base text-xs">
                    {element.subtext}
                  </p>
                </div>
              </div>
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

      {/* <div className="separator w-screen top-0"></div> */}
      <div className="flex flex-col items-center justify-center sm:w-full w-full gap-2 mt-10">
        <h2 className="text-3xl font-bold">Tu membresía incluye</h2>
      </div>
      <div className="flex flex-col items-center justify-center sm:w-full w-full gap-2 bg-primary-100 p-5">
        <div className="w-full grid grid-cols-3 gap-4 relative">
          {/* Separadores verticales (solo desktop) */}
          <div className="hidden sm:block absolute top-0 bottom-0 left-1/3 w-px bg-gray-400" />
          <div className="hidden sm:block absolute top-0 bottom-0 left-2/3 w-px bg-gray-400" />

          {info.map((element, i) => {
            return (
              <div
                key={i}
                className="sm:col-span-1 col-span-3 grid grid-cols-4 gap-3 items-center w-full sm:px-6"
              >
                <div className="col-span-1">
                  <img src={element.image} className="w-full" />
                </div>

                <span className="col-span-3 text-left sm:text-lg text-sm font-bold flex flex-col">
                  {element.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center sm:w-full w-full gap-2  p-5">
        <div className="w-full grid grid-cols-3 gap-4 justify-center items-center ">
          {info2.map((element, i) => {
            return (
              <div
                className="sm:col-span-1 col-span-3  gap-1 grid grid-cols-4 items-center justify-center w-full sm:w-4/5"
                key={i}
              >
                <div className="col-span-1">
                  <img src={element.image} className="w-1/2" />
                </div>
                <span className="col-span-3 text-left sm:text-xl text-sm font-extrabold flex flex-col">
                  {element.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src={ButtonMembership}
          className="sm:w-full w-full hover:cursor-pointer"
          onClick={() => {
            onScrollToPayment();
          }}
        />
      </div>
    </section>
  );
};
