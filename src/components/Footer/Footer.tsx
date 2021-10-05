import React from "react";
import { Image } from "antd";
import "./Footer.scss";
import facebook from "../../assets/images/facebook.png";
import insta from "../../assets/images/insta.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>logo</div>
      <div className="logos">
        {/* <Image src={facebook} preview={false} />
        <Image src={linkedin} preview={false} />
        <Image src={insta} preview={false} />
        <Image src={github} preview={false} /> */}
      </div>
      <p>Copyright © 2021 Othman. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
