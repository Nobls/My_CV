import React from 'react';
import styleSkills from './Skills.module.css'
import style from '../../common/styles.module.css'
import SkillCard from "../skillCard/SkillCard";
import reactIcon from '../../images/icons/react.png'
import jsIcon from '../../images/icons/javascript.png'
import htmlIcon from '../../images/icons/html5.png'
import cssIcon from '../../images/icons/css3.png'
import tsIcon from '../../images/icons/typescript.png'
import reduxIcon from '../../images/icons/redux.png'
import gitIcon from '../../images/icons/github.png'
import sassIcon from '../../images/icons/sass.png'
import figmaIcon from '../../images/icons/figma.png'
import bemIcon from '../../images/icons/bem.jpg'


const Skills = () => {
    const allSkills = [
        {
            id: 1,
            image: htmlIcon,
            title: 'HTML',
            description: 'HTML',
        },
        {
            id: 2,
            image: reactIcon,
            title: 'React',
            description: 'React',
        },
        {
            id: 3,
            image: cssIcon,
            title: 'CSS',
            description: 'CSS',
        },
        {
            id: 4,
            image: jsIcon,
            title: 'JS',
            description: 'JS',
        },
        {
            id: 5,
            image: tsIcon,
            title: 'TS',
            description: 'TS',
        },
        {
            id: 6,
            image: reduxIcon,
            title: 'Redux',
            description: 'Redux',
        },
        {
            id: 7,
            image: sassIcon,
            title: 'SaSS',
            description: 'SaSS',
        },
        {
            id: 8,
            image: gitIcon,
            title: 'GitHub',
            description: 'GitHub',
        },
        {
            id: 9,
            image: figmaIcon,
            title: 'Figma',
            description: 'Figma',
        },
        {
            id: 10,
            image: bemIcon,
            title: 'BEM',
            description: 'BEM',
        },
    ]
    return (
        <div className={styleSkills.skillsBg} id={'skills'}>
            <div className={`${styleSkills.skills} ${style.container}`}>
                <div>
                    <h3 className={styleSkills.skillsTitle}>My Skills</h3>
                    <h5 className={styleSkills.skillsSubTitle}>
                        I applied the knowledge of these skills to the creation of my own projects <br/> and those of my employers.
                    </h5>
                </div>
                <div className={styleSkills.skillsItem}>
                    {
                        allSkills.map(m => {
                            return (
                                <SkillCard
                                    key={m.id}
                                    image={m.image}
                                    title={m.title}
                                    description={m.description}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default Skills;