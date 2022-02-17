import React from 'react';
import styleSkills from './Skills.module.css'
import style from '../../common/styles.module.css'
import SkillCard from "../skillCard/SkillCard";
import reactIcon from '../../images/imagesSkills/reactImg.png'
import jsIcon from '../../images/imagesSkills/js.png'
import htmlIcon from '../../images/imagesSkills/html.png'
import cssIcon from '../../images/imagesSkills/css.png'


const Skills = () => {
    const allSkills = [
        {
            id: 1,
            image: htmlIcon,
            imageModal:htmlIcon,
            title: 'HTML',
            description: 'HTML',
            descriptionModal:'HTML ZAEBOK'
        },
        {
            id: 2,
            image: reactIcon,
            imageModal:reactIcon,
            title: 'React',
            description: 'React',
            descriptionModal:'React ZAEBOK'
        },
        {
            id: 3,
            image: cssIcon,
            imageModal:cssIcon,
            title: 'CSS',
            description: 'CSS',
            descriptionModal:'CSS ZAEBOK'
        },
        {
            id: 4,
            image: jsIcon,
            imageModal:jsIcon,
            title: 'JS',
            description: 'JS',
            descriptionModal:'JS ZAEBOK'
        },

    ]
    return (
        <div className={styleSkills.skillsBg} id={'skills'}>
            <div className={`${styleSkills.skills} ${style.container}`}>
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

    );
};

export default Skills;