import React from "react";
import corp1 from "../Assets/diri in safty corp uni.jpeg";
import corp2 from "../Assets/community safety corp.jpeg";
import corp3 from "../Assets/safty corps graduates.jpg";
import "../Style/Aboutus.css";

const Aboutus = () => {
  return (
    <div className="about-us">
      <h2 className="title">ABOUT US</h2>
      <p>
        The Bayelsa State Community Safety Corps (BSCSC) is a security agency
        created by the government of Bayelsa State, Nigeria in 2019 to
        complement the efforts of existing security agencies in maintaining
        peace and security in the state. The agency was established to address
        the security challenges facing the state, such as cultism, armed
        robbery, kidnapping, and other criminal activities. The BSCSC is made up
        of trained personnel who are equipped with the necessary skills and
        tools to maintain law and order in the state. The corps is headed by a
        Commandant-General who oversees its operations, and is overseen by the
        Bayelsa State Ministry of Information and Orientation. The primary
        functions of the BSCSC include the protection of lives and property,
        prevention of crimes, and maintenance of peace and order in communities
        across the state. To achieve these objectives, the agency collaborates
        with other security agencies such as the Nigerian Police Force, Nigerian
        Security and Civil Defence Corps, and the Department of State Services.
        The BSCSC operates under the principle of community policing, which
        involves working closely with communities to identify and address
        security challenges. The corps has established community-based units
        across the state, with each unit comprising of members of the community
        who have been trained and equipped to assist the agency in carrying out
        its functions. The BSCSC has also developed a robust intelligence
        gathering and analysis system, which enables it to anticipate and
        prevent criminal activities in the state. The agency has deployed modern
        communication and surveillance equipment to enhance its operations, and
        also conducts regular training and capacity building programs for its
        personnel to ensure they are up-to-date with the latest security
        techniques and technologies. In summary, the Bayelsa State Community
        Safety Corps is an important security agency in Bayelsa State, which
        plays a vital role in maintaining law and order in the state. The
        agency's community-based approach to security, coupled with its modern
        equipment and well-trained personnel, has helped to reduce crime and
        improve the overall security situation in the state.
      </p>

      <section className="container">
        <h2 className="title">
          <span className="primary">Bayelsa state community safety corp</span>
        </h2>
        <div className="gallery-wrapper">
          <figure className="gallery-item">
            <img src={corp1} alt="" className="item-image1" />
            <figcaption className="item-description">
              <h2 className="name">H.E Douye Diri</h2>
              <span className="role">Governor of Bayelsa state</span>
            </figcaption>
          </figure>
          <figure className="gallery-item">
            <img src={corp2} alt="" className="item-image1" />
            <figcaption className="item-description">
              <h2 className="name">H.E Douye Diri</h2>
              <span className="role">Parrade of the corps members</span>
            </figcaption>
          </figure>
          <figure className="gallery-item">
            <img src={corp3} alt="" className="item-image1" />
            <figcaption className="item-description">
              <h2 className="name">H.E Douye Diri</h2>
              <span className="role">Saluting the Governor</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
