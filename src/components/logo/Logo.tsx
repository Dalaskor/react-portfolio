import React from 'react';
import style from './Logo.module.scss';
import logoImg from './../../assets/img/logo.svg';
import {NavLink} from "react-router-dom";

export const Logo = () => {
    return (
        <NavLink end to={'/'} className={style.logo}>
           <div className={style.logo__image}>
               <img src={logoImg} alt="logo"/>
           </div>
            <div className={style.logo__text}>
                Dalaskor
            </div>
        </NavLink>
    )
}