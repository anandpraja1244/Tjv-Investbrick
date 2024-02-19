import React from "react";

import NavValue from "./component/NavValue";
import Home from "./component/Home";
// import Card from "./component/Card";
// import Philosophy from "./component/Philosophy";
import Footer from "./component/Footer";
import About from "./component/About";
// import Family from "./component/Services/Family";
import Asset from "./component/Services/Asset";
import Wealth from "./component/Services/Wealth";
import FundServices from "./component/Services/FundServices";
import Corporate from "./component/Services/Corporate";

import InvestorForm from "./component/InvestorForm";
import Contact from "./component/Contact";
import RealState from "./component/RealState";

import ClientLogin from "./component/ClientLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateEquity from "./component/PrivateEquity";
import Funds from "./component/Funds";
import News from "./component/News";
import ExternalRisk from "./component/ExternalRisk";
import CorporateServices from "./component/CorporateServices";
import FundAdministration from "./component/FundAdministration";
import Regulatory from "./component/Regulatory";
import Banking from "./component/Banking";
import Credit from "./component/Credit";
import Portfolio from "./component/Portfolio";
import Taxplaning from "./component/Taxplaning";
import ScrollToTop from "./component/ScrollToTop";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <NavValue />

        <Routes>
          {/* <ScrollToTop/> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          {/* <Route exact path="/Family" element={<Family />} /> */}
          <Route path="/Asset" element={<Asset />} />
          <Route path="/Wealth" element={<Wealth />} />
          <Route path="/FundServices" element={<FundServices />} />
          <Route path="/Corporate" element={<Corporate />} />
          <Route path="/InvestorForm" element={<InvestorForm />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/ClientLogin" element={<ClientLogin />} />
          <Route exact path="/RealState" element={<RealState />} />
          <Route exact path="/PrivateEquity" element={<PrivateEquity />} />
          <Route exact path="/Funds" element={<Funds />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/ExternalRisk" element={<ExternalRisk />} />
          <Route
            exact
            path="/CorporateServices"
            element={<CorporateServices />}
          />
          <Route
            exact
            path="/FundAdministration"
            element={<FundAdministration />}
          />
          <Route exact path="/Regulatory" element={<Regulatory/>} />
          <Route exact path="/Banking" element={<Banking />} />
          <Route exact path="/Credit" element={<Credit />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
          <Route exact path="/Taxplaning" element={<Taxplaning />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
