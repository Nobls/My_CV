import React from 'react';
import style from '../../common/styles.module.css'
import styleAbout from './About.module.css'
import photo from '../../images/photo.jpg'

const About = () => {
    return (
        <section className={styleAbout.bgColor} id={'about'}>
            <div className={`${style.container} ${styleAbout.about}`}>
                <div className={styleAbout.aboutItems}>
                    <div>
                        <div>
                             <img className={styleAbout.photo} src={photo} alt="photo"/>
                        </div>
                    </div>
                    <div className={styleAbout.aboutInfo}>
                        <h3 className={styleAbout.aboutTitle}>Sergei Veretilo</h3>
                        <h5 className={styleAbout.aboutSubTitle}>Front-End Developer</h5>
                        <p className={styleAbout.aboutDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quia.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quia.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quia.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quia.
                        </p>
                        <div className={styleAbout.aboutList}>
                            <div>
                                <div className={styleAbout.aboutMedia}>
                                    <label>Birthday :</label>
                                    <p>16th october 1992</p>
                                </div>
                                <div className={styleAbout.aboutMedia}>
                                    <label>Age :</label>
                                    <p>29</p>
                                </div>
                                <div className={styleAbout.aboutMedia}>
                                    <label>Residence :</label>
                                    <p>Belarus</p>
                                </div>
                                <div className={styleAbout.aboutMedia}>
                                    <label >Address :</label>
                                    <p>Minsk,Belarus</p>
                                    <label htmlFor="|"></label>
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
                </div>
            </div>
        </section>
    );
};

export default About;