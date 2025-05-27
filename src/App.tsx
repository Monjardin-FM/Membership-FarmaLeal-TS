import { useAutoAnimate } from "@formkit/auto-animate/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { LandingPage, UserPage } from "./pages";
import "./styles/_styles.scss";
import "./index.css";
import { MembershipVIP } from "./pages/MembershipVIP";
import { ShopifyPaymentSection } from "./pages/ShopifyPaymentSection";
import { Referenced } from "./pages/Referenced/Referenced";
import { ReferencedInfo } from "./pages/Referenced/ReferencedInfo";
import { Reactivation } from "./pages/Reactivation/Reactivation";

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
        {/* <NavBar /> */}
        <div className="routes-wrapper-animate mb-10 max-sm:mb-5" ref={appRef}>
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/membresiaClubFarmaleal" Component={LandingPage} />
            <Route path="/verificationmembership/" Component={UserPage} />
            <Route path="/membership-VIP" Component={MembershipVIP} />
            <Route path="/payment-shopify" Component={ShopifyPaymentSection} />
            <Route path="/referenced" Component={Referenced} />
            <Route path="/referenced-info" Component={ReferencedInfo} />
            <Route path="/reactivation" Component={Reactivation} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Container>
    </>
  );
}

export default App;
