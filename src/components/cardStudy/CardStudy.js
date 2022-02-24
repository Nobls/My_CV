import React from 'react';
import styleCardStudy from './CardStudy.module.css'

const CardStudy = (props) => {
    const {id, nameEng, nameRu, specialityEng, specialityRu, yearsOfStudy, lang,} = props
    return (
            <div >
                <h5 className={styleCardStudy.titleCardStudy}>{nameEng}</h5>
                <p className={styleCardStudy.specialityCardStudy}>{specialityEng} ({yearsOfStudy})</p>
            </div>
    );
};

export default CardStudy;