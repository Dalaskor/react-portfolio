import React from 'react';
import style from './UI.module.scss';

interface PageTitleProps {
    title: string,
    description: string,
}

export const PageTitle = ({title, description}: PageTitleProps) => {
    return (
        <div className={style.pageTitle}>
            <div className={style.pageTitle__title}>
                <p><span>/</span>{title}</p>
            </div>
            <div className={style.pageTitle__description}>
                <p>{description}</p>
            </div>
        </div>
    )
}