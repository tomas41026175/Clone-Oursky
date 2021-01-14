import React from "react";
import Img from "../../public/img/banner_img.png";
import PutImage from "../../src/components/PutImage";

import styled from "styled-components";

const StyledBanner = styled.div`
  .banner {
    width: 1000px;
    height: 670px;
    margin: 0 auto;
    padding-top: 130px;
    display: flex;
    justify-content: space-between;
    color: #f3f3f3;
  }
  .banner .text {
    width: 400px;
    height: 250px;
    font-weight: 600;
    font-size: 54px;
    display: inline-block;
    line-height: 62px;
    opacity: 1;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .banner img {
    width: 560px;
    height: 420px;
  }
`;

const Banner = (props) => {
  const { children } = props;
  return (
    <StyledBanner>
      <div className="banner">
        <div className="text">{children}</div>
        <PutImage link={Img} />
      </div>
    </StyledBanner>
  );
};
export default Banner;
