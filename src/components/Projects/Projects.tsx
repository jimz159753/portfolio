import React from 'react';
import { Image } from 'antd';
import './Projects.scss';
import inicont from '../../assets/images/inicont.png';
import medical_record from '../../assets/images/medical_record.png';

const Projects = () => (
  <div id="projects" className="projects-container">
    <h1>My latest projects</h1>
    <p>Here are a few projects I've worked on recently.</p>
    <div className="projects">
      <Image
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        src={inicont}

      />

      <Image
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        src={medical_record}
      />

      <Image
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        src={inicont}
      />
    </div>
  </div>
);

export default Projects;
