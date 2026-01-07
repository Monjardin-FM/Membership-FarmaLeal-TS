import ImageHero from "../assets/img/Banner_actualizacion datos.jpg";
import HeroMovil from "../assets/img/Banner_actualizacionMovil.jpg";
import Icon1 from "../assets/img/icono_01.png";
import Icon2 from "../assets/img/icono_02.png";
import Icon3 from "../assets/img/icono_03.png";
import Icon4 from "../assets/img/icono_04.png";
type HeroProps = { onScrollToPayment: () => void };
type Feature = {
  icon: string;
  text: string;
  alt: string;
};
const features: Feature[] = [
  { icon: Icon1, text: "Los mejores precios", alt: "Icono 1" },
  { icon: Icon2, text: "Compras seguras", alt: "Icono 2" },
  { icon: Icon3, text: "1 envío al mes GRATIS", alt: "Icono 3" },
  { icon: Icon4, text: "Atención personalizada", alt: "Icono 4" },
];
export const Hero = ({ onScrollToPayment }: HeroProps) => {
  return (
    <section id="hero" className="flex flex-col items-center w-screen">
      <div className="w-full relative">
        {/* <div
          className="absolute w-full h-full self-center left-0 hover:cursor-pointer border-2 border-danger-300"
          onClick={() => {
            onScrollToPayment();
          }}
        ></div> */}

        {/* Imagen para Desktop */}
        <div
          className="hidden sm:block hover:cursor-pointer"
          onClick={() => {
            onScrollToPayment();
          }}
        >
          <img src={ImageHero} alt="Hero Desktop" />
        </div>

        {/* Imagen para Móvil */}
        <div className="block sm:hidden">
          <img src={HeroMovil} />
        </div>
        {/* Cintillo promociones */}
        <div
          className="w-full flex flex-col sm:flex-row items-center justify-center sm:gap-5 gap-3 p-3"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-extrabold text-info-900 sm:text-2xl">
              Ventajas de ser socio
            </h2>
            <span className="text-xs font-medium sm:text-sm ">
              Recibe nuestra gaceta de promociones
            </span>
          </div>
          <div className="h-28 w-1 bg-info-200 sm:block hidden"></div>
          <div className="grid grid-cols-4 gap-2 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start col-span-1"
              >
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className="sm:w-16 sm:h-16 w-8 h-8"
                />
                <span className="text-center sm:text-sm text-xs font-bold ">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
