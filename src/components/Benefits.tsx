import { BiDollarCircle } from "react-icons/bi";
import {
  TbDiscount2,
  TbPhoneCall,
  TbPill,
  TbTruckDelivery,
} from "react-icons/tb";

const Items = [
  {
    icon: <TbPhoneCall size={"1.9rem"} />,
    label: "Videoconsultas con médicos 24/7",
  },
  {
    icon: <TbPill size={"1.9rem"} />,
    label: "1 producto gratis al mes del catálogo de productos gratuitos.*",
  },
  {
    icon: <TbDiscount2 size={"1.9rem"} />,
    label:
      "Descuentos en ropa, restaurantes, viajes, laboratorios, consultas médicas, ópticas, dentistas y ¡mucho más!",
  },
  {
    icon: <TbTruckDelivery size={"1.9rem"} />,
    label: "Entrega Nacional *",
    subText:
      "El costo de los envíos corre por cuenta del afiliado.Envíos a CDMX sin costo.",
  },
];

export const Benefits = () => {
  return (
    <section
      id="benefits"
      className="lg:my-20 color-primary flex flex-col items-center w-10/12 max-sm:w-full max-sm:mb-20"
    >
      <h5 className="h5 mb-5 max-sm:text-center w-5/12">
        Te <b className="membresia">garantizamos</b> el mejor precio del
        mercado, pero además, tu membresía incluye sin costo adicional:
      </h5>
      <div className="grid grid-cols-2 text-white w-full lg:gap-2 items-center max-sm:gap-2">
        {/* <div className="col-span-2 h-full max-sm:col-span-2">
          <div className="benefit-item secondary-bg text-center h-full flex flex-col items-center justify-center my-3">
            <div className="flex flex-col items-center w-full gap-2 max-sm:p-4 ">
              <BiDollarCircle size={"1.9rem"} />
              <p className="fw-500 h6 max-sm:text-sm text-center">
                Los medicamentos que requieras al precio más bajo{" "}
                <span className="uppercase">garantizado</span>
              </p>
            </div>
          </div>
        </div> */}
        <div className="col-span-1 h-full max-sm:col-span-2">
          <div className="benefit-item primary-bg text-center h-full flex lg:flex-row max-sm:flex-col items-center justify-center my-3 gap-3 p-3">
            <TbPill size={"1.9rem"} />
            <p className="fw-500 h6 max-sm:text-base">
              Un producto gratis al mes de nuestro catálogo de más de 300
              medicamentos pensados para ti
            </p>
          </div>
        </div>
        <div className="col-span-1  h-full max-sm:col-span-2">
          <div className="benefit-item secondary-bg text-center h-full flex lg:flex-row max-sm:flex-col items-center justify-center my-3 gap-3 p-3">
            <TbDiscount2 size={"1.9rem"} />
            <p className="fw-500 h6 max-sm:text-base">
              Miles de descuentos comerciales en nuestra RED TDC
            </p>
          </div>
        </div>
        <div className="col-span-1 h-full max-sm:col-span-2">
          <div className="benefit-item secondary-bg max-sm:primary-bg text-center h-full flex lg:flex-col max-sm:flex-col items-center justify-center my-3 gap-3 p-3">
            <div className="flex lg:flex-row max-sm:flex-col items-center gap-3">
              <TbTruckDelivery size={"1.9rem"} />
              <p className="fw-500 h6 max-sm:text-base">Entrega Nacional *</p>
            </div>
            <span className="text-xs">
              *Envíos a CDMX sin costo. El costo de los envíos corre por cuenta
              del afiliado
            </span>
          </div>
        </div>
        <div className="col-span-1  h-full max-sm:col-span-2">
          <div className="benefit-item primary-bg  max-sm:secondary-bg text-center h-full flex lg:flex-row max-sm:flex-col items-center justify-center my-3 gap-3 max-sm:p-3">
            <TbPhoneCall size={"1.9rem"} />
            <p className="fw-500 h6 max-sm:text-base">
              Videoconsultas con médicos 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
