import React from 'react';
import style from '../../common/styles.module.css'
import styleFooter from './Footer.module.css'
import Contact from "../contacts/Contact";
import Social from "../social/Social";

const Footer = () => {

    const contacts = [
        {id:1, image:'', title:'Phone',description:'+375-(29)-111-11-11'},
        {id:2, image:'', title:'E-mail',description:'Sv@gmail.com'},
        {id:3, image:'', title:'Address',description:'Mink'}
    ]

    const social = [
        {id:1, image:'', title:'LinkedIn',description:'+375-(29)-111-11-11'},
        {id:2, image:'', title:'Facebook',description:'+375-(29)-111-11-11'},
        {id:3, image:'', title:'Telegram',description:'+375-(29)-111-11-11'},
        {id:4, image:'', title:'Instagram',description:'+375-(29)-111-11-11'}
    ]

    return (
        <div className={styleFooter.footerBg}>
            <div className={`${style.container} ${styleFooter.footer}`}>
                <div>
                    {
                        contacts.map(m=>{
                            return(
                                <Contact
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

        </div>
    );
};

export default Footer;