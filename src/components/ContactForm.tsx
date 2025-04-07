import { Button, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { useConfirmMembership } from "../hooks/use-confirm-membership";
import { Loader } from "./Loader";
import { useState, useEffect } from "react";

type ContactFormProps = {
  email: string;
  token: string;
};
export const ContactForm = ({ email, token }: ContactFormProps) => {
  const { confirmMember, loading } = useConfirmMembership();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const confirmButton = () => {
    return Swal.fire({
      title: "Cuenta creada con éxito",
      text: "Ya puedes disfrutar de los beneficios de tu membresia de Costo Farma. Revisa tu correo para la activación de tu cuenta",
      icon: "success",
      confirmButtonText: "Ok",
      confirmButtonColor: "#15A186",
    });
  };
  function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regex = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");
    const validEmail = regex.test(email);

    if (!validEmail) {
      Swal.fire("Hubo un error", "No hay un correo vinculado", "error");
      return;
    }

    try {
      const response = await confirmMember({
        token: token,
        customer: {
          first_name: name,
          last_name: lastName,
          email: email,
          phone: phone,
        },
      });

      // Si la respuesta contiene "Token inválido", mostramos el Swal de error
      if (response && response.message) {
        Swal.fire({
          title: "Error al crear la cuenta",
          text: response.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#15A186",
        });
        return; // Detener ejecución
      }

      // Verificar si hay errores en el objeto JSON
      if (response && response.errors) {
        const errorMessages = Object.entries(response.errors)
          .map(
            ([field, messages]) =>
              `<strong>${capitalize(field)}</strong>: ${(
                messages as string[]
              ).join(", ")}`
          )
          .join("<br>");

        Swal.fire({
          title: "Error al crear la cuenta",
          html: errorMessages,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#15A186",
        });

        return; // Detener ejecución
      }

      // Si no hubo errores, proceder con éxito
      const result = await confirmButton();
      if (result.isConfirmed) {
        window.location.href = "https://alcosto.farmaleal.com.mx/";
      }
    } catch (error) {
      Swal.fire({
        title: "Error inesperado",
        text: "Ocurrió un problema, intenta de nuevo.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#15A186",
      });
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
        {/* <span>{token}</span> */}
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
              <p className="ps-0 fs-6 fw-500 mb-2">Nombre(s)</p>
              <input
                required
                className="px-3 py-2 mb-3 text-black"
                type="text"
                name="name"
                id="nameInput"
                value={name}
                inputMode="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Row>
            <Row>
              <p className="ps-0 fs-6 fw-500 mb-2">Apellido</p>
              <input
                required
                className="px-3 py-2 mb-3 text-black"
                type="text"
                name="lastName"
                id="lastNameInput"
                value={lastName}
                inputMode="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Row>
            <Row>
              <p className="ps-0 fs-6 fw-500 mb-2">Teléfono</p>
              <input
                required
                className="px-3 py-2 mb-3 text-black"
                type="text"
                name="phone"
                id="phoneInput"
                value={phone}
                inputMode="text"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Row>

            <Row>
              <Button
                className="bg-white fw-600 mt-3 mx-auto color-secondary border-none w-75 "
                type="submit"
                disabled={loading}
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
