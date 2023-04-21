import { Container, Row, Stack } from "react-bootstrap";
import { BenefitItem } from "./BenefitItem";
import { BiDollarCircle } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import { RiNewspaperFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { GiPostOffice } from "react-icons/gi";

const benefitList = [
  {
    title: "Los medicamentos que quieras al precio más bajo.",
    bgClass: "secondary-bg",
    icon: <BiDollarCircle size={30} />,
  },
  {
    title: "1 producto gratis al mes de nuestro catálogo seleccionado.",
    bgClass: "primary-bg",
    icon: <BsLink45Deg size={30} />,
  },
  {
    title:
      "TDC de nuestra red comercial con más de 5,000 descuentos a nivel nacional.",
    bgClass: "secondary-bg",
    icon: <RiNewspaperFill size={30} />,
  },
  {
    title: "Videollamadas con doctores 24/7.",
    bgClass: "primary-bg",
    icon: <FiPhoneCall size={30} />,
  },
  {
    title: "Entrega nacional *",
    bgClass: "secondary-bg",
    icon: <GiPostOffice size={30} />,
    disclaimer:
      "*El costo de los envíos corre por cuenta del afiliado. Envíos a CDMX sin costo.",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits">
      <Container fluid>
        <Row className="my-2 mx-0 w-100 pb-5 pt-5 benefits-row">
          <h5 className="h5 fw-600 ps-0 mb-4 text-start color-primary">
            Estos son nuestros beneficios:
          </h5>
          <div className="benefits-grid ">
            {benefitList.map((benefit) => (
              <BenefitItem key={benefit.title} {...benefit} />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};
