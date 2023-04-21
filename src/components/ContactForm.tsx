import { Button, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { useForm } from "../hooks/useForm";
import { useConfirmMembership } from "../hooks/use-confirm-membership";
import { Loader } from "./Loader";
import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type ContactFormProps = {
  email: string;
};
export const ContactForm = ({ email }: ContactFormProps) => {
  const { confirmMember, loading } = useConfirmMembership();
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [parent] = useAutoAnimate();
  const confirmButton = () => {
    return Swal.fire({
      title: "Cuenta creada con éxito",
      text: "Ya puedes disfrutar de los beneficios de tu membresia de Club FarmaLeal",
      icon: "success",
      confirmButtonText: "Ok",
      confirmButtonColor: "#15A186",
    });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const validEmail = regex.test(email);
    e.preventDefault();
    if (password !== repeatPassword || !validEmail) {
      if (!validEmail) {
        Swal.fire("Hubo un error", "No hay un correo vinculado", "error");
      }
      if (password != repeatPassword) {
        Swal.fire("Hubo un error", "Las contraseñas no coinciden", "error");
      }
    } else {
      const response = await confirmMember({
        email: email,
        password: password,
      });
      if (response.data.result) {
        const result = await confirmButton();
        if (result.isConfirmed) {
          window.location.href = "https://clubfarmaleal.myshopify.com/";
        }
      }
      if (!response.data.result) {
        Swal.fire({
          title: "Error al crear la cuenta",
          text: `${response.data.exceptionMessage}`,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#15A186",
        });
      }
    }
  };

  useEffect(() => {
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    );
    const res = strongRegex.test(password);
    setValidPassword(res);
  }, [password]);

  return (
    <>
      <div className="w-100" id="contact_form">
        <Form
          className="d-grid gap-3 text-white text-start"
          onSubmit={(e) => onSubmit(e)}
        >
          <Container fluid className="inputContainer">
            <Loader isVisible={loading}>
              <div className="text-center">
                <span>
                  <p className="font-semibold text-lg text-lime-400">
                    Creando cuenta.
                  </p>
                  <br />
                  Espera unos segundos, por favor
                </span>
              </div>
            </Loader>
            <Row>
              <p className="ps-0 fs-6 fw-500 mb-2">Correo electrónico</p>
              <input
                required
                className="px-3 py-2 mb-3 text-black"
                type="email"
                name="email"
                id="emailInput"
                value={email}
                disabled={true}
                inputMode="email"
              />
            </Row>
            <Row>
              <p className="ps-0 fs-6 fw-500 mb-2">Contraseña</p>
              <input
                required
                className="px-3 py-2 mb-3 text-black"
                type="password"
                name="password"
                id="passwordInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                inputMode="text"
              />
              <div ref={parent} className="relative w-full">
                {validPassword === false && (
                  <div className="text-red-600 text-sm relative -top-4 font-semibold border p-1 bg-red-100 rounded-md -left-3 max-sm:text-xs">
                    <span>
                      La contraseña debe contener una mayúscula, una minúscula y
                      una longitud de al menos 8 caracteres
                    </span>
                  </div>
                )}
              </div>
            </Row>

            <Row>
              <p className="ps-0 fs-6 fw-500 mb-2">Confirmar contraseña</p>
              <input
                required
                className="px-3 py-2 mb-3 text-black"
                type="password"
                name="repeatPassword"
                id="repeatPasswordInput"
                value={repeatPassword}
                onChange={(e) => {
                  setRepeatPassword(e.target.value);
                }}
                inputMode="text"
              />
            </Row>

            <Row>
              <Button
                className="bg-white fw-600 mt-3 mx-auto color-secondary border-none w-75 "
                type="submit"
                disabled={loading || !validPassword}
              >
                Crear Cuenta
              </Button>
            </Row>
          </Container>
        </Form>
      </div>
    </>
  );
};
