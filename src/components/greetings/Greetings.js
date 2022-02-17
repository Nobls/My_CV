import React from 'react';
import styleGreetings from './Greetings.module.css'
import style from '../../common/styles.module.css'
import {Link} from "react-scroll";
import Social from "../social/Social";
/*import photo from '../../images/photo.jpg'*/

const Greetings = (props) => {
    const {lang, themes} = props

    const social = [
        {id:1, image:'', title:'LinkedIn',description:'+375-(29)-111-11-11'},
        {id:2, image:'', title:'Facebook',description:'+375-(29)-111-11-11'},
        {id:3, image:'', title:'Telegram',description:'+375-(29)-111-11-11'},
        {id:4, image:'', title:'Instagram',description:'+375-(29)-111-11-11'}
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
                           {/* <img className={styleGreetings.photo} src={photo} alt="photo"/>*/}
                        </div>
                        <button className={styleGreetings.greetingBtn}><Link to={'skills'} spy={true} smooth={true}>See Who I'M</Link></button>
                    </>
                    :
                    <>
                        <div >
                            <h1>Превет,<br/>Я Сергей Веретило и<br/><div className={styleGreetings.changeText} style={{color:'#dc965a'}}>Я Фронт-Энд Разработчик</div></h1>
                        </div>
                        <div>
                            {/*<img className={styleGreetings.photo} src={photo} alt="photo"/>*/}
                        </div>
                        <button className={styleGreetings.greetingBtn}><Link to={'skills'} spy={true} smooth={true}>Посмотрите, кто я</Link></button>
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
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Greetings;