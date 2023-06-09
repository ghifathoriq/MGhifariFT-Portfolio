/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./work.css";
// import workPicture from "../../assets/images/picture2.jpg";
import nodejsImg from "../../assets/images/nodejs.png";
import jsImg from "../../assets/images/JavaScript.png";
import htmlImg from "../../assets/images/html.jpg";
import cssImg from "../../assets/images/css.jpg";
import plcImg from "../../assets/images/plc.jpg";
import arduinoImg from "../../assets/images/arduino.png";
import reactjsImg from "../../assets/images/reactjs.jpg";
import mongoDBImg from "../../assets/images/mongoDB.png";
import authorImg from "../../assets/images/picture3.jpg";

const Work = () => {
  const handleNewPage4 = () => {
    window.open("https://resto-rest-seafood.ghifarithoriq.repl.co/");
  };
  const handleNewPage5 = () => {
    window.open("https://game-penghilang-gabut.ghifarithoriq.repl.co/");
  };
  const handleNewPage6 = () => {
    window.open("https://instagram.ghifarithoriq.repl.co/");
  };

  return (
    <section className="work" id="work">
      <div className="containerWork">
        <div className="workTop">
          <div className="workTitle">
            <h1 className="textTitle">Worker!</h1>
            <h1 className="textTitle">Worker!</h1>
            <h1 className="textTitle">Worker!</h1>
          </div>
          <div className="miniAboutWork">
            <img className="workPicture" src={authorImg} alt="picture work" />
            <p className="textAboutWork">
              "I am a person with an educational background in installation
              engineering electric power, but I also work as a software engineer
              full stack who are dedicated and passionate about developing
              innovative technology solutions."
            </p>
            {/* <p className="textAboutWork">
              "Saya adalah seorang dengan background pendidikan teknik instalasi
              tenaga listrik, tetapi saya juga bekerja sebagai software engineer
              full stack yang berdedikasi dan penuh semangat dalam mengembangkan
              solusi teknologi yang inovatif."
            </p> */}
          </div>
        </div>

        <div className="workBottom">
          <div className="wrapperSkill">
            <h2
              style={{
                margin: "0.5rem 0rem 0.2rem 0rem",
                textAlign: "center",
                fontSize: "1.1rem",
                cursor: "pointer",
              }}
            >
              Technology that I have learned and mastered
            </h2>
            {/* <h2>Saya cukup terampil pada teknologi berikut</h2> */}

            <div className="listTechno">
              <img
                style={{ boxShadow: "1px 1px 15px 1px rgba(0, 0, 0, 0.61)" }}
                src={nodejsImg}
                alt="node js img"
              />
              <img
                style={{ boxShadow: "1px 1px 15px 1px rgba(0, 0, 0, 0.61)" }}
                src={jsImg}
                alt="js img"
              />
              <img
                style={{ boxShadow: "1px 1px 15px 1px rgba(0, 0, 0, 0.61)" }}
                src={htmlImg}
                alt="html img"
              />
              <img
                style={{ boxShadow: "1px 1px 15px 1px rgba(0, 0, 0, 0.61)" }}
                src={cssImg}
                alt="css img"
              />
              <img
                style={{ boxShadow: "1px 1px 15px 1px rgba(0, 0, 0, 0.61)" }}
                src={plcImg}
                alt="plc img"
              />
              <img
                style={{ boxShadow: "1px 1px 15px 1px rgba(0, 0, 0, 0.61)" }}
                src={arduinoImg}
                alt="arduino img"
              />
              <img
                style={{ boxShadow: "1px 1px 15px 1px rgba(0, 0, 0, 0.61)" }}
                src={reactjsImg}
                alt="reactjs img"
              />
              <img
                style={{ boxShadow: "1px 1px 15px 1px rgba(0, 0, 0, 0.61)" }}
                src={mongoDBImg}
                alt="mongoDB img"
              />
            </div>
          </div>
          <div className="wrapperLastestWork">
            <h2
              style={{
                margin: "0.5rem 0rem 0.2rem 0rem",
                textAlign: "center",
                fontSize: "1.1rem",
                cursor: "pointer",
              }}
            >
              Current Project i've done
            </h2>
            <ul className="ul">
              <li>
                <a className="list disable" href="#">
                  Netflix Clone App <i className="uil uil-arrow-up-right"></i>
                </a>
              </li>
              <li>
                <a className="list disable" href="#">
                  Web Blog App <i className="uil uil-arrow-up-right"></i>
                </a>
              </li>
              <li>
                <a className="list disable" href="#">
                  Clone UI web ecommerce{" "}
                  <i className="uil uil-arrow-up-right"></i>
                </a>
              </li>
              <li>
                <a className="list" onClick={handleNewPage4} href="#work">
                  Company Profile Landing page{" "}
                  <i className="uil uil-arrow-up-right"></i>
                </a>
              </li>
              <li>
                <a className="list" onClick={handleNewPage5} href="#work">
                  Mini Games with JS <i className="uil uil-arrow-up-right"></i>
                </a>
              </li>
              <li>
                <a className="list" onClick={handleNewPage6} href="#work">
                  Instagram android Home Page Clone (it is recommended to <br />{" "}
                  open via smartphone){" "}
                  <i className="uil uil-arrow-up-right"></i>
                </a>
              </li>
              <li style={{ listStyleType: "none" }}>and many others..</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
