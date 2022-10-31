import React from 'react';
import "./App.scss";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {Footer} from "./components/Footer/Footer";
import {ProjectsPage} from "./pages/ProjectsPage/ProjectsPage";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {ContactsPage} from "./pages/ContactsPage/ContactsPage";

function App() {
    return (
        <>
            <div className={"wrapper"}>
                <Header/>
                <main className={"main"}>
                    <Routes>
                        <Route path={"/react-portfolio/"} element={<MainPage/>}/>
                        <Route path={"/react-portfolio/works"} element={<ProjectsPage/>}/>
                        <Route path={"/react-portfolio/about"} element={<AboutPage/>}/>
                        <Route path={"/react-portfolio/contacts"} element={<ContactsPage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default App;
