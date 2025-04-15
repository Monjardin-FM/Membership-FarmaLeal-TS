import {
  TbDiscount2,
  TbPhoneCall,
  TbPill,
  TbTruckDelivery,
} from "react-icons/tb";
import Step1 from "../../public/images/Memebresia_Paso01.png";
import Step2 from "../../public/images/Memebresia_Paso02.png";
import Step3 from "../../public/images/Memebresia_Paso03.png";
import Step4 from "../../public/images/Memebresia_Paso04.png";
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
      <div className="flex flex-row  w-full items-center justify-center  gap-3 ">
        {items.map((element, i) => {
          return (
            // <div className="col-span-1 max-sm:col-span-2 text-white  hover:shadow-primary-600 hover:shadow-2xl transition duration-200">
            <div className="w-1/4  overflow-hidden">
              <img src={element.image} className="w-full overflow-hidden" />
            </div>
            // </div>
          );
        })}
      </div>
      <div className="w-full relative flex flex-col items-center justify-center">
        <div className="absolute flex flex-row items-center justify-center gap-5 w-full h-full">
          <div className=" w-1/2 h-4/6  hover:cursor-pointer hover:shadow-gray-100 hover:shadow-2xl transition duration-200"></div>
          <div className=" w-1/2 h-4/6  hover:cursor-pointer hover:shadow-gray-100 hover:shadow-2xl transition duration-200"></div>
        </div>
        <img src="../../public/images/CostosMembresia_01.png" />
      </div>
      <div className="grid grid-cols-3 gap-5">
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
