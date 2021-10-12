import React from 'react';
import { Image } from 'antd'
import './Project.scss';
import standard from '../../assets/images/standard.png'
import payable from '../../assets/images/payable.png'
import exchange from '../../assets/images/exchange.png'

const Project = () => (
  <div className='project-container'>
    <div className='description'>
      <div className='inside'>
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
    <div className='parallax' />
    <div className='features'>
      <div className='feature'>
        <Image
          src={standard}
          preview={false} />
        <p>Anim in labore velit quis mollit pariatur irure exercitation.
          Lorem Lorem incididunt dolore aute. Reprehenderit tempor non esse ipsum ea occaecat
          dolore sunt magna fugiat adipisicing. Aute nulla duis amet ea est nulla dolor ad.
        </p>
      </div>
      <div className='feature'>
        <Image
          src={payable}
          preview={false} />
        <p>Anim in labore velit quis mollit pariatur irure exercitation.
          Lorem Lorem incididunt dolore aute. Reprehenderit tempor non esse ipsum ea occaecat
          dolore sunt magna fugiat adipisicing. Aute nulla duis amet ea est nulla dolor ad.
        </p>
      </div>
      <div className='feature'>
        <Image
          src={exchange}
          preview={false} />
        <p>Anim in labore velit quis mollit pariatur irure exercitation.
          Lorem Lorem incididunt dolore aute. Reprehenderit tempor non esse ipsum ea occaecat
          dolore sunt magna fugiat adipisicing. Aute nulla duis amet ea est nulla dolor ad.
        </p>
      </div>
    </div>
  </div>
);

export default Project;
