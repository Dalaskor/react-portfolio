import React from 'react';
import style from './Quote.module.scss';
import quoteIcon from '../../assets/img/decor/qute.svg';

export const Quote = () => {
    return (
        <section className={style.quote}>
            <div className={style.quote__decorOut}></div>
            <div className={style.quote__container}>
                <div className={style.quote__body}>
                    <div className={style.quote__decor}>
                        <img src={quoteIcon}/>
                    </div>
                    <p>With great power comes great electricity bill</p>
                    <div className={style.quote__decor}>
                        <img src={quoteIcon}/>
                    </div>
                </div>
                <div className={style.quote__author}>
                    <p>- Dr. Who</p>
                </div>
            </div>
        </section>
    )
}