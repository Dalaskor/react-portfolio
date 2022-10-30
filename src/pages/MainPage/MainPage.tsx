import React from 'react';
import {Hero} from "../../components/Hero/Hero";
import {Quote} from "../../components/Quote/Quote";
import {ProjectsSection} from "../../components/ProjectsSection/ProjectsSection";

export const MainPage = () => {
    return (
        <>
            <Hero/>
            <Quote/>
            <ProjectsSection/>
        </>
    )
}