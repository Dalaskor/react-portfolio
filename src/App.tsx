import React from 'react';
import "./App.scss";
import {Header} from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <>
            <div className={"wrapper"}>
                <Header/>
                <main className={"main"}>
                    <Routes>
                        <Route path={"/"} element={<MainPage/>}/>
                        <Route path={"/test"} element={<MainPage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default App;
