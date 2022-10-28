import React from 'react';
import "./App.scss";
import {Header} from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";

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
                <footer></footer>
            </div>
        </>
    )
}

export default App;
