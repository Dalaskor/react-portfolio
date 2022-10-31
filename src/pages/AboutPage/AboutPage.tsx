import React from 'react';
import {AboutSection} from "../../components/AboutSection/AboutSection";
import {HeroPage} from "../../components/HeroPage/HeroPage";
import {SkillsHorizonSection} from "../../components/SkillsHorizonSection/SkillsHorizonSection";

export const AboutPage = () => {
    return (
        <>
            <HeroPage title={"about-me"} description={"Who am i?"}/>
            <AboutSection/>
            <SkillsHorizonSection/>
        </>
    )
}