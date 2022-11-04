import React from "react";
import photo1 from "../../assets/photo1.png";
import Div from "./About.style";

const About = () => {
  return (
    <Div>
      <a target="_blanked" href="https://www.linkedin.com/in/ozkankomu/">
        <img src={photo1} alt="image" />
      </a>
    </Div>
  );
};

export default About;
