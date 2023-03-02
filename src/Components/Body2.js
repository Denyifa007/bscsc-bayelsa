import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "../Style/Body2.css";
import img1 from "../Assets/diri in safty corp uni.jpeg";
import img2 from "../Assets/diri safety corp.jpeg";
import img3 from "../Assets/communiy safty pic.jpeg";
import img4 from "../Assets/k9 safty.webp";
import img5 from "../Assets/bsc.jpeg";

const Body2 = () => {
  return (
    <MDBCarousel showControls dealy={100} className="carousel, img-fluid">
      <MDBCarouselItem
        className=" w-100 d-block"
        itemId={1}
        src={img1}
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={img2}
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={img3}
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={4}
        src={img4}
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={5}
        src={img5}
        alt="..."
      />
    </MDBCarousel>
  );
};
export default Body2;
