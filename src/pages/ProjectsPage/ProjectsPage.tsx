import React from 'react';
import {HeroPage} from "../../components/HeroPage/HeroPage";
import {AllProjectsSection} from "../../components/AllProjectsSection/AllProjectsSection";
import {AllSmallProjects} from "../../components/AllSmallProjects/AllSmallProjects";

export const ProjectsPage = () => {
    return (
        <>
            <HeroPage title={'projects'} description={'List of my projects'}/>
            <AllProjectsSection/>
            <AllSmallProjects/>
        </>
    )
}