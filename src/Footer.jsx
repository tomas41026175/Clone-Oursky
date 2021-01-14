import React from "react";
import PutImage from "../../src/components/PutImage";
import FooterMenu from "../../src/components/FooterMenu";
import Img from "../public/img/footer_img.png";
import styled from "styled-components";

const StyledFooter = styled.div`
  #footer {
    width: 100%;
    height: 586px;
    background: #232323;
  }

  .container {
    width: 1000px;
    height: 586px;
    /* display: flex; */
    padding: 40px 0 20px;
  }
  .container img {
    width: 110px;
    height: 23px;
  }
  .container .list {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    width: 588px;
    float: right;
    /* margin-left: 167px; */
  }
  .container .menu {
    color: white;
    padding: 0 10px;
  }
  .container .menu li {
    list-style: none;
    padding-bottom: 14px;
    width: 150px;
    height: 34px;
    line-height: 14px;
  }

  .container .menu li {
    font-size: 15px;
  }
  .container .menu li a {
    color: rgba(255, 255, 255, 0.75);
  }

  .contact {
    color: #888;
    width: 1000px;
    height: 20px;
    float: left;
  }
  .contact a {
    float: left;
  }
  .contact span {
    float: right;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div id="footer">
        <div className="container">
          <PutImage link={Img} />
          <div className="list">
            <FooterMenu a="Authgear" b="FormX.ai" c="Gesprek">
              Products
            </FooterMenu>
            <FooterMenu
              a="Digital Product Development"
              b="Mobile App Development"
              c="Web App Development"
              d="UI/UX and Digital Product Design"
              e="Machine Learning Solutions (Skylab.ai)"
              f="Microservices and Containerization"
            >
              Services
            </FooterMenu>
            <FooterMenu
              a="About Us"
              b="Tech Stack"
              c="Case Studies"
              d="Oursky Blog"
              e="Engineering Blog"
              f="Open-Source Projects"
            >
              Know More
            </FooterMenu>
            <FooterMenu
              a="Facebook"
              b="Linkedin"
              c="Twitter"
              d="Service Enquiry"
              e="Find Us"
              f="Join Us"
            >
              Connect
            </FooterMenu>
          </div>
          <div className="contact">
            <a>hello@oursky.com</a>
            <span>© Oursky Ltd.</span>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};
export default Footer;
