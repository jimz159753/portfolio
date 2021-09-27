import React from "react";
import { Image } from "antd";
import "./Technologies.scss";
import git from "../../assets/images/git.png";
import jira from "../../assets/images/jira.png";
import react from "../../assets/images/react.png";
import react_native from "../../assets/images/react_native.png";
import mongo from "../../assets/images/mongo.png";
import node from "../../assets/images/node.png";
import redux from "../../assets/images/redux.png";
import graphql from "../../assets/images/graphql.png";

const Technologies = () => {
  return (
    <div className="technologies-container">
      <p>Technologies I've used so far</p>
      <div className="techs">
        <Image src={react} preview={false} />
        <Image src={node} preview={false} />
        <Image src={git} preview={false} />
        <Image src={redux} preview={false} />
        <Image src={mongo} preview={false} />
      </div>
    </div>
  );
};

export default Technologies;
