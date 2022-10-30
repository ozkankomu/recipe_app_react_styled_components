import React from "react";
import { Text } from "../../styles/Form";

const About = () => {
  return (
    <div className="container text-center " style={{ height: "100vh" }}>
      <div>
        <div>
          <img
            src="../image.jpg"
            alt=""
            style={{
              borderRadius: "50%",
              width: "300px",
              boxShadow: "5px 5px 10px black",
            }}
          />
        </div>
        <Text>
          <h2>Hii I'm Ozkan</h2>
          <h4>I'm Front-End Developer</h4>
          <h4>
            I build Web-Sites by coding with
            javaScript/React/HTML/CSS/Bootstrap/
          </h4>
          <h4>Please visit my Github and LinkedIn pages</h4>
        </Text>
      </div>
    </div>
  );
};

export default About;
