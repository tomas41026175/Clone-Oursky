import React from "react";
import section_img from "../../public/img/section_img.png";
// import learnmore_img from "../../public/img/learnmore_img.png";
import PutImage from "../../src/components/PutImage";
import styled from "styled-components";

const StyledAboutUsSection = styled.div`
  .aboutUs {
    margin: 0 auto;
    background: #f3f3f3;
    height: 590px;
  }

  .aboutUs .container {
    width: 1000px;
    height: 588px;
    margin: 0 auto;
    padding: 180px 0 50px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .aboutUs .container img {
    width: 330px;
    height: 330px;
  }

  .aboutUs .container .more {
    background: #fff;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
    position: absolute;
    top: -30px;
    color: #263043;
    border-radius: 8px;
    width: 480px;
    left: 25%;
    height: 50px;
    display: flex;
  }

  .aboutUs .container .more h5 {
    display: block;
    width: 450px;
    font-size: 17px;
    font-weight: 400;
    padding: 4px 0 15px 6%;
  }

  .aboutUs .container .more img {
    width: 38px;
    height: 18px;
    margin: 15px 10px 0;
  }

  .aboutUs .container .more .text {
    width: 580px;
    height: 358px;
    color: black;
  }

  .aboutUs .container .text a {
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 16px;
  }

  .aboutUs .container .text p {
    display: block;
    width: 580px;
    font-size: 20px;
    line-height: 34px;
    font-weight: 400;
  }
`;

const AboutUsSection = () => {
  return (
    <StyledAboutUsSection>
      <section className="aboutUs">
        <div className="container">
          <div className="more">
            <h5>
              Learn more about how we digitally transform businesses by creat
              amazing digital profucy
            </h5>
            <img src="https://www.oursky.com/assets/img/arrow.svg" alt="" />
            {/* <PutImage link={learnmore_img} /> */}
          </div>
          <div className="text">
            <h4>About us</h4>
            <p>
              Oursky is a team of talented developers, designers, data
              scientists, product and project managers and QA engineers working
              from Hong Kong, London, and Taipei. Using cutting-edge
              technologies, we are an end-to-end digital product, web, and
              mobile app development consultancy whose creations have garnered
              millions of downloads and awards from the Apple App Store and Asia
              Smart Apps Awards.
            </p>
          </div>
          <PutImage link={section_img} />
        </div>
      </section>
    </StyledAboutUsSection>
  );
};

export default AboutUsSection;
