import { Col, Row, Container, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

type HeroProps = {
  setModalVerificationCard: (flag: boolean) => void;
};

export const Hero = ({ setModalVerificationCard }: HeroProps) => {
  return (
    <section id="hero">
      <Container>
        <Row className="mx-2 h-72 flex items-center justify-center">
          <Col xs={12} md={6} className="px-0">
            <Stack
              direction="vertical"
              className=" text-center text-md-start text-md-left d-flex align-items-center align-items-md-start"
              gap={2}
            >
              <h6 className="h6 text-white fw-500">MEMBRESÍA</h6>
              <h2 className="h1 text-white fw-700">
                CLUB <br />
                FARMALEAL
              </h2>
              <Button
                size="lg"
                // className='secondary-bg w-75 fw-600 fs-6 border-0'
                variant="danger"
                className="bg-red-700 w-50 rounded-3 w-auto fw-500  px-3  "
                onClick={() => setModalVerificationCard(true)}
              >
                Obtener membresía
              </Button>
            </Stack>
          </Col>
          <Col
            xs={12}
            md={6}
            className="hero-image-container px-0  w-4/12 flex flex-col items-center justify-center"
          >
            <img className="hero_image " src="images/tarjetas.png" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
