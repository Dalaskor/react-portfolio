import React from 'react';
import style from './AllProjectsSection.module.scss';
import {SectionTitle} from "../UI/SectionTitle";
import {useProjects} from "../../hooks/projects";
import {Loader} from "../UI/Loader";
import {ErrorMessage} from "../UI/ErrorMessage";
import {CardProject} from "../CardProject/CardProject";

export const AllProjectsSection = () => {
    const {projects, error, loading} = useProjects();

    return (
        <section className={style.projects}>
            <div className={style.projects__container}>
                <SectionTitle titleText={"complete-apps"}/>
                <div className={style.projects__list}>
                    {loading && <Loader/>}
                    {error && <ErrorMessage error={error}/>}
                    {projects && projects.map(project => <CardProject project={project} key={project.id}/>)}
                </div>
            </div>
        </section>
    )
}