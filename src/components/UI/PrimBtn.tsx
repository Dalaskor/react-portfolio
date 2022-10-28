import React from 'react';
import style from './UI.module.scss';

interface PrimBtnProps {
    btnText: String,
    onClick: () => void,
}

export const PrimBtn = ({btnText, onClick}: PrimBtnProps) => {
    return (
        <button className={style.primBtn} onClick={onClick}>
            {btnText}
        </button>
    )
}