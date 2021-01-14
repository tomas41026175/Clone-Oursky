import React from "react";
import CaseStudyText from "../../src/components/CaseStydyText";
import styled from "styled-components";

const StyledCaseStudySection = styled.div`
  .caseStudy {
    margin: 0 auto;
    background: white;
    height: 590px;
  }

  .caseStudy .container {
    width: 1000px;
    height: 712px;
    margin: 0 auto;
    padding: 50px 0 120px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .caseStudy .container .box {
    width: 313px;
    height: 440px;
    border-radius: 10px;
    margin: 0 10px;
    color: white;
  }
  .caseStudy .container .box_a {
    background: url(https://www.oursky.com/assets/img/index-17-asos.png)
      no-repeat;
    background-position: center;
    background-size: cover;
  }
  .caseStudy .container .box_b {
    background: url("https://www.oursky.com/assets/img/index-17-jplayer.png")
      no-repeat;
    background-position: center;
    background-size: cover;
  }
  .caseStudy .container .box_c {
    background: url("https://www.oursky.com/assets/img/oursky-gif-wp.gif")
      no-repeat;
    background-position: center;
    background-size: cover;
  }

  .caseStudy .container .box .text {
    width: 258px;
    height: 364px;
    padding: 28px;
  }

  .caseStudy .container .box a {
    display: block;
    width: 230px;
    height: 28px;
    font-size: 15px;
  }

  .caseStudy .container .box span {
    display: block;
    width: 230px;
    height: 39px;
    font-size: 26px;
    padding-bottom: 8px;
  }
  .caseStudy .container .box p {
    display: block;
    width: 230px;
    height: 84px;
    font-size: 15px;
  }

  .caseStudy .container .explore_more {
    position: absolute;
    top: 460px;
    font-size: 21px;
    padding: 50px 0;
  }

  .caseStudy .container .explore_more a {
    color: #007bff;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const CaseStudySection = () => {
  return (
    <StyledCaseStudySection>
      <section className="caseStudy">
        <div className="container">
          <div className="box box_a">
            <CaseStudyText title="ASOS">
              We helped ASOS create a browsing experience where 4,000 new
              fashion items are published weekly.
            </CaseStudyText>
          </div>
          <div className="box box_b">
            <CaseStudyText title="Jamn PLAYER">
              We teamed up with Jamn by MiQ Limited to build the next iteration
              of an award-winning iOS music app.
            </CaseStudyText>
          </div>
          <div className="box box_c">
            <CaseStudyText title="Wilson Parking">
              We worked with Wilson Parking to complement its digital
              transformation by revamping their mobile apps.
            </CaseStudyText>
          </div>
          <div className="explore_more">
            <a href="https://www.oursky.com/case-studies/">
              Explore more of our work
            </a>
          </div>
        </div>
      </section>
    </StyledCaseStudySection>
  );
};

export default CaseStudySection;
