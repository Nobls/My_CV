import React from 'react';
import styleSkillCard from './SkillCard.module.css'


const SkillCard = (props) => {
    const {image, title, description}= props
    return (
        <div className={styleSkillCard.skillCardItems}>
            <div className={styleSkillCard.skillCardItem}>
                <img className={styleSkillCard.img} src={image} alt="title"/>
                <h3 className={styleSkillCard.skillCardItemTitle}>{title}</h3>
                <p>{description}</p>
            </div>
        </div>

    );
};

export default SkillCard;
