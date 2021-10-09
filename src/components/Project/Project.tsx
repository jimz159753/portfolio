import React from 'react';
import { Image } from 'antd';
import inicont from '../../assets/images/inicont.png';
import './Project.scss';

const Project = () => (
  <div className='project-container'>
    <div className='description'>
      <div>
        <h1>PROJECT</h1>
        <p>Incididunt consequat eu reprehenderit
          mollit id excepteur voluptate ex laboris.
          Duis proident nulla cupidatat veniam dolor
          cillum amet veniam in id minim.
          mollit id excepteur voluptate ex laboris.
          Duis proident nulla cupidatat veniam dolor
          cillum amet veniam in id minim.
          mollit id excepteur voluptate ex laboris.
          Duis proident nulla cupidatat veniam dolor
          cillum amet veniam in id minim.
          mollit id excepteur voluptate ex laboris.
          Duis proident nulla cupidatat veniam dolor
          cillum amet veniam in id minim.
          mollit id excepteur voluptate ex laboris.
          Duis proident nulla cupidatat veniam dolor
          cillum amet veniam in id minim.
          Elit commodo ut excepteur ea nisi culpa enim.</p>
      </div>
    </div>
    <Image src={inicont} preview={false} />
  </div>
);

export default Project;
