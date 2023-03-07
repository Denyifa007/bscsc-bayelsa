import React from "react";
import logo3 from "../Assets/Bayelsa-21.jpg";
import "../Style/Head.css";
import corplogo from "../Assets/bylogo (1).png";

const Head = () => {
  return (
    <div className="Header">
      <div className="bg-image">
        <img src={logo3} className="logo3" alt="Sample"  />
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="head">
            <div className="Header-contents container-fluid">
              <h1 className="Header_text text-white mb-2 mt-3 animate__animated animate__heartBeat   animation-duration: 2s;">
                Bayelsa State Community Safety Corp
              </h1>
              <p className="community animate__animated animate__backInLeft">
                “The community corps is designed to support, partner and 
                collaborate with the <br /> statutory federal security agencies in
                efforts to rid the state of crime and criminal <br /> elements.”
              </p>
            </div>
            <img src={corplogo} alt="" id="corplogo"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
