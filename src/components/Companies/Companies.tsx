import React from "react";
import { Image, Row, Col } from "antd";
import "./Companies.scss";
import intel from "../../assets/images/intel.png";
import tata from "../../assets/images/tata.png";
import lenovo from "../../assets/images/lenovo.png";
import itexico from "../../assets/images/itexico.png";
import improving from "../../assets/images/improving.png";
import pillarglobal from "../../assets/images/3pillarglobal.png";

const Companies = () => {
  return (
    <div id="companies" className="companies-container">
      <p>I'm proud to have collaborated with some awesome companies</p>
      <div className="companies">
        <Image src={intel} preview={false} />

        <Image src={tata} preview={false} />

        <Image src={lenovo} preview={false} />

        <Image src={itexico} preview={false} />

        <Image src={improving} preview={false} />

        <Image src={pillarglobal} preview={false} />
      </div>
    </div>
  );
};

export default Companies;
