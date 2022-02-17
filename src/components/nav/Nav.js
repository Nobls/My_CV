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
        {key: 1, id: 'home', title: 'Home', href: 'App.js'},
        {key: 2, id: 'skills', title: 'Skills', href: 'Skills.js'},
        {key: 3, id: "project", title: 'Projects', href: 'Projects.js'},
        {key: 4, id: "contacts", title: 'Contacts', href: 'Contacts.js'}
    ]
    return (
        <div className={` ${styleNav.nav}`}>
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
                                >
                                    {m.title}
                                </Link>
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