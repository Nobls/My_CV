import React from 'react';
import styleCardStudy from './CardStudy.module.css'

const CardStudy = (props) => {
    const {nameEng, nameRu, specialityEng, specialityRu, yearsOfStudy, lang,} = props
    return (
        <div>
            {lang ?
                <>
                    <div >
                        <h5 className={styleCardStudy.titleCardStudy}>{nameEng}</h5>
                        <p className={styleCardStudy.specialityCardStudy}>{specialityEng} ({yearsOfStudy})</p>
                    </div>
                </>
                :
                <>
                    <div >
                        <h5 className={styleCardStudy.titleCardStudy}>{nameRu}</h5>
                        <p className={styleCardStudy.specialityCardStudy}>{specialityRu} ({yearsOfStudy})</p>
                    </div></>
            }
        </div>
    );
};

export default CardStudy;