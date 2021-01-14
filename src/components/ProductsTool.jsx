import React from "react";
import IntroductionContext from "./IntroductionContext";
import styled from "styled-components";

const StyledProductsTool = styled.div`
  .services_box {
    width: 480px;
    height: 445px;
    background: #fff;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.05);
    padding: 30px;
    border-radius: 8px;
  }

  .services_box h5 {
    color: #232323;
    font-family: "Red Hat Display", sans-serif;
  }

  .services_box ul {
    padding-top: 20px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .services_box ul li {
    list-style: none;
    width: 410px;
    display: flex;
    justify-content: space-between;
  }
  .services_box ul li span {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 0.2rem;
    font-weight: 800;
  }

  .services_box ul li img {
    width: 40px;
    height: 40px;
    box-sizing: inherit;
  }
`;

const ProductsTool = (props) => {
  const { children } = props;
  return (
    <StyledProductsTool>
      <div className="services_box">
        <h5>{children}</h5>
        <ul>
          <IntroductionContext
            img="https://www.oursky.com/assets/img/icon-dev.svg"
            title="Digital Product Development"
            text="DigDigitalProductDevelopmentopment"
          />
          <IntroductionContext
            img="https://www.oursky.com/assets/img/icon-authgear.webp"
            title="Digital Product Development"
            text="DigDigitalProductDevelopmentopment"
          />
          <IntroductionContext
            img="https://www.oursky.com/assets/img/icon-gesprek.webp"
            title="Digital Product Development"
            text="DigDigitalProductDevelopmentopment"
          />
        </ul>
      </div>
    </StyledProductsTool>
  );
};

export default ProductsTool;
