import React from 'react';
import style from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.navbar__list}>
                <li className={style.navbar__item}>
                    <a className={style.navbar__link}>
                        <span>#</span> home
                    </a>
                </li>
            </ul>
        </nav>
    )
}