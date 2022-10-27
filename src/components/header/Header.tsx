import React from 'react';
import style from './Header.module.scss'
import {Logo} from "../logo/Logo";

export const Header = () => {
    return (
        <header className={style.header}>
            <Logo />
        </header>
    )
}