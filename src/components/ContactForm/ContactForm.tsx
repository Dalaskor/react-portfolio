import React from 'react';
import style from './ContactForm.module.scss';
import {PrimBtn} from "../UI/PrimBtn";

export const ContactForm = () => {
    return (
        <div className={style.contact}>
            <form className={style.contact__form}>
                <div className={style.contact__body}>
                    <div className={style.contact__inner}>
                        <input className={style.contact__name} type="text" placeholder={"Name"}/>
                        <input className={style.contact__email} type="email" placeholder={"Email"}/>
                    </div>
                    <input className={style.contact__title} type="text" placeholder={"Title"}/>
                    <textarea className={style.contact__message} placeholder={"Message"}></textarea>
                </div>
                <PrimBtn btnText={"Send"} onClick={() => {}}/>
            </form>
        </div>
    )
}