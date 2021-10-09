import React from 'react';
import { Image } from 'antd';
import './Projects.scss';
import inicont from '../../assets/images/inicont.png';

const Projects = () => (
  <div id="projects" className="projects-container">
    <h1>My latest projects</h1>
    <p>Here are a few projects I've worked on recently.</p>
    <div className="projects">
      <Image
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        src={inicont}
        preview={false}
      />

      <Image
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        src={inicont}
        preview={false}
      />

      <Image
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        src={inicont}
        preview={false}
      />
    </div>
  </div>
);

export default Projects;
