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
import bemIcon from '../../images/icons/bem.png'
import axiosIcon from '../../images/icons/axios.png'
import materialUiIcon from '../../images/icons/materialUi.png'
import CardStudy from "../cardStudy/CardStudy";


const Skills = (props) => {
    const {lang} = props
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
        {
            id: 11,
            image: axiosIcon,
            title: 'Axios',
            description: 'BEM',
        },
        {
            id: 12,
            image: materialUiIcon,
            title: 'Material UI',
            description: 'BEM',
        },
    ]

    const placesOfStudy = [
        {
            id: 1,
            nameEng: 'Minsk Innovation University',
            nameRu: 'Минский Инновационный Университет',
            specialityEng: 'Financier',
            specialityRu: 'Финансист',
            yearsOfStudy: '2010-2015',
        },
        {
            id: 5,
            nameEng: 'IT-Incubator',
            nameRu: 'Айти Инкубатор',
            specialityEng: 'Courses of study, Front-end Developer (ReactJS)',
            specialityRu: 'Курсы обучения, Front-end разработчик (ReactJS)',
            yearsOfStudy: '2021-2022',
        },
        {
            id: 2,
            nameEng: 'Website layout course from 0 to 1',
            nameRu: 'Верстка сайта от 0 до 1',
            specialityEng: 'Markup Developer',
            specialityRu: 'Верстальщик',
            yearsOfStudy: '2021-2021',
        },
        {
            id: 4,
            nameEng: 'JavaScript v.2.0',
            nameRu: 'JavaScript v.2.0',
            specialityEng: 'Courses of study, Web application development with JavaScript',
            specialityRu: 'Курсы обучения, Разработка веб-приложений с помощью JavaScript',
            yearsOfStudy: '2021-2021',
        },
    ]

    return (
        <div className={styleSkills.skillsBg} id={'skills'}>
            <div className={`${styleSkills.skills} ${style.container}`}>
                <div className={styleSkills.skillsTitleFlex}>
                    <h3>Places of Study</h3>
                    <h3>My Skills</h3>
                </div>
                {/*{lang ?
                    <>
                        <div className={styleSkills.skillsTitleName}>
                            <h3 className={styleSkills.skillsTitle}>My Skills</h3>
                            <h5 className={styleSkills.skillsSubTitle}>
                                I applied the knowledge of these skills to the creation of my own projects <br/> and
                                those of my employers.
                            </h5>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <h3 className={styleSkills.skillsTitle}>Мои Навыки</h3>
                            <h5 className={styleSkills.skillsSubTitle}>
                                Я применял эти навыки при создании собственных проектов <br/> и проектов моих
                                работодателей.
                            </h5>
                        </div>
                    </>
                }*/}
                <div className={styleSkills.skillsItemContainer}>
                    <div className={styleSkills.cardStudyItem}>
                        {
                            placesOfStudy.map(m => {
                                return (
                                    <CardStudy
                                        key={m.id}
                                        id={m.id}
                                        nameEng={m.nameEng}
                                        nameRu={m.nameRu}
                                        specialityEng={m.specialityEng}
                                        specialityRu={m.specialityRu}
                                        yearsOfStudy={m.yearsOfStudy}
                                        lang={lang}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={styleSkills.skillsItem}>
                        {
                            allSkills.map(m => {
                                return (
                                    <SkillCard
                                        key={m.id}
                                        image={m.image}
                                        title={m.title}
                                        /*description={m.description}*/
                                    />
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Skills;