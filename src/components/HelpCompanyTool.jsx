import React from "react";
import PutImage from "./PutImage";

const HelpCompanyTool = (props) => {
  const { children } = props;
  return (
    <div className="text">
      <h4>{children}</h4>
      <ul>
        <li>
          <PutImage link="https://www.oursky.com/assets/img/logo__asos.svg" />
        </li>
        <li>
          <PutImage link="https://www.oursky.com/assets/img/logo__tr.svg" />
        </li>
        <li>
          <PutImage link="https://www.oursky.com/assets/img/logo__sc.svg" />
        </li>
        <li>
          <PutImage link="https://www.oursky.com/assets/img/logo__hlia.svg" />
        </li>
        <li>
          <PutImage link="https://www.oursky.com/assets/img/logo__ax.svg" />
        </li>
        <li>
          <PutImage link="https://www.oursky.com/assets/img/logo__wg.svg" />
        </li>
        <li>
          <PutImage link="https://www.oursky.com/assets/img/logo__cm.svg" />
        </li>
        <li>
          <PutImage link="https://www.oursky.com/assets/img/logo__hkt.svg" />
        </li>
      </ul>
    </div>
  );
};

export default HelpCompanyTool;
