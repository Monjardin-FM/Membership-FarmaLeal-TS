import { Button, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
type PricingProps = {
  setModalVerificationCard: (flag: boolean) => void;
};
export const Pricing = ({ setModalVerificationCard }: PricingProps) => {
  return (
    <section
      id="pricing"
      className="w-full rounded-3 p-2 mb-5 hover:bg-slate-100 transition duration-300 hover:text-white"
    >
      <Container fluid className="">
        <Row className="mx-1 my-2 benefits-row p-1">
          <Stack direction="vertical" className="flex flex-col ">
            <h6 className="h4 fw-700 color-primary">Precio final</h6>
            <h4 className="text-lg font-bold color-secondary">
              $1,200 MXN anuales
            </h4>
            <p className="color-primary fw-700 fs-6 mb-3">
              Puedes pagar con tarjeta de débito o crédito y hasta 12 meses sin
              interéses
            </p>
            <Link to="/" className="mx-auto mx-md-0 self-center">
              <Button
                size="lg"
                // className='secondary-bg w-75 fw-600 fs-6 border-0'
                variant="danger"
                className="bg-red-700 w-50 rounded-3 w-auto fw-500 py-2 px-3 border-0 text-base "
                onClick={() => setModalVerificationCard(true)}
              >
                Obtener membresía
              </Button>
            </Link>
          </Stack>
        </Row>
      </Container>
    </section>
  );
};
