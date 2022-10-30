import React from 'react';
import style from './HeroPage.module.scss';
import {PageTitle} from "../UI/PageTitle";

interface HeroPageProps {
    title: string,
    description: string,
}

export const HeroPage = ({title, description}: HeroPageProps) => {
    return (
        <section className={style.hero}>
            <div className={style.hero__container}>
                <PageTitle title={title} description={description}/>
            </div>
        </section>
    )
}