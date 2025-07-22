import ImageHero from "../assets/img/HeroCostoFarma.jpg";
import ImageHeroMovil from "../assets/img/HeroCostoFarma_movil.png";
import Pleca from "../assets/img/PlecaVentajas.jpg";
type HeroProps = { onScrollToPayment: () => void };

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
        <div className="hidden sm:block">
          <img src={Pleca} />
        </div>

        {/* Imagen para Móvil */}
        <div className="block sm:hidden">
          <img src={ImageHeroMovil} alt="Hero Móvil" />
        </div>
      </div>
    </section>
  );
};
