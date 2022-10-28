import React from 'react';
import style from './Header.module.scss'
import {Logo} from "../logo/Logo";
import {Navbar} from "../Navbar/Navbar";

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <Logo/>
                <Navbar/>
            </div>
        </header>
    )
}