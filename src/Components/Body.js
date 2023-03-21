import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import diri from "../Assets/WhatsApp Image 2023-03-02 at 13.54.42.jpeg";
import "../Style/Body.css";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <MDBRow id="body1" className="container-fluid">
      <MDBCol id="abu" md="8">
        <h1>ABOUT US</h1>
        <h5>
          Due to the crime rate in Bayelsa state. His Excellency Sen Douye Diri
          decided to create a state own security outfit to tackle security
          issues in the state. The Corps bill was signed into law in line with
          the state government’s commitment. The law streamlines the operations
          of the state’s security outfit, Operation Doo-Akpo, the Bayelsa State
          Volunteers and the Bayelsa Vigilante into an umbrella body. To fight
          crime in the state and the need to spread policing to the hinterlands.
        </h5>
        <Link to='Aboutus'><button id="btn-about">About us</button></Link>
      </MDBCol>
      <MDBCol id="image" md="4">
        <img src={diri} alt="" id="diri" className="img-fluid animate__animated animate__fadeInBottomRight"  />
        <h4>His Excellency Sen Douye Diri</h4>
      </MDBCol>
    </MDBRow>
  );
};
export default Body;
