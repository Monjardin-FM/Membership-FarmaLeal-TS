import { Container } from "react-bootstrap";
import { ContactForm } from "../components";
import { useSearchParams } from "react-router-dom";

export const UserPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("mail");
  const token = searchParams.get("token");

  return (
    <section id="user_page" className="px-4 px-md-5 mb-10">
      <div className="secondary-bg rounded mx-md-3 py-4 text-white text-center align-items-center">
        <h1 className="h1 fw-700 pb-2  ">Membresía COSTO FARMA</h1>
        <Container className=" py-3 ">
          <p className="body-text fw-500 max-sm:mb-5">Creación de cuenta</p>
          <ContactForm email={email ? email : ""} token={token ? token : ""} />
        </Container>
      </div>
    </section>
  );
};
