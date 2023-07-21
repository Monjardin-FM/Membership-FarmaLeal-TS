import { BiDollarCircle } from "react-icons/bi";
import Image1 from "../assets/img/heroImage2.png";
import Tarjeta from "../assets/img/tarjetas.png";
import { FiExternalLink } from "react-icons/fi";
import {
  TbDiscount2,
  TbExternalLink,
  TbPhoneCall,
  TbPill,
  TbTruckDelivery,
} from "react-icons/tb";
// import { HeroIcon } from "./HerIcon";
type HeroProps = {
  setModalVerificationCard: (flag: boolean) => void;
  handleClickScroll: () => void;
};

const Items = [
  {
    label: "Garantía de precio más bajo",
    icon: <BiDollarCircle size={35} />,
  },
  {
    label: "Un producto de nuestro catálogo pensado en ti al mes.*",
    icon: <TbPill size={35} />,
  },
  {
    label: "¡Miles de descuentos comerciales!",
    icon: <TbDiscount2 size={35} />,
  },
  {
    label: "Video-consultas 24/7",
    icon: <TbPhoneCall size={35} />,
  },
  {
    label: "Entrega Nacional",
    icon: <TbTruckDelivery size={35} />,
  },
];

export const Hero = ({
  setModalVerificationCard,
  handleClickScroll,
}: HeroProps) => {
  return (
    <section id="hero" className="flex flex-col container items-center">
      <div className="flex lg:flex-row max-sm:flex-col">
        <div className="max-sm:w-full w-8/12 py-9 lg:px-20 flex flex-col gap-4 max-sm:mt-10">
          <div className="max-sm:text-center">
            {/* <h4 className="h4 fw-400">MEMBRESÍA</h4> */}
            <h1 className="h1 fw-300 color-secondary ">
              <span className="fw-700">CLUB</span> <span>FARMALEAL</span>
            </h1>
          </div>
          <div className="color-secondary max-sm:text-center">
            <p
              className="uppercase fw-700
            "
            >
              Garantizado
            </p>
            <p className="fw-700">Por sólo</p>
            <div className="flex lg:flex-row lg:items-end gap-2 max-sm:justify-center max-sm:flex-col">
              <div>
                <h2 className="fw-700 price">$100</h2>
              </div>
              <div>
                <h6 className="h6 fw-500">AL MES</h6>
              </div>
            </div>
          </div>
          <div>
            <p className="color-secondary fw-500 text-sm uppercase max-sm:text-center">
              Ahorra miles de pesos en todos tus medicamentos
              <br />
              <span className="fw-700">
                somos líderes en medicamentos para crónicos y de alta
                especialidad.
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3 max-sm:flex-col ">
            <button
              onClick={() => setModalVerificationCard(true)}
              className=" rounded-full py-6 px-12 text-white fw-400 bg-danger-600 transition duration-200"
            >
              OBTENER MEMBRESÍA
            </button>
            <button className="uppercase rounded-full py-6 px-12  fw-400 primary-bg  hover:text-white transition duration-200 flex flex-row items-center justify-center ">
              <a
                target="_blank"
                href="https://clubfarmaleal.myshopify.com/"
                className="flex flex-row items-center justify-center gap-3 text-white hover:text-white  no-underline"
              >
                <span>Consulta nuestros precios exclusivos </span>
                <TbExternalLink size={22} />
              </a>
            </button>
          </div>
        </div>
        <div className="max-sm:w-full lg:w-4/12 p-10 hero-top">
          <div className="hero-image-container relative mx-auto">
            <img src={Image1} className="rounded-none" />
            <img className="hero-image absolute " src={Tarjeta} />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-start max-sm:flex-col max-sm:gap-8 max-sm:mb-14 w-10/12 max-sm:w-full mb-10">
        {Items.map((element) => {
          return <HeroIcon key={element.label} {...element} />;
        })}
      </div> */}
    </section>
  );
};
