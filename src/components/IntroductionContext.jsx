import React from "react";
import PutImage from "./PutImage";

const IntroductionContext = (props) => {
  const { img, title, text } = props;
  return (
    <li>
      <PutImage link={img} />
      <div className="textBox">
        <span>{title}</span> <p>{text}</p>
      </div>
    </li>
  );
};

export default IntroductionContext;
