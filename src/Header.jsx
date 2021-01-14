import React from "react";
import NavBtn from "../../src/components/NavBtn";
import PutImage from "../../src/components/PutImage";
import Logo from "../public/img/Logo.png";
import styled from "styled-components";

const StyledHeader = styled.div`
  #navBar {
    width: 100%;
    height: 100px;
    flex-direction: row;
    position: fixed;
    padding: 20px 0;
    margin: 0 auto;
    background-color: #123fae;
  }
  .container {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  .logo {
    width: 125px;
    height: 25px;
    margin: 15px 0 25px;
  }
  .nav_item {
    display: flex;
    justify-content: flex-end;
  }

  .nav_item a {
    color: white;
    font-size: 20px;
    margin-right: 10px;
  }
  .btn_block {
    width: 60%;
  }
  .nav {
    /* float: right; */
  }
  .nav_btn {
    background: #faac2c;
    border: 0px;
    font-size: 22px;
    color: white;
    width: 170px;
    height: 50px;
    margin-top: -10px;
    border-radius: 10px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div id="navBar">
        <div className="container">
          <PutImage name="logo" link={Logo} />
          <div className="btn_block">
            <NavBtn />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
