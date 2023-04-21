import React from "react";
import { Col, Container } from "react-bootstrap";
import creditCards from "../assets/img/cards1.png";
import debitCards from "../assets/img/cards2.png";
export const Footer = () => {
  return (
    <footer className=" text-center primary-bg py-2   bottom-0 w-full flex flex-col gap-3">
      <Container>
        <div className="grid grid-cols-2 mt-5 mb-3">
          <div className="footer-left col-span-1 flex flex-col items-start gap-y-4 font-light max-sm:col-span-2 max-sm:text-start max-sm:mb-5 max-sm:text-xs">
            <h4 className="h5 text-white max-sm:text-sm">Contáctanos</h4>
            <h6 className="max-sm:text-xs">
              {"Llámanos: "}
              <a href="tel:5531451948" target="_blank">
                01 (55) 3145 1948
              </a>
            </h6>
            <h6 className="max-sm:text-xs">
              {"Dirección: "}
              <a href="https://goo.gl/maps/rBhet7ZZPPe5td7T8" target="_blank">
                Culiacán 123, piso 8, Col. Hipódromo, CDMX, 06100
              </a>
            </h6>
            <h6 className="max-sm:text-xs">
              {"E-mail: "}
              <a
                href="mailto:servicioalcliente@farmaleal.com.mx"
                target="_blank"
              >
                servicioalcliente@farmaleal.com.mx
              </a>
            </h6>
            <h6 className="max-sm:text-xs">Horarios: Lun - Vie 9 AM a 8 PM</h6>
          </div>
          <div className="footer-right col-span-1 flex flex-col items-start gap-y-4 font-light max:sm:col-span-2 ">
            <h4 className="h5 text-white max-sm:text-sm">Políticas</h4>
            <h6 className="max-sm:text-xs">
              <a
                href="https://www.farmaleal.com.mx/pages/contactanos"
                target="_blank"
              >
                Contáctanos
              </a>
            </h6>
            <h6 className="max-sm:text-xs">
              <a
                href="https://www.farmaleal.com.mx/apps/help-center"
                target="_blank"
              >
                Preguntas Frecuentes
              </a>
            </h6>
            <h6 className="max-sm:text-xs">
              <a
                href="https://www.farmaleal.com.mx/policies/terms-of-service"
                target="_blank"
              >
                Términos del Servicio
              </a>
            </h6>
            <h6 className="max-sm:text-xs">
              <a
                href="https://www.farmaleal.com.mx/pages/cotiza-tu-envio"
                target="_blank"
              >
                Calcula tu Envío
              </a>
            </h6>
            <h6 className="max-sm:text-xs">
              <a
                href="https://www.farmaleal.com.mx/pages/aviso-de-privacidad"
                target="_blank"
              >
                Aviso de Privacidad
              </a>
            </h6>
          </div>
        </div>
        <div className=" border border-white border-b-2 border-opacity-10 mb-3 w-full text-center"></div>
        <div className="">
          <h2 className="h4 text-white">Formas de Pago</h2>
          <div className="grid grid-cols-2 items-start ">
            <div className="flex flex-col items-center justify-center text-cyan-800 font-semibold col-span-1 max-sm:col-span-2 max-sm:mb-3">
              <h4 className="text-sm text-white mb-3 font-light">
                Tarjetas de crédito
              </h4>
              <img src={creditCards} />
            </div>
            <div className="flex flex-col items-center justify-center text-cyan-800 font-semibold col-span-1 max-sm:col-span-2">
              <h4 className="text-sm text-white mb-3 font-light">
                Tarjetas de débito
              </h4>
              <img src={debitCards} />
            </div>
          </div>
        </div>

        <div className="p-5">
          <p className="m-0 px-1 bottom-text text-white">
            © 2023, <a href="https://www.farmaleal.com.mx/">Farma Leal</a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
