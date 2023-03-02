import React from "react";
import logo3 from "../Assets/Bayelsa-21.jpg";
import "../Style/Head.css";
import corplogo from "../Assets/bylogo (1).png";

const Head = () => {
  return (
    <div>
      <div className="bg-image">
        <img src={logo3} className="logo3" alt="Sample"  />
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <h1 id="bscsc" className="text-white mb-2">
              Bayelsa State Community Safety Corp
            </h1>
            <p id="community">
              “The community corps is designed to support, partner and 
              collaborate with the <br /> statutory federal security agencies in
              efforts to rid the state of crime and criminal <br /> elements.”
            </p>
            <img src={corplogo} alt="" id="corplogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
