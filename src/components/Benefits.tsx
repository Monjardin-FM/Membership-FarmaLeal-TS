import { Button, Stack } from "react-bootstrap";
import {
  TbDiscount2,
  TbPhoneCall,
  TbPill,
  TbTruckDelivery,
} from "react-icons/tb";
import Arrow from "../assets/img/benefitsArrow.png";
import { Pricing } from "./Pricing";
import { Table } from "./Table";
const items = [
  {
    link: "https://clubfarmaleal.myshopify.com/collections/pensando-en-ti",
    icon: <TbPill size={"3rem"} />,
    label:
      "Te regalamos cualquiera de estos productos en una de tus compras mensuales.",
  },
  {
    link: "https://tdconsentido.mx/",
    icon: <TbDiscount2 size={"3rem"} />,
    label: "Miles de descuentos comerciales en nuestra RED TDC",
    subText: "*Al adquirir tu membresía recibirás tu tarjeta TDC.",
  },
  {
    link: "https://clubfarmaleal.myshopify.com/pages/envios",
    icon: <TbTruckDelivery size={"3rem"} />,
    label: "Entrega nacional *",
    subText:
      "*Envíos gratis a CDMX. Resto del país a costo Neto de mensajería.",
  },
  {
    link: "https://clubfarmaleal.myshopify.com/pages/videoconsultas",
    icon: <TbPhoneCall size={"3rem"} />,
    label: "Videoconsultas con médicos 24/7",
    subText:
      "*Al adquirir tu membresía recibirás un código para acceder a videoconsulta.",
  },
];

type BenefitsProps = {
  setModalVerificationCard: (flag: boolean) => void;
};
export const Benefits = ({ setModalVerificationCard }: BenefitsProps) => {
  return (
    <section
      // id="benefits"
      className="color-primary flex flex-col items-center gap-10 w-full max-sm:w-full max-sm:mb-20 max-md:w-full "
    >
      <div className="w-10/12 flex flex-col gap-10">
        <div className="w-full mt-20 relative h-32 ">
          <h1 className="text-center h1 font-bold mb-3">Beneficios</h1>
          <div className="w-40 rotate-12 absolute -top-14 left-1/4 max-sm:left-0 max-sm:-top-16">
            <img src={Arrow} alt="" />
          </div>
          <div className="w-full text-center flex flex-col items-center justify-center">
            <h5 className="h5 mb-5 max-sm:text-center w-5/12 max-sm:text-sm max-sm:w-full">
              Te <b>garantizamos</b> el mejor precio del mercado, pero además,
              tu membresía incluye sin costo adicional:
            </h5>
          </div>
        </div>
        <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col w-full items-center justiy-center max-sm:gap-2.5 gap-3 ">
          {items.map((element, i) => {
            return (
              <a href={element.link}>
                <div className="col-span-1 max-sm:col-span-2 text-white h-44 hover:shadow-emerald-600 hover:shadow-2xl transition duration-200">
                  <div
                    key={element.label}
                    className={`${
                      i % 3 === 0 ? "primary-bg" : "secondary-bg"
                    } p-2 benefit-item  h-100 flex flex-col items-center justify-center hvr-underline-from-center text-white  `}
                  >
                    <div className="my-4 w-full flex flex-row align-items-center justify-center">
                      <div className="w-1/12">{element.icon}</div>
                      <div className="w-8/12 fw-500 h6 ms-3  mb-0 text-lg text-center">
                        {element.label}
                      </div>
                    </div>

                    <div>
                      {element.subText && (
                        <p className="small mx-auto">{element.subText}</p>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="separator w-screen"></div>
      <Table />

      <Pricing setModalVerificationCard={setModalVerificationCard} />
    </section>
  );
};
