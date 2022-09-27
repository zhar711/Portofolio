import React from "react";
import "../styles/home.css";
import me from "../assets/me.jpg";
import { useNavigate } from "react-router-dom";
import cv from "../assets/CVGanjar.pdf";

const Home = () => {
  const navigate = useNavigate();

  const handleAboutme = () => {
    navigate("/detail");
  };
  return (
    <>
      <div className="card-container">
        <span className="pro">Newbie</span>
        <img className="round" style={{ width: "250px" }} src={me} alt="user" />
        <h3>Ganjar Widatama</h3>
        <h6>Bandung</h6>
        <p>front-end developer</p>

        {/* button */}
        <div className="button2" onClick={handleAboutme}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <a href="/detail">About me</a>
        </div>

        <div className="button">
          <a href={cv} download>
            Download Cv
          </a>

          <span>
            <span></span>
          </span>
        </div>
        {/* button */}

        <div className="social-container">
          <ul className="social-icons">
            <li>
              <a href="https://www.instagram.com/ganjar_96/" target="/blank">
                <i className="fa fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="https://github.com/zhar711" target="/blank2">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ganjar-widatama-95364b227/"
                target="/blank1"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
