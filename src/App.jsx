import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUsSection from "./Sections/AboutUsSection";
import BannerSection from "./Sections/BannerSection";
import CaseStudySection from "./Sections/CaseStudySection";
import CoreServicesSection from "./Sections/CoreServicesSection";
import ProductsSection from "./Sections/ProductsSection";
import HelpCompaniesSection from "./Sections/HelpCompaniesSection";
import ContactUsSection from "./Sections/ContactUsSection";
import Footer from "./Footer";
import styled from "styled-components";
import Header from "./Header";

const StyledMain = styled.div`
  #main {
    margin: 0 auto;
    background: #123fae;
    height: 670px;
  }
`;

export default function App() {
  return (
    <body>
      <StyledMain>
        <Header />
        <div id="main">
          <BannerSection>
            We design and develop award-winning applications
          </BannerSection>
          <AboutUsSection />
          <CaseStudySection />
          <CoreServicesSection />
          <ProductsSection />
          <HelpCompaniesSection />
          <ContactUsSection>Let's go</ContactUsSection>
          <Footer />
        </div>
      </StyledMain>
    </body>
  );
}
