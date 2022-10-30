import React from 'react';
import style from './ProjectsSection.module.scss'
import {SectionTitle} from "../UI/SectionTitle";
import {Link} from "react-router-dom";
import {useProjects} from "../../hooks/projects";
import {CardProject} from "../CardProject/CardProject";
import {Loader} from "../UI/Loader";
import {ErrorMessage} from "../UI/ErrorMessage";
import dotsDecor from '../../assets/img/decor/dots.svg';

export const ProjectsSection = () => {
    const {projects, error, loading} = useProjects();

    return (
        <section className={style.projects}>
            <img src={dotsDecor} className={style.projects__decor1}/>
            <div className={style.projects__decor2}></div>
            <div className={style.projects__container}>
                <div className={style.projects__header}>
                    <div className={style.projects__title}>
                        <SectionTitle titleText={"projects"}/>
                        <div className={style.projects__line}></div>
                    </div>
                    <Link to={'/react-portfolio/works'} className={style.projects__all}>View all ~~&gt;</Link>
                </div>
                <div className={style.projects__list}>
                    {loading && <Loader/>}
                    {error && <ErrorMessage error={error}/>}
                    {projects.map((project, index) => {
                        const indexes = [0, 1, 2];
                        if (indexes.includes(index)) {
                            return (
                                <CardProject project={project} key={project.id} />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}