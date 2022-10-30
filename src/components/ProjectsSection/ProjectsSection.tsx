import React from 'react';
import style from './ProjectsSection.module.scss'
import {SectionTitle} from "../UI/SectionTitle";
import {Link} from "react-router-dom";
import {useProjects} from "../../hooks/projects";
import {CardProject} from "../CardProject/CardProject";

export const ProjectsSection = () => {
    const {projects, error, loading} = useProjects();

    return (
        <section className={style.projects}>
            <div className={style.projects__container}>
                <div className={style.projects__header}>
                    <div className={style.projects__title}>
                        <SectionTitle titleText={"projects"}/>
                        <div className={style.projects__line}></div>
                    </div>
                    <Link to={'/projects'} className={style.projects__all}>View all ~~&gt;</Link>
                </div>
                <div className={style.projects__list}>
                    <CardProject project={projects[0]}/>
                    <CardProject project={projects[1]}/>
                    <CardProject project={projects[2]}/>
                </div>
            </div>
        </section>
    )
}