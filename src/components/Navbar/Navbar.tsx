import React from 'react';
import style from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.navbar__list}>
                <li className={style.navbar__item}>
                    <NavLink end to="/" className={({isActive}) => isActive ? style.active : undefined}>
                        <span>#</span>home
                    </NavLink>
                </li>
                <li className={style.navbar__item}>
                    <NavLink to="/works" className={({isActive}) => isActive ? style.active : undefined}>
                        <span>#</span>works
                    </NavLink>
                </li>
                <li className={style.navbar__item}>
                    <NavLink to="/about" className={({isActive}) => isActive ? style.active : undefined}>
                        <span>#</span>about-me
                    </NavLink>
                </li>
                <li className={style.navbar__item}>
                    <NavLink to="/contacts" className={({isActive}) => isActive ? style.active : undefined}>
                        <span>#</span>contacts
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}