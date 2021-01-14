import React from "react";

const NavBtn = () => {
  return (
    <ul className="nav">
      <li className="nav_item">
        <a className="nav_link active" href="#">
          Product
        </a>
      </li>
      <li className="nav_item">
        <a className="nav_link" href="#">
          Service
        </a>
      </li>
      <li className="nav_item">
        <a className="nav_link" href="#">
          Resources
        </a>
      </li>
      <li className="nav_item">
        <a className="nav_link" href="#">
          About Us
        </a>
      </li>
      <li>
        <input
          type="button"
          value="Start you project!"
          className="nav_btn"
          href="https://www.oursky.com/enquiry/"
        />
      </li>
    </ul>
  );
};

export default NavBtn;
