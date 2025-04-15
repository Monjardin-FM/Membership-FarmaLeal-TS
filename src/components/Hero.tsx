import { BiDollarCircle } from "react-icons/bi";
import Image1 from "../assets/img/heroImage2.png";
import Tarjeta from "../assets/img/tarjetas.png";
// import { FiExternalLink } from "react-icons/fi";
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
  setPaymentExc: React.Dispatch<React.SetStateAction<string[]>>;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

const Items = [
  {
    label: "Garantía de precio más bajo",
    icon: <BiDollarCircle size={35} />,
  },
  {
    label: "Catálogo con más de 17,000 productos",
    icon: <TbPill size={35} />,
  },
  {
    label: "Ahorra en tu tratamiento sin sacrificar la calidad",
    icon: <TbDiscount2 size={35} />,
  },
  {
    label: "Consultas médicas en línea",
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
  setAmount,
  setPaymentExc,
}: HeroProps) => {
  const a = "e3f3f0";
  return (
    <section id="hero" className="flex flex-col container items-center w-full">
      <div className="w-full relative">
        <div className="absolute w-full h-4/6 self-center left-0 hover:cursor-pointer"></div>
        <img src="../../public/images/BannerMembresia_01.png" />
      </div>
    </section>
  );
};
//  <div className="flex lg:flex-row max-sm:flex-col">
//   <div className="max-sm:w-full w-8/12 py-9 lg:px-20 flex flex-col gap-4 max-sm:mt-10">
//     <div className="max-sm:text-center">
//       {/* <h4 className="h4 fw-400">MEMBRESÍA</h4> */}
//       <h1 className="h1 fw-300 color-secondary ">
//         <span className="fw-700">COSTO</span> <span>FARMA</span>
//       </h1>
//     </div>
//     <div className="color-secondary max-sm:text-center">
//       <p
//         className="uppercase fw-700
//       "
//       >
//         Garantizado
//       </p>
//       <p className="fw-700">Por sólo</p>
//       <div className="flex lg:flex-row lg:items-end gap-2 max-sm:justify-center max-sm:flex-col">
//         <div
//           onClick={() => {
//             setAmount(170);
//             setPaymentExc(["credit_card"]);
//             setModalVerificationCard(true);
//           }}
//           className="cursor-pointer"
//         >
//           <h2 className="fw-700 price">$170</h2>
//         </div>
//         <div>
//           <h6 className="h6 fw-500">AL MES,</h6>
//         </div>
//         <div
//           onClick={() => {
//             setAmount(900);
//             setPaymentExc(["credit_card"]);
//             setModalVerificationCard(true);
//           }}
//           className="cursor-pointer"
//         >
//           <h2 className="fw-700 price">$150</h2>
//         </div>
//         <div>
//           <h6 className="h6 fw-500">DURANTE 6 MESES ($900),</h6>
//         </div>
//         <div
//           onClick={() => {
//             setAmount(1560);
//             setPaymentExc(["credit_card"]);
//             setModalVerificationCard(true);
//           }}
//           className="cursor-pointer"
//         >
//           <h2 className="fw-700 price">$130</h2>
//         </div>
//         <div>
//           <h6 className="h6 fw-500">DURANTE 12 MESES ($1560),</h6>
//         </div>
//       </div>
//       <div className="flex lg:flex-row lg:items-end gap-2 max-sm:justify-center max-sm:flex-col">
//         <div
//           onClick={() => {
//             setAmount(1800);
//             setPaymentExc(["debit_card"]);
//             setModalVerificationCard(true);
//           }}
//           className="cursor-pointer"
//         >
//           <h2 className="fw-700 price">$150</h2>
//         </div>
//         <div>
//           <h6 className="h6 fw-500">
//             DURANTE 12 MESES ($1800) A MESES SIN INTERESES,
//           </h6>
//         </div>
//       </div>
//     </div>
//     <div>
//       <p className="color-secondary fw-500 text-sm uppercase max-sm:text-center">
//         Ahorra miles de pesos en todos tus medicamentos
//         <br />
//         <span className="fw-700">
//           somos líderes en medicamentos para crónicos y de alta
//           especialidad.
//         </span>
//       </p>
//     </div>

//     <div className="flex items-center gap-3 max-sm:flex-col ">
//       {/* <button
//         onClick={() => setModalVerificationCard(true)}
//         className=" rounded-full py-6 px-12 text-white fw-400 bg-danger-600 transition duration-200"
//       >
//         OBTENER MEMBRESÍA
//       </button> */}
//       <button className="uppercase rounded-full py-6 px-12  fw-400 primary-bg  hover:text-white transition duration-200 flex flex-row items-center justify-center ">
//         <a
//           target="_blank"
//           href="https://alcosto.farmaleal.com.mx/"
//           className="flex flex-row items-center justify-center gap-3 text-white hover:text-white  no-underline"
//         >
//           <span>Consulta nuestros precios exclusivos </span>
//           <TbExternalLink size={22} />
//         </a>
//       </button>
//     </div>
//   </div>
//   <div className="max-sm:w-full lg:w-4/12 p-10 hero-top">
//     <div className="hero-image-container relative mx-auto">
//       <img src={Image1} className="rounded-none" />
//       <img className="hero-image absolute " src={Tarjeta} />
//     </div>
//   </div>
// </div>
