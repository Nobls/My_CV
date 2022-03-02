import React from 'react';
import style from '../../common/styles.module.css'
import styleFooter from './Footer.module.css'
import Social from "../social/Social";
import linkedin from "../../images/icons/linkedin.svg";
import telegram from "../../images/icons/telegram.svg";
import instagram from "../../images/icons/instagram.svg";
import vk from "../../images/icons/vk.svg";


const Footer = () => {

    const social = [
        {id:1, image:linkedin,href:'https://www.linkedin.com/feed/'},
        {id:2, image:telegram,href:'https://t.me/Noblls'},
        {id:3, image:instagram,href:'https://www.instagram.com/sergikon/'},
        {id:4, image:vk,href:'https://vk.com/id41270801'},
    ]

    return (
        <div className={styleFooter.footerBg} id={'contacts'}>
            <div className={style.container}>
                <div className={styleFooter.footer}>
                    <div className={styleFooter.footerItem}>
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

                    <div>
                        © 2022 copyright SV all right reserved
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;