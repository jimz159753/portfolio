import React from 'react'
import { Image } from 'antd';
import web from '../../assets/images/web.png'
import mobile from '../../assets/images/mobile.png'
import design from '../../assets/images/design.png'
import './Skills.scss';

const Skills = () => {
    return (
        <div className='skills-content'>
            <h1>Main Skills</h1>
            <div className='skills'>
                <div className='each'>
                    <Image
                        src={web}
                        preview={false}
                    />
                    <b>Web Development</b>
                    <p> Development Build websites and web apps
                        using javascript and it's frameworks.
                    </p>
                </div>
                <div className='each'>
                    <Image
                        src={mobile}
                        preview={false}
                    />
                    <b>Mobile Development</b>
                    <p>
                        Development Build android & IOS apps,
                        problem solving.
                    </p>
                </div>
                <div className='each'>
                    <Image
                        src={design}
                        preview={false}
                    />
                    <b>Web and user interface design</b>
                    <p>
                        Design Websites, web
                        experiences.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Skills;