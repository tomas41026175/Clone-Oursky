import React from "react";
import ProductsTool from "../../src/components/ProductsTool";
import styled from "styled-components";

const StyledProductsSection = styled.div`
  .Products {
    margin: 0 auto;
    background: ffffff;
    height: 646px;
  }

  .Products .container {
    width: 1000px;
    height: 588px;
    margin: 0 auto;
    padding: 100px 0 120px;
    display: flex;
    justify-content: space-between;
  }

  .Products .container .text {
    width: 480px;
    height: 305px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 15px 0;
  }
  .Products .container .services_box {
    width: 480px;
    height: 340px;
    padding: 30px;
  }
  .Products .container .text a {
    margin: 0;
  }

  .Products .container .services_box ul {
    height: 100%;
    padding: 15px 0;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ProductsSection = () => {
  return (
    <StyledProductsSection>
      <section className="Products">
        <div className="container">
          <ProductsTool>Products</ProductsTool>
          <div className="text">
            <h3>We’re your low-code solution for your next IT project.</h3>

            <p>
              We develop various open-source solutions that can be used by
              developers and organizations around the world to solve problems.
            </p>

            <p>
              At the heart of Oursky is the art of software engineering:
              translating expertise and ideas into opportunities.
            </p>
          </div>
        </div>
      </section>
    </StyledProductsSection>
  );
};

export default ProductsSection;
