import React from "react";
import CoreServiceTool from "../../src/components/CoreServiceTool";
import styled from "styled-components";

const StyledCoreServicesSection = styled.div`
  .coreSerives {
    margin: 0 auto;
    background: #f3f3f3;
    height: 646px;
  }

  .coreSerives .container {
    width: 1000px;
    height: 588px;
    margin: 0 auto;
    padding: 60px 0 120px;
    display: flex;
    justify-content: space-between;
  }

  .coreSerives .container .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px;
  }
  .coreSerives .container .text a {
    margin: 0;
  }

  .coreSerives .container .text a img {
    width: 6%;
    margin-left: 2%;
  }

  .coreSerives .container .services_box ul {
    height: 100%;
    padding: 15px 0;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const CoreServicesSection = () => {
  return (
    <StyledCoreServicesSection>
      <section className="coreSerives">
        <div className="container">
          <div className="text">
            <h3>Digital transformation powered by ingenuity</h3>
            <p>
              We don’t just build apps. Oursky creates digital experiences that
              help our partners succeed in today’s fast-paced business
              landscape.
            </p>
            <p>
              We work with founders in creating their blueprints for success —
              from minimum viable products (MVPs) to interactive prototypes.
              Oursky uses an iterative approach to help startups launch faster,
              scale quickly, and deliver great user experience.
            </p>
            <p>
              Oursky partners with enterprises to fast-track their digital
              transformation, helping them adopt and transition to cloud-native
              technologies and microservices.
            </p>
            <a href="#">
              More on our core services{" "}
              <img src="https://www.oursky.com/assets/img/arrow.svg" alt="" />
            </a>
          </div>
          <CoreServiceTool>Core Services</CoreServiceTool>
        </div>
      </section>
    </StyledCoreServicesSection>
  );
};

export default CoreServicesSection;
