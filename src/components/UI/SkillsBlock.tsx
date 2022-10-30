import React from 'react';
import style from './UI.module.scss';

interface SkillsBlockProps {
    title: string,
    skills: string
}

export const SkillsBlock = ({title, skills}: SkillsBlockProps) => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsBlock__header}>
                <p>{title}</p>
            </div>
            <div className={style.skillsBlock__body}>
                <p>{skills}</p>
            </div>
        </div>
    )
}