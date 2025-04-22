import ImageHero from "../assets/img/Banner_Membresia.jpg";
import ImageHeroMovil from "../assets/img/Membresia_Movil.jpg";
type HeroProps = {
  openModalTypePayment: () => void;
};

export const Hero = ({ openModalTypePayment }: HeroProps) => {
  return (
    <section id="hero" className="flex flex-col items-center w-screen">
      <div className="w-full relative">
        <div
          className="absolute w-full h-4/6 self-center left-0 hover:cursor-pointer"
          onClick={() => openModalTypePayment()}
        ></div>

        {/* Imagen para Desktop */}
        <div className="hidden sm:block">
          <img src={ImageHero} alt="Hero Desktop" />
        </div>

        {/* Imagen para Móvil */}
        <div className="block sm:hidden">
          <img src={ImageHeroMovil} alt="Hero Móvil" />
        </div>
      </div>
    </section>
  );
};
