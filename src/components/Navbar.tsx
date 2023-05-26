import { useState } from "react";
import { Col, Container, Navbar, Row, Stack } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo-farmaleal.png";
export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="navbar w-full">
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

      <Navbar expand="md" expanded={isOpen} className="h-24">
        <div className="w-full flex flex-row max-sm:justify-around lg:justify-evenly items-center lg:gap-x-96">
          <div>
            <img
              className="ms-0 logo-image max-sm:w-20"
              src={Logo}
              alt="Logo Farmaleal"
              width="80px"
            />
          </div>
          <div className="flex flex-row max-sm:gap-5 lg:gap-5">
            <div>
              <Link to="/">
                <span className="font-semibold">Inicio</span>
              </Link>
            </div>
            <div>
              <Link to="https://customer.login.shopify.com/lookup?destination_uuid=d03a8fb1-e91f-4f45-b528-c922f5b39d34&redirect_uri=https%3A%2F%2Fshopify.com%2F73657516343%2Faccount%2Fcallback&rid=914bcedd-c5ab-4d46-9b51-e4baa41a8ab6&ui_locales=es">
                <span className="font-semibold">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </Navbar>
    </section>
  );
};
