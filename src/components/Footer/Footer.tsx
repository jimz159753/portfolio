import React from "react";
import "./Footer.scss";
import { Image } from "antd";
import refactor from '../../assets/images/refactor.png'

const Footer = () => {
  return (
    <div className="footer-container">
      <Image src={refactor} preview={false} />
      <p>Copyright © 2021. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
