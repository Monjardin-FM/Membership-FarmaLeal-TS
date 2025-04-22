import Step1 from "../assets/img/Paso1_membresias.png";
import Step2 from "../assets/img/Paso2_membresias.png";
import Step3 from "../assets/img/Paso3_membresias.png";
import Step4 from "../assets/img/Paso4_membresias.png";
import Benfit1 from "../assets/img/Membresia_Beneficios-01.png";
import Benfit2 from "../assets/img/Membresia_Beneficios-02.png";
import Benfit3 from "../assets/img/Membresia_Beneficios-03.png";
import Icon1 from "../assets/img/Icono_Cintillo-03.png";
import Icon2 from "../assets/img/Icono_Cintillo-04.png";
import Icon3 from "../assets/img/Icono_Cintillo-05.png";
import Icon4 from "../assets/img/Icono_Cintillo-06.png";
import ButtonMembership from "../assets/img/boton_Membresia.png";
import { Table } from "./Table";

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
    image: Icon2,
    text: "Consultas médicas en línea",
  },
  {
    image: Icon3,
    text: "Envíos a la CDMX y área metropolitana",
  },
  {
    image: Icon4,
    text: "Asistencia telefónica especializada",
  },
];

type BenefitsProps = {
  openModalTypePayment: () => void;
  onOpenPaymentModal: (type: string) => void;
};
export const Benefits = ({
  openModalTypePayment,
  onOpenPaymentModal,
}: BenefitsProps) => {
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
      <Table onOpenPaymentModal={onOpenPaymentModal} />

      <div className="grid grid-cols-3 gap-5 container">
        {benefits.map((element, i) => {
          return (
            <div className="sm:col-span-1 col-span-4">
              <img src={element.image} className="" />
            </div>
          );
        })}
      </div>
      <div className="separator w-screen top-0"></div>
      <div className="flex flex-col items-center justify-center w-full gap-2 container">
        <span className="sm:text-3xl text-xl font-bold text-center">
          Ahorra en tus compras y envíos
        </span>
        <div className="w-full grid grid-cols-4 gap-2 justify-center items-center ">
          {info.map((element, i) => {
            return (
              <div className="sm:col-span-1 col-span-2 flex flex-row items-center justify-center gap-3">
                <div className="w-1/2">
                  <img src={element.image} className="" />
                </div>
                <span className="text-left sm:text-base text-xs font-bold">
                  {element.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center container">
        <img
          src={ButtonMembership}
          className="sm:w-3/5 w-full hover:cursor-pointer"
          onClick={() => openModalTypePayment()}
        />
      </div>
    </section>
  );
};
