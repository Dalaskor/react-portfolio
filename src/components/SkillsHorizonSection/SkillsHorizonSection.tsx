import React from 'react';
import style from './SkillsHorizonSection.module.scss';
import {SectionTitle} from "../UI/SectionTitle";
import {SkillsBlock} from "../UI/SkillsBlock";

export const SkillsHorizonSection = () => {
    return (
        <section className={style.skills}>
            <div className={style.skills__container}>
                <SectionTitle titleText={"skills"}/>
                <div className={style.skills__list}>
                    <SkillsBlock title={"Languages"} skills={"TypeScript Python JavaScript"}/>
                    <SkillsBlock title={"Others"} skills={"HTML CSS EJS SCSS PUG"}/>
                    <SkillsBlock title={"Tools"} skills={"VSCode PyCharm Figma Git Linux Gulp"}/>
                    <SkillsBlock title={"Databases"} skills={"SQLite PostgreSQL"}/>
                    <SkillsBlock title={"Frameworks"} skills={"React Redux Vue Vuex VueRouter"}/>
                </div>
            </div>
        </section>
    )
}