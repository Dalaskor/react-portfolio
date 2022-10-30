import React, {useCallback} from 'react';
import style from './AboutSection.module.scss';
import {SectionTitle} from "../UI/SectionTitle";
import {PrimBtn} from "../UI/PrimBtn";
import {useNavigate} from "react-router-dom";
import photoProfile from "../../assets/img/photos/profile.png";
import decorDots from "../../assets/img/decor/dots.svg";

export const AboutSection = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/about', {replace: true}), [navigate]);

    return (
        <section className={style.about}>
            <div className={style.about__container}>
                <div className={style.about__header}>
                    <SectionTitle titleText={"about-me"}/>
                    <div className={style.about__line}></div>
                </div>
                <div className={style.about__body}>
                    <div className={style.about__left}>
                        <p>
                            Hello, i’m Danila (Dalaskor)!
                            <br/><br/>
                            I’m a front-end developer based in Astrakhan, Russia. I can develop responsive
                            websites from scratch and raise them into modern user-friendly web experiences.
                            <br/><br/>
                            Transforming my creativity and knowledge into a websites has been my passion for over a
                            year. I have been helping various clients to establish their presence online. I always
                            strive to learn about the newest technologies and frameworks.
                        </p>
                        <PrimBtn btnText={"Read more"} onClick={handleOnClick}/>
                    </div>
                    <div className={style.about__right}>
                        <div className={style.about__image}>
                            <img className={style.about__decor1} src={decorDots}/>
                            <img className={style.about__img} src={photoProfile} alt="Profile Photo"/>
                            <img className={style.about__decor2} src={decorDots}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}