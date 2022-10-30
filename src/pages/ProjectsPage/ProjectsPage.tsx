import React from 'react';
import {HeroPage} from "../../components/HeroPage/HeroPage";
import {AllProjectsSection} from "../../components/AllProjectsSection/AllProjectsSection";

export const ProjectsPage = () => {
    return (
        <>
            <HeroPage title={'projects'} description={'List of my projects'}/>
            <AllProjectsSection/>
        </>
    )
}