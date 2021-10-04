import React from "react";
import { Image } from "antd";
import "./Footer.scss";
import facebookfooter from "../../assets/images/facebookfooter.png";
import instafooter from "../../assets/images/instafooter.png";
import githubfooter from "../../assets/images/githubfooter.png";
import linkedinfooter from "../../assets/images/linkedinfooter.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>logo</div>
      <div className="logos">
        <Image src={facebookfooter} preview={false} />
        <Image src={linkedinfooter} preview={false} />
        <Image src={instafooter} preview={false} />
        <Image src={githubfooter} preview={false} />
      </div>
      <p>Copyright © 2021 Othman. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
