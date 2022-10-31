import React, {useState} from 'react';
import style from './Header.module.scss'
import {Logo} from "../Logo/Logo";
import {Navbar} from "../Navbar/Navbar";
import {useScrollLock} from "../../hooks/useScrollLock";

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const {lockScroll, unLockScroll} = useScrollLock();

    const burgerClickHandle = () => {
        const menuState = !openMenu;
        setOpenMenu(menuState);

        if(menuState) {
            lockScroll();
        } else {
            unLockScroll();
        }
    }

    const navLinkClickHandle = () => {
        setOpenMenu(false);
        unLockScroll();
    }

    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <Logo/>
                <Navbar isShowMenu={openMenu} clickHandle={navLinkClickHandle}/>
                <div className={style.header__burger} onClick={burgerClickHandle}>
                    {!openMenu &&
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="1" fill="#D9D9D9"/>
                        <rect y="7" width="24" height="1" fill="#D9D9D9"/>
                        <rect y="14" width="24" height="1" fill="#D9D9D9"/>
                    </svg>}
                    {openMenu &&
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="16.9706" width="24" height="1" transform="rotate(-45 0 16.9706)" fill="#D9D9D9"/>
                        <rect x="0.707108" width="24" height="1" transform="rotate(45 0.707108 0)" fill="#D9D9D9"/>
                    </svg>}
                </div>
            </div>
        </header>
    )
}