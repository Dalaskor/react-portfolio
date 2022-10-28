import React from 'react';
import style from './Hero.module.scss';
import {PrimBtn} from "../UI/PrimBtn";

export const Hero = () => {
    return (
        <div className={"style.hero"}>
            <div className={"style.hero__left"}>
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
            <div className={"style.hero__right"}></div>
        </div>
    )
}