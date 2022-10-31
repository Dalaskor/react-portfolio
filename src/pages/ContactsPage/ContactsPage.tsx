import React from 'react';
import {HeroPage} from "../../components/HeroPage/HeroPage";
import {ContactsSection} from "../../components/ContactsSection/ContactsSection";
import {AllMediaSection} from "../../components/AllMediaSection/AllMediaSection";

export const ContactsPage = () => {
    return (
        <>
            <HeroPage title={"contacts"} description={"Contact me"}/>
            <ContactsSection/>
            <AllMediaSection/>
        </>
    )
}