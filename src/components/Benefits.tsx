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
    link: "https://alcosto.farmaleal.com.mx/",
    icon: <TbPill size={"3rem"} />,
    label: "Medicamentos a precio de costo",
    subText: "Ähorra en tu tratamiento sin sacrificar la calidad",
  },
  {
    link: "https://alcosto.farmaleal.com.mx/",
    icon: <TbDiscount2 size={"3rem"} />,
    label: "Catálogo con más de 17,000 productos",
    subText:
      "*Descuentos exclusivos en productos de salud, cuidado personal y bienestar",
  },
  {
    link: "https://alcosto.farmaleal.com.mx/",
    icon: <TbPhoneCall size={"3rem"} />,
    label: "Consultas médicas en línea",
    subText: "*Atención inmediata con médicos certificados.",
  },
  {
    link: "https://alcosto.farmaleal.com.mx/",
    icon: <TbTruckDelivery size={"3rem"} />,
    label:
      "Acceso prioritario a promociones y lanzamientos de nuevos medicamentos",
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
              Tu <b>salud</b> y <b>bienestar</b> al mejor precio
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
      {/* <Table /> */}

      <Pricing setModalVerificationCard={setModalVerificationCard} />
    </section>
  );
};
