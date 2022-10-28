import React from 'react';
import style from './UI.module.scss';

interface SectionTitleProps {
    titleText: string,
}

export const SectionTitle = ({titleText}: SectionTitleProps) => {
    return (
        <div className={style.sectionTitle}>
            <span>#</span>{titleText}
        </div>
    )
}