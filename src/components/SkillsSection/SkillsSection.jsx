import React from 'react';
import style from './SkillsSection.module.scss';
import {SkillsBlock} from "../UI/SkillsBlock";
import {SectionTitle} from "../UI/SectionTitle";
import decorImage from '../../assets/img/decor/decor-img.svg';

export const SkillsSection = () => {
    return (
        <section className={style.skills}>
            <div className={style.skills__container}>
                <div className={style.skills__header}>
                    <SectionTitle titleText={"skills"}/>
                    <div className={style.skills__line}></div>
                </div>
                <div className={style.skills__body}>
                    <div className={style.skills__left}>
                        <img src={decorImage} alt="Image"/>
                    </div>
                    <div className={style.skills__right}>
                        <div className={style.skills__col}>
                            <SkillsBlock title={"Languages"} skills={"TypeScript Python JavaScript"}/>
                        </div>
                        <div className={style.skills__col}>
                            <SkillsBlock title={"Database"} skills={"SQLite PostgreSQL"}/>
                            <SkillsBlock title={"Others"} skills={"HTML CSS EJS SCSS PUG"}/>
                        </div>
                        <div className={style.skills__col}>
                            <SkillsBlock title={"Tools"} skills={"VSCode PyCharm Figma Git Linux Gulp"}/>
                            <SkillsBlock title={"Frameworks"} skills={"React Vue Vuex VueRouter"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}