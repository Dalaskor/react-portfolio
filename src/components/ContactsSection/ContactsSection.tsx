import React from 'react';
import style from './ContactsSection.module.scss';
import {ContactsBlock} from "../UI/ContactsBlock";

export const ContactsSection = () => {
    return (
        <section className={style.contacts}>
            <div className={style.contacts__container}></div>
        </section>
    )
}