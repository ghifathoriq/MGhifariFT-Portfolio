/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="containerAbout">
        <div className="bgTitleAboutme">
          <span className="titleAboutme">ABOUT ME</span>
          <span className="titleAboutme">ABOUT ME</span>
          <span className="titleAboutme">ABOUT ME</span>
        </div>

        <span className="boxAboutText">
          <div className="aboutContent">
            <div className="wrapperBgText">
              <span className="bgTextAbout">forntend engineer</span>
              <span className="bgTextAbout">backend engineer</span>
              <span className="bgTextAbout">fullstack engineer</span>
            </div>
            <div className="wrapperTextAbout">
              <p className="textAbout">
                I am someone who is very interested in engineering. Within me,
                there is a deep love for being an engineer. I enjoy the
                challenge and excitement of solving problems and creating
                innovative technical solutions.
              </p>
              {/* <p className="textAbout">
                Saya adalah seseorang yang sangat tertarik dengan bidang teknik.
                Dalam diri saya, terdapat kecintaan yang mendalam terhadap
                menjadi seorang engineer. Saya menikmati tantangan dan
                kegembiraan dalam memecahkan masalah serta menciptakan solusi
                teknis yang inovatif.
              </p> */}
              <a className="cta-work" href="#work" rel="noopener noreferrer">
                See Our Work <i className="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </span>
      </div>
    </section>
  );
};

export default About;
