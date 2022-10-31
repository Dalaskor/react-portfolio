import React from 'react';
import style from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

interface NavbarProps {
    isShowMenu: boolean,
    clickHandle: () => void,
}

export const Navbar = ({isShowMenu, clickHandle}: NavbarProps) => {
    return (
        <nav className={isShowMenu ?  style.navbar_active : style.navbar}>
            <ul className={style.navbar__list}>
                <li className={style.navbar__item}>
                    <NavLink end onClick={clickHandle} to="/react-portfolio/" className={({isActive}) => isActive ? style.active : undefined}>
                        <span>#</span>home
                    </NavLink>
                </li>
                <li className={style.navbar__item}>
                    <NavLink onClick={clickHandle} to="/react-portfolio/works" className={({isActive}) => isActive ? style.active : undefined}>
                        <span>#</span>works
                    </NavLink>
                </li>
                <li className={style.navbar__item}>
                    <NavLink onClick={clickHandle} to="/react-portfolio/about" className={({isActive}) => isActive ? style.active : undefined}>
                        <span>#</span>about-me
                    </NavLink>
                </li>
                <li className={style.navbar__item}>
                    <NavLink onClick={clickHandle} to="/react-portfolio/contacts" className={({isActive}) => isActive ? style.active : undefined}>
                        <span>#</span>contacts
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}