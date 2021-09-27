import React from "react";
import { Image } from "antd";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My latest projects</h1>
      <p>Here are a few projects I've worked on recently.</p>
      <div>
        <Image
          src={
            "https://wwwhatsnew.com/wp-content/uploads/2020/10/codigo-730x411.jpg"
          }
          preview={false}
        />
        <Image
          src={
            "https://wwwhatsnew.com/wp-content/uploads/2020/10/codigo-730x411.jpg"
          }
          preview={false}
        />
        <Image
          src={
            "https://wwwhatsnew.com/wp-content/uploads/2020/10/codigo-730x411.jpg"
          }
          preview={false}
        />
        <Image
          src={
            "https://wwwhatsnew.com/wp-content/uploads/2020/10/codigo-730x411.jpg"
          }
          preview={false}
        />
        <Image
          src={
            "https://wwwhatsnew.com/wp-content/uploads/2020/10/codigo-730x411.jpg"
          }
          preview={false}
        />
        <Image
          src={
            "https://wwwhatsnew.com/wp-content/uploads/2020/10/codigo-730x411.jpg"
          }
          preview={false}
        />
      </div>
    </div>
  );
};

export default Projects;
