import React from 'react';
import style from '../../common/styles.module.css'
import styleAbout from './About.module.css'
import photo from '../../images/photo.jpg'

const About = (props) => {
    const {lang} = props
    return (
        <section className={styleAbout.bgColor} id={'about'}>
            <div className={`${style.container} ${styleAbout.about}`}>
                <div className={styleAbout.aboutItems}>
                    <div>
                        <div>
                            <img className={styleAbout.photo} src={photo} alt="myPhoto"/>
                        </div>
                    </div>
                    <div>
                        {lang ?
                            <>
                                <div className={styleAbout.aboutInfo}>
                                    <h3 className={styleAbout.aboutTitle}>Sergei Veretilo</h3>
                                    <h5 className={styleAbout.aboutSubTitle}>Front-End Developer</h5>
                                    <p className={styleAbout.aboutDescription}>
                                        I'm frontend developer with
                                        experience in creating SPA
                                        using React, Redux,redux-Toolkit,Axios,React-Router-Dom,
                                        TypeScript, JavaScript,
                                        SCSS, HTML. Usualy
                                        i prefer to spend my leisure
                                        time on improving my
                                        English, studying new
                                        technologies and solve
                                        tasks on Codewars. Ready
                                        to consider project work
                                        and full-time employment.

                                    </p>
                                    <div className={styleAbout.aboutList}>
                                        <div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Birthday :</label>
                                                <p>16th october 1992</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Age :</label>
                                                <p>30</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Residence :</label>
                                                <p>Belarus</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Address :</label>
                                                <p>Minsk,Belarus</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>E-mail :</label>
                                                <p>sergikon92@gmail.com</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Phone :</label>
                                                <p>+375(29)163-27-03</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Telegram :</label>
                                                <p>@Noblls</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Remote work :</label>
                                                <p>Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styleAbout.aboutCV}>
                                        <a href="">Download CV</a>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className={styleAbout.aboutInfo}>
                                    <h3 className={styleAbout.aboutTitle}>Сергей Веретило</h3>
                                    <h5 className={styleAbout.aboutSubTitle}>Фронт-Енд Разработчик</h5>
                                    <p className={styleAbout.aboutDescription}>
                                        Я frontend разработчик с опытом создания SPA с использованием React,
                                        Redux,redux-Toolkit,Axios,React-Router-Dom,
                                        TypeScript, JavaScript,
                                        SCSS, HTML. Обычно я предпочитаю проводить свободное
                                        время, улучшая свой английский, изучая новые технологии и решая задачи на
                                        Codewars. Готов рассмотреть проектную работу и полную занятость.
                                    </p>
                                    <div className={styleAbout.aboutList}>
                                        <div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>День рождения :</label>
                                                <p>16 октября 1992</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Возраст :</label>
                                                <p>30</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Проживание :</label>
                                                <p>Беларусь</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Адрес :</label>
                                                <p>Минск,Беларусь</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>E-mail :</label>
                                                <p>sergikon92@gmail.com</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Телефон :</label>
                                                <p>+375(29)163-27-03</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Telegram :</label>
                                                <p>@Noblls</p>
                                            </div>
                                            <div className={styleAbout.aboutMedia}>
                                                <label>Удаленная работа :</label>
                                                <p>Доступен</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styleAbout.aboutCV}>
                                        <a href="">Скачать Резюме</a>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;