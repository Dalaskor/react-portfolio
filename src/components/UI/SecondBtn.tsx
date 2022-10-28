import React from 'react';
import style from './UI.module.scss';

interface SecondBtnProps {
    btnText: String,
    onClick: () => void,
}

export const SecondBtn = ({btnText, onClick}: SecondBtnProps) => {
    return (
        <button className={style.secondBtn} onClick={onClick}>
            {btnText}
        </button>
    )
}