import React, {useEffect} from 'react';
import './App.css';
import BottomMenuBar from "./layout/BottomMenuBar";
import Home from "./routes/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useBoundStore} from "./state/state";
import Effects from "./routes/Effects";
import TopMenuBar from "./layout/TopMenuBar";

function App() {
    const store = useBoundStore();
    useEffect(() => {
        store.fetchLightIp().then(() => {
            if (store.colorPalettes.length === 0) {
                store.fetchColorPalettes();
            }
            if (store.effects.length === 0) {
                store.fetchEffects();
            }
            store.fetchLightState();
        });
    }, []);

    return (
        <div className="prose lg:prose-lg prose-slate dark:prose-invert dark:bg-cgray-800 min-h-screen pt-[110px]">
            <BrowserRouter>
                <TopMenuBar />
                <div className="pb-24">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/presets" element={<Effects/>}/>
                    </Routes>
                </div>
                <BottomMenuBar/>
            </BrowserRouter>
        </div>
    );
}

export default App;
