import { useAutoAnimate } from "@formkit/auto-animate/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { LandingPage, UserPage } from "./pages";
import creditCards from "./assets/img/cards1.png";
import debitCards from "./assets/img/cards2.png";
import "./styles/_styles.scss";
import "./index.css";
import { FooterModal } from "./pages/Modals/FooterModal";
import { Footer } from "./components/Footer";

declare global {
  interface Window {
    OpenPay: any;
  }
}

function App() {
  const [appRef] = useAutoAnimate<HTMLDivElement>();
  return (
    <>
      <Container fluid className="p-0 m-0 h-screen">
        <NavBar />
        <div className="routes-wrapper-animat mb-36 max-sm:mb-5" ref={appRef}>
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/membresiaClubFarmaleal" Component={LandingPage} />
            <Route path="/verificationMembership/" Component={UserPage} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default App;
