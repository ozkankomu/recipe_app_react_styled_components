import React from "react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { Card, Footerr } from "../styles/Form";

const Footer = () => {
  return (
    <Footerr>
      <div>Copyright {new Date().getFullYear()}</div>
      <div>Created with Styled-Components-React</div>
      <Card>
        <a href="https://www.linkedin.com/in/ozkankomu/">
          <GrLinkedin />
        </a>
        <a href="https://github.com/ozkankomu">
          <GrGithub />
        </a>
        <a href="https://ozkankom35@gmail.com">
          <GrMail />
        </a>
      </Card>
    </Footerr>
  );
};

export default Footer;
