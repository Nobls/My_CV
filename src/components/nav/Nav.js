import React, {useState} from 'react';
import styleNav from './Nav.module.css'
import {Link} from "react-scroll";
import {Switch} from "antd";

const Nav = (props) => {
    const {lang, setLang, themes, setThemes, menuActive, setMenuActive,} = props

    const changeLangHandler = () => {
        setLang(!lang)
    }

    /*const changeThemesHandler  = ()=>{
        setThemes(!themes)
    }*/

    const navItem = [
        {
            key: 1,
            id: 'home',
            titleEng: 'Home',
            titleRu: 'Главная',
            href: 'App.js',
        },
        {
            key: 2,
            id: 'about',
            titleEng: 'About me',
            titleRu: 'Обо мне',
            href: 'About.js',
        },
        {
            key: 3,
            id: 'skills',
            titleEng: 'Skills',
            titleRu: 'Навыки',
            href: 'Skills.js',
        },
        {
            key: 4,
            id: "project",
            titleEng: 'Projects',
            titleRu: 'Проекты',
            href: 'Projects.js',
        },
        {
            key: 5,
            id: "contacts",
            titleEng: 'Contacts',
            titleRu: 'Контакты',
            href: 'Contacts.js',
        },
    ]
    return (
        <>
            <div className={menuActive ? `${styleNav.navActive}` : `${styleNav.nav}`} id='activeNav'>
                <ul className={styleNav.list}>
                    {
                        navItem.map(m => {
                            return (
                                <li key={m.key}>
                                    <Link
                                        className={styleNav.navLink}
                                        activeClass={styleNav.active}
                                        to={m.id}
                                        spy={true}
                                        smooth={true}
                                        onClick={() => (setMenuActive(false))}
                                    >
                                        {lang ? m.titleEng : m.titleRu}
                                    </Link>

                                </li>
                            )
                        })
                    }
                </ul>
                <Switch checkedChildren="Ru"
                        unCheckedChildren="Eng"
                        defaultChecked
                        onChange={changeLangHandler}
                        className={styleNav.langBtn}
                />
                {/*<Switch checkedChildren="Dark"
                    unCheckedChildren="Light"
                    defaultChecked
                    onChange={changeThemesHandler}
                    className={styleNav.langBtn}
            />*/}
            </div>
            <button className={styleNav.burgerButton} onClick={() => (setMenuActive(!menuActive))} id='navBtn'>
                <span>

                </span>
            </button>
        </>

    );
};

export default Nav;