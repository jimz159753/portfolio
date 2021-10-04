import React from "react";
import { Image, Row, Col } from "antd";
import "./Projects.scss";
import inicont from "../../assets/images/inicont.png";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1>My latest projects</h1>
      <p>Here are a few projects I've worked on recently.</p>
      <Row justify="center" gutter={[16, 16]}>
        <Col span={8}>
          <Image
            data-aos="flip-left"
            data-aos-duration="1500"
            src={inicont}
            preview={false}
          />
        </Col>
        <Col span={8}>
          <Image
            data-aos="flip-up"
            data-aos-duration="1500"
            src={
              "https://wwwhatsnew.com/wp-content/uploads/2020/10/codigo-730x411.jpg"
            }
            preview={false}
          />
        </Col>
        <Col span={8}>
          <Image
            data-aos="flip-right"
            data-aos-duration="1500"
            src={
              "https://wwwhatsnew.com/wp-content/uploads/2020/10/codigo-730x411.jpg"
            }
            preview={false}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
