import React from "react";
import Tilt from "react-parallax-tilt";
import brainstorm from "./brainstorm.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        style={{ height: "150px", width: "150px" }}
        perspective="150"
      >
        <div
          className="pa3"
          style={{
            height: "150px",
          }}
        >
          <img style={{ paddingTop: "5px" }} src={brainstorm} alt="logo-pic" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
