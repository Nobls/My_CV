import React from 'react';
import styleNav from './Nav.module.css'
import {Link} from "react-scroll";
import {Switch} from "antd";

const Nav = (props) => {
    const {lang, setLang, themes, setThemes} = props

    const changeLangHandler = () => {
      setLang(!lang)
    }

    const changeThemesHandler  = ()=>{
        setThemes(!themes)
    }

    const navItem = [
        {
            key: 1,
            id: 'home',
            titleEng: 'Home',
            titleRu: 'Главная',
            href: 'App.js',
        },
        {
            key: 1,
            id: 'about',
            titleEng: 'About me',
            titleRu: 'Обо мне',
            href: 'About.js',
        },
        {
            key: 2,
            id: 'skills',
            titleEng: 'Skills',
            titleRu: 'Навыки',
            href: 'Skills.js',
        },
        {
            key: 3,
            id: "project",
            titleEng: 'Projects',
            titleRu: 'Проекты',
            href: 'Projects.js',
        },
        {
            key: 4,
            id: "contacts",
            titleEng: 'Contacts',
            titleRu: 'Контакты',
            href: 'Contacts.js',
        },
    ]
    return (
        <div className={` ${styleNav.nav}`}>
            <ul className={styleNav.list}>
                {
                    navItem.map(m => {
                        return (
                            <li key={m.key}>
                                {lang ?
                                    <>
                                        <Link
                                            className={styleNav.navLink}
                                            activeClass={styleNav.active}
                                            to={m.id}
                                            spy={true}
                                            smooth={true}
                                        >
                                            {m.titleEng}
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <Link
                                            className={styleNav.navLink}
                                            activeClass={styleNav.active}
                                            to={m.id}
                                            spy={true}
                                            smooth={true}
                                        >
                                            {m.titleRu}
                                        </Link>
                                    </>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <Switch checkedChildren="Eng"
                    unCheckedChildren="Ru"
                    defaultChecked
                    onChange={changeLangHandler}
                    className={styleNav.langBtn}
            />
            <Switch checkedChildren="Dark"
                    unCheckedChildren="Light"
                    defaultChecked
                    onChange={changeThemesHandler}
                    className={styleNav.langBtn}
            />
        </div>
    );
};

export default Nav;