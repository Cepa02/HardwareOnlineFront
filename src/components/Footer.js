import React from "react";
import "../style.css";

const Footer = () => {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>HardwareOnline</h2>
            <p className="pr-5 text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis{" "}
            </p>
            <p>
              <a>
                <i className="fa fa-facebook-square mr-1"></i>
              </a>
              <a>
                <i className="fa fa-linkedin-square"></i>
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li>
                - <a>Lorem ipsum</a>
              </li>
              <li>
                - <a>Nam mauris velit</a>
              </li>
              <li>
                - <a>Etiam vitae mauris</a>
              </li>
              <li>
                - <a>Fusce scelerisque</a>
              </li>
              <li>
                - <a>Sed faucibus</a>
              </li>
              <li>
                - <a>Mauris efficitur nulla</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Ubicacion</h4>
            <p>106, Granaderos, Ciudadela</p>
            <p className="mb-0">
              <i className="fa fa-phone mr-3"></i>4488 - 3911
            </p>
            <p>
              <i className="fa fa-envelope-o mr-3"></i>
              consultas@hardwareondline.com.ar
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p className="">
              <small className="text-white-50">
                © 2020. All Rights Reserved.
              </small>
            </p>
            <h4 style={{ color: "#152f4f", fontSize: "18px" }}>
              BOCA LA CONCHA DE TU MADRE
              https://www.youtube.com/watch?v=GBRgIKXEUGU
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
