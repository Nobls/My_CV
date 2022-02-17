import React, {useEffect} from 'react';
import styleHeader from './Header.module.css'
import Nav from "../nav/Nav";
import logo from '../../images/logo/logo.svg'
import {Link} from "react-scroll";


const Header = (props) => {

    const {lang, setLang, themes, setThemes} = props

    useEffect(() => {
        window.onscroll = function () {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("header").style.height = "65px";
                document.getElementById("header").style.backgroundColor = 'rgb(28,29,36)';
            } else {
                document.getElementById("header").style.height = "100px";
                document.getElementById("header").style.backgroundColor = "inherit";
            }
        }
    })

    return (
        <div>
            <div className={styleHeader.header} id='header'>
                <div>
                    <Link to={'home'} spy={true} smooth={true}><img className={styleHeader.logo} src={logo} alt="logo"/></Link>
                    {/*<img className={styleHeader.logo} src={logo} alt="logo"/>*/}
                </div>
                <Nav lang={lang} setLang={setLang} themes={themes} setThemes={setThemes}/>
            </div>
        </div>

    );
};

export default Header;