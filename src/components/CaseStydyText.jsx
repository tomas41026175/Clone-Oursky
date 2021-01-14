import React from "react";

const CaseStudyText = (props) => {
  const { title, children } = props;

  return (
    <div className="text">
      <a>CASE STUDY</a>
      <span>{title}</span>
      <p>{children}</p>
    </div>
  );
};

export default CaseStudyText;
