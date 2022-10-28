import React from 'react';
import style from './Footer.module.scss';
import {Logo} from "../Logo/Logo";
import gitHubIcon from "../../assets/img/icons/github.svg";
import discordIcon from "../../assets/img/icons/discord.svg";
import telegramIcon from "../../assets/img/icons/telegram.svg";
import linkedInIcon from "../../assets/img/icons/linkedin.svg";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.footer__row}>
                    <div className={style.footer__left}>
                        <div className={style.footer__header}>
                            <Logo/>
                            <p className={style.footer__email}>dalas.prog@gmail.com</p>
                        </div>
                        <div className={style.footer__body}>
                            Frontend developer based in Russia
                        </div>
                    </div>
                    <div className={style.footer__right}>
                        <div className={style.footer__header}>
                            Media
                        </div>
                        <div className={style.footer__body}>
                            <ul className={style.footer__links}>
                                <li><a href="#" className={style.footer__link}>
                                    <img src={gitHubIcon} alt="GitHub Icon"/>
                                </a></li>
                                <li><a href="#" className={style.footer__link}>
                                    <img src={discordIcon} alt="Discord Icon"/>
                                </a></li>
                                <li><a href="#" className={style.footer__link}>
                                    <img src={telegramIcon} alt="Telegram Icon"/>
                                </a></li>
                                <li><a href="#" className={style.footer__link}>
                                    <img src={linkedInIcon} alt="LinkedIn Icon"/>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.footer__row}>
                    <div className={style.footer__copyright}>
                        © Copyright 2022. Made by Dalaskor
                    </div>
                </div>
            </div>
        </footer>
    )
}