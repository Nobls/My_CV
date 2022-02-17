import React from 'react';
import styleGreetings from './Greetings.module.css'
import style from '../../common/styles.module.css'
import {Link} from "react-scroll";
import Social from "../social/Social";
import linkedin from '../../images/icons/linkedin.svg'
import telegram from '../../images/icons/telegram.svg'
import instagram from '../../images/icons/instagram.svg'
import vk from '../../images/icons/vk.svg'

const Greetings = (props) => {
    const {lang, themes} = props

    const social = [
        {id:1, image:linkedin,href:'https://www.linkedin.com/feed/'},
        {id:2, image:telegram,href:'https://t.me/Noblls'},
        {id:3, image:instagram,href:'https://www.instagram.com/sergikon/'},
        {id:4, image:vk,href:'https://vk.com/id41270801'}
    ]

    return (
        <div className={styleGreetings.bgColor} id={'home'}>
            <div className={`${style.container} ${styleGreetings.greetings} ${themes ? styleGreetings.dark : styleGreetings.light}`}>
                {lang ?
                    <>
                        <div>
                            <h1>Hello,<br/> I'm Sergei Veretilo a<br/><div className={styleGreetings.changeText} style={{color:'#dc965a'}}>Front - End Developer</div></h1>
                        </div>
                        <div>
                        </div>
                        <button className={styleGreetings.greetingBtn}><Link to={'about'} spy={true} smooth={true}>See Who I'M</Link></button>
                    </>
                    :
                    <>
                        <div >
                            <h1>Превет,<br/>Я Сергей Веретило и<br/><div className={styleGreetings.changeText} style={{color:'#dc965a'}}>Я Фронт-Энд Разработчик</div></h1>
                        </div>
                        <div>
                        </div>
                        <button className={styleGreetings.greetingBtn}><Link to={'about'} spy={true} smooth={true}>Посмотрите, кто я</Link></button>
                    </>
                }

            </div>
            <div className={styleGreetings.greetingSocial}>
                {
                    social.map(m=>{
                        return(
                            <Social
                                key={m.id}
                                image={m.image}
                                title={m.title}
                                description={m.description}
                                href={m.href}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Greetings;