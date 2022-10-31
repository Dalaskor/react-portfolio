import React from 'react';
import {Hero} from "../../components/Hero/Hero";
import {Quote} from "../../components/Quote/Quote";
import {ProjectsSection} from "../../components/ProjectsSection/ProjectsSection";
import {SkillsSection} from "../../components/SkillsSection/SkillsSection";
import {AboutSection} from "../../components/AboutSection/AboutSection";
import {ContactsSection} from "../../components/ContactsSection/ContactsSection";

export const MainPage = () => {
    return (
        <>
            <Hero/>
            <Quote/>
            <ProjectsSection/>
            <SkillsSection/>
            <AboutSection isShowTitle={true}/>
            <ContactsSection/>
        </>
    )
}