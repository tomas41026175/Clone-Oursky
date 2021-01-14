import React from "react";

const FooterMenu = (props) => {
  const { a, b, c, d, e, f, g, children } = props;
  return (
    <div className="menu">
      <p>{children}</p>
      <ul>
        <li>
          <a href="#">{a}</a>
        </li>
        <li>
          <a href="#">{b}</a>
        </li>
        <li>
          <a href="#">{c}</a>
        </li>
        <li>
          <a href="#">{d}</a>
        </li>
        <li>
          <a href="#">{e}</a>
        </li>
        <li>
          <a href="#">{f}</a>
        </li>
        <li>
          <a href="#">{g}</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterMenu;
