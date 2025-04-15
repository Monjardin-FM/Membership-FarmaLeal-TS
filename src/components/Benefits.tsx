import {
  TbDiscount2,
  TbPhoneCall,
  TbPill,
  TbTruckDelivery,
} from "react-icons/tb";
import Step1 from "../assets/img/Paso1_membresias.png";
import Step2 from "../assets/img/Paso2_membresias.png";
import Step3 from "../assets/img/Paso3_membresias.png";
import Step4 from "../assets/img/Paso4_membresias.png";
import MembershipPrice1 from "../assets/img/PagoMembresia_155.png";
import MembershipPrice2 from "../assets/img/PagoMembresia_175.png";
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

type BenefitsProps = {
  setModalVerificationCard: (flag: boolean) => void;
  setPaymentExc: React.Dispatch<React.SetStateAction<string[]>>;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};
export const Benefits = ({
  setModalVerificationCard,
  setAmount,
  setPaymentExc,
}: BenefitsProps) => {
  return (
    <section
      // id="benefits"
      className="color-primary flex flex-col items-center gap-10 w-full max-sm:w-full max-sm:mb-20 max-md:w-full "
    >
      <div className="flex flex-row  w-full items-center justify-center  gap-3 container">
        {items.map((element, i) => {
          return (
            <div className="w-1/4  overflow-hidden p-10">
              <img src={element.image} className="w-full overflow-hidden" />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-5 justify-center items-center container">
        <div className="col-span-1">
          <img src={MembershipPrice1} className="" />
        </div>

        <div className="col-span-1">
          <img src={MembershipPrice2} className="" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 container">
        <div className="col-span-1">
          <img
            src="../../public/images/Membresia_Beneficios-01.png"
            className=""
          />
        </div>
        <div className="col-span-1">
          <img
            src="../../public/images/Membresia_Beneficios-02.png"
            className=""
          />
        </div>
        <div className="col-span-1">
          <img
            src="../../public/images/Membresia_Beneficios-03.png"
            className=""
          />
        </div>
      </div>
      <div className="separator w-screen"></div>
      {/* <Table /> */}

      {/* <Pricing
        setModalVerificationCard={setModalVerificationCard}
        setPaymentExc={setPaymentExc}
        setAmount={setAmount}
      /> */}
    </section>
  );
};
