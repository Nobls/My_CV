import React, {useEffect, useState} from 'react';
import styleHeader from './Header.module.css'
import Nav from "../nav/Nav";
import logo from '../../images/logo/logo.svg'
import {Link} from "react-scroll";


const Header = (props) => {

    const {lang, setLang, themes, setThemes} = props

    const [menuActive, setMenuActive] = useState(false)

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

    useEffect(() => {
        if (window.matchMedia("(max-width: 668px)").matches) {

            if (menuActive) {
                document.getElementById("header").style.height = "205px";
                document.getElementById("header").style.position = "fixed";
                document.getElementById("header").style.backgroundColor = 'rgb(28,29,36)';
            } else {
                document.getElementById("header").style.height = "65px";
                document.getElementById("header").style.backgroundColor = "rgb(28,29,36)";
            }
        }
    })



    return (
        <div>
            <div className={`${styleHeader.header}`} id='header'>
                <div>
                    <Link
                        to={'home'}
                        spy={true}
                        smooth={true}
                    >
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <Nav lang={lang}
                     setLang={setLang}
                     themes={themes}
                     setThemes={setThemes}
                     menuActive={menuActive}
                     setMenuActive={setMenuActive}
                />
            </div>
        </div>

    );
};

export default Header;