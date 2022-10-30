import React from 'react';
import style from './ContactsSection.module.scss';
import {ContactsBlock} from "../UI/ContactsBlock";
import {SectionTitle} from "../UI/SectionTitle";
import dotsDecor from "../../assets/img/decor/dots.svg";

export const ContactsSection = () => {
    return (
        <section className={style.contacts}>
            <img src={dotsDecor} className={style.contacts__decor}/>

            <div className={style.contacts__container}>
                <div className={style.contacts__header}>
                    <SectionTitle titleText={"contacts"}/>
                    <div className={style.contacts__line}></div>
                </div>
                <div className={style.contacts__body}>
                    <div className={style.contacts__left}>
                        <p>
                            I’m interested in freelance opportunities. However, if you have other request or question,
                            don’t hesitate to contact me.
                        </p>
                    </div>
                    <div className={style.contacts__right}>
                        <ContactsBlock title={'Message me here'} discord={'Dalaskor#5217'} email={"dalas.prog@gmail.com"}
                                       telegram={"@DALASKOR"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}