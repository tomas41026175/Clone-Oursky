import React from "react";
// import PutImage from "./PutImage";
import HelpCompanyTool from "../../src/components/HelpCompanyTool";
import styled from "styled-components";

const StyledHelpCompaniesSection = styled.div`
  .HelpCompanies {
    margin: 0 auto;
    background: #f3f3f3;
    height: 563px;
  }

  .HelpCompanies .container {
    width: 1000px;
    height: 560px;
    margin: 0 auto;
    padding: 120px 0;
    font-weight: 800;
  }

  .HelpCompanies .container h4 {
    padding-bottom: 80px;
    display: flex;
    justify-content: center;
  }

  .HelpCompanies .container ul {
    width: 1000px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
  }
  .HelpCompanies .container ul li {
    width: 250px;
    height: 100px;
    list-style: none;
    margin: 10px 0;
    padding: 20px 0;
    display: flex;
  }
  .HelpCompanies .container ul li img {
    width: 94px;
    height: 80px;
  }
`;

const HelpCompaniesSection = () => {
  return (
    <StyledHelpCompaniesSection>
      <section className="HelpCompanies">
        <div className="container">
          <HelpCompanyTool>
            We help companies around the world bring their ideas to life.
          </HelpCompanyTool>
        </div>
      </section>
    </StyledHelpCompaniesSection>
  );
};

export default HelpCompaniesSection;
