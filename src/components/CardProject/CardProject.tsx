import React from 'react';
import style from './CardProject.module.scss';
import {PrimBtn} from "../UI/PrimBtn";
import {SecondBtn} from "../UI/SecondBtn";
import {IProject} from "../../model";

interface CardProjectProps {
    project: IProject,
}

export const CardProject = ({project}: CardProjectProps) => {
    return (
        <div className={style.card}>
            {project.image &&
                <div className={style.card__image}>
                    <img src={project.image} alt="Project image"/>
                </div>}
            <div className={style.card__tech}>
                <p>{project.techs}</p>
            </div>
            <div className={style.card__body}>
                <div className={style.card__title}>
                    {project.title}
                </div>
                <div className={style.card__description}>
                    {project.description}
                </div>
                <div className={style.card__buttons}>
                    {project.preview &&
                        <PrimBtn btnText={"Preview"} onClick={() => {
                            window.open(project.preview, '_blank');
                        }}/>}
                    <SecondBtn btnText={"GitHub"} onClick={() => {
                        window.open(project.github, '_blank');
                    }}/>
                </div>
            </div>
        </div>
    )
}