import React from 'react';
import style from './Hero.module.scss';
import {PrimBtn} from "../UI/PrimBtn";
import profilePhoto from "../../assets/img/photos/profile.png";
import squaersDecor from "../../assets/img/decor/squares.svg";
import dotsDecor from "../../assets/img/decor/dots.svg";

export const Hero = () => {
    return (
        <div className={style.hero}>
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
                        onClick={() => (console.log('Click!'))}
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
        </div>
    )
}