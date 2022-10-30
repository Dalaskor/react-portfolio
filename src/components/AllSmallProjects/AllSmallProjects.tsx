import React from 'react';
import style from './AllSmallProjects.module.scss';
import {SectionTitle} from "../UI/SectionTitle";
import {useProjectsSmall} from "../../hooks/projects-small";
import {Loader} from "../UI/Loader";
import {ErrorMessage} from "../UI/ErrorMessage";
import {CardProject} from "../CardProject/CardProject";

export const AllSmallProjects = () => {
    const {projects, loading, error} = useProjectsSmall();

    return (
        <section className={style.projects}>
            <div className={style.projects__container}>
                <SectionTitle titleText={"small-projects"}/>
                <div className={style.projects__list}>
                    {loading && <Loader/>}
                    {error && <ErrorMessage error={error}/>}
                    {projects && projects.map(project => <CardProject project={project} key={project.id}/>)}
                </div>
            </div>
        </section>
    )
}