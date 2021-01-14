import React from "react";

const PutImage = (props) => {
  const { name, link } = props;

  return <img className={name} src={link} alt="圖片失效就顯示這段文字" />;
};

export default PutImage;
