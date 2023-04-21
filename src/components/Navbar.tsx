import { useState } from "react";
import { Col, Container, Nav, Navbar, Row, Stack } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/img/farmaleal-logo.png";
import { Cross } from "hamburger-react";
export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="navbar">
      <Container fluid>
        <Row className="text-center primary-bg py-2 text-white">
          <Col xs={0} md={2}></Col>
          <Col xs={12} lg={8} className="">
            <p className="m-0 px-1 header-top max-sm:text-xs">
              Tu farmacia digital en productos de especialidad - Envíos a todo
              México
            </p>
          </Col>
          <Col xs={12} lg={2}>
            <Stack
              direction="horizontal"
              gap={1}
              className="d-flex justify-content-center pt-2 pt-md-0"
            >
              <a
                className="p-0 text-white mx-2"
                href="https://twitter.com/FarmaLeal/"
              >
                <FaTwitter size={22} />
              </a>
              <a
                className="p-0 text-white mx-2"
                href="https://www.facebook.com/CFarmaLeal/"
              >
                <AiFillFacebook size={22} />
              </a>
              <a
                className="p-0 text-white mx-2"
                href="https://www.instagram.com/farmaleal/"
              >
                <AiOutlineInstagram size={22} />
              </a>
              <a
                className="p-0 text-white mx-2"
                href="https://www.youtube.com/channel/UCVezBeVMt6iPAsq2a9_4CIA"
              >
                <AiFillYoutube size={22} />
              </a>
            </Stack>
          </Col>
        </Row>
      </Container>

      <Navbar expand="md" expanded={isOpen} className="h-20">
        <Container>
          <Row className="align-items-center w-100 text-center">
            <Col xs={12} md={2}>
              <img
                className="ms-0 logo-image max-sm:w-12 "
                src={Logo}
                alt="Logo Farmaleal"
                width="80px"
              />
            </Col>
            <Col xs={12} md={10} className="relative max-sm:-top-10">
              <Link to="/">Inicio</Link>
              <Link to="https://customer.login.shopify.com/lookup?destination_uuid=d03a8fb1-e91f-4f45-b528-c922f5b39d34&redirect_uri=https%3A%2F%2Fshopify.com%2F73657516343%2Faccount%2Fcallback&rid=914bcedd-c5ab-4d46-9b51-e4baa41a8ab6&ui_locales=es">
                Login
              </Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </section>
  );
};
