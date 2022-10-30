import React from 'react';
import style from './UI.module.scss';
import discordIcon from '../../assets/img/icons/discord.svg';
import emailIcon from '../../assets/img/icons/email.svg';
import telegramIcon from '../../assets/img/icons/telegram.svg';

interface ContactsBlockProps {
    title: string,
    discord?: string,
    email?: string,
    telegram?: string,
}

export const ContactsBlock = ({title, discord, email, telegram}: ContactsBlockProps) => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsBlock__title}>
                {title}
            </div>
            <div className={style.contactsBlock__links}>
                {discord && <div className={style.contactsBlock__link}>
                    <div className={style.contactsBlock__icon}>
                        <img src={discordIcon} alt="Discord"/>
                    </div>
                    <p>{discord}</p>
                </div>}
                {email && <div className={style.contactsBlock__link}>
                    <div className={style.contactsBlock__icon}>
                        <img src={emailIcon} alt="email"/>
                    </div>
                    <p>{email}</p>
                </div>}
                {telegram && <div className={style.contactsBlock__link}>
                    <div className={style.contactsBlock__icon}>
                        <img src={telegramIcon} alt="telegram"/>
                    </div>
                    <p>{telegram}</p>
                </div>}
            </div>
        </div>
    )
}