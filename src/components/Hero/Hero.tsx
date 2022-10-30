import React, {useContext} from 'react';
import style from './Hero.module.scss';
import {PrimBtn} from "../UI/PrimBtn";
import profilePhoto from "../../assets/img/photos/profile.png";
import squaersDecor from "../../assets/img/decor/squares.svg";
import dotsDecor from "../../assets/img/decor/dots.svg";
import {ModalContext} from "../../context/ModalContext";
import {Modal} from "../Modal/Modal";
import {ContactForm} from "../ContactForm/ContactForm";

export const Hero = () => {
    const {modal, open, close} = useContext(ModalContext);

    return (
        <section className={style.hero}>
            {modal && <Modal title={"Contact me"} onClose={close}>
                <ContactForm/>
            </Modal>}

            <div className={style.hero__container}>
                <div className={style.hero__left}>
                    <h1 className={style.hero__title}>
                        Dalaskor is a <span>front-end developer</span>
                    </h1>
                    <p className={style.hero__description}>
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <PrimBtn
                        btnText={'Contact me!!'}
                        onClick={open}
                    />
                </div>
                <div className={style.hero__right}>
                    <div className={style.hero__photo}>
                        <img src={squaersDecor} className={style.hero__decor1}/>
                        <img src={profilePhoto} alt="Profile Photo"/>
                        <img src={dotsDecor} className={style.hero__decor2}/>
                    </div>
                </div>
            </div>
        </section>
    )
}