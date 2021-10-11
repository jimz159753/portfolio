import React from 'react';
import { Image } from 'antd';
import './Projects.scss';
import inicont from '../../assets/images/inicont.png';
import medical_record from '../../assets/images/medical_record.png';

const ok = [
  {
    img: inicont,
    techs: ['ReactJs', 'Redux', 'MongoDB']
  },
  {
    img: medical_record,
    techs: ['ReactJs', 'Flask', 'MongoDB']
  }
]

const Projects = () => (
  <div id="projects" className="projects-container">
    <h1>My latest projects</h1>
    <p>Here are a few projects I've worked on recently.</p>
    <div className="projects">
      {
        ok.map((el, i) => (
          <Image
            key={i}
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            src={el.img}
            preview={{
              mask: <div className='mask-container'>
                <div className='mask'>
                  <p>preview</p>
                </div>
                <p>{el.techs.join(', ')}</p>
              </div>
            }}
          />
        ))
      }
    </div>
  </div>
);

export default Projects;
