import React from "react";
import styled from "styled-components";

const StyledContactUsSection = styled.div`
  .contactUs {
    width: 100%;
    height: 300px;
    background: #263142;
  }

  .contactUs .container {
    width: 1000px;
    height: 270px;
  }

  .contactUs a {
    display: block;
    color: white;
    text-align: center;
    padding-top: 3%;
    font-size: 36px;
  }

  .contactUs p {
    color: white;
    display: block;
    text-align: center;
    font-size: 32px;
    padding-top: 1%;
    font-weight: bolder;
  }

  .contactUs .bt {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100px;
    height: 50px;
    background: #faac2b;
    color: white;
    border-radius: 10%;
    border: #faac2b;
  }
`;

const ContactUsSection = (props) => {
  const { children } = props;

  return (
    <StyledContactUsSection>
      <section className="contactUs">
        <div className="containter">
          <span>We build award-winning digital products.</span>
          <p>Oursky can help you create one.</p>
          <div className="bt">{children}</div>
        </div>
      </section>
    </StyledContactUsSection>
  );
};

export default ContactUsSection;
