import React, {useEffect} from 'react';
import './App.css';
import BottomMenuBar from "./layout/BottomMenuBar";
import Home from "./routes/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useBoundStore} from "./state/state";

function App() {
    const store = useBoundStore();
    useEffect(() => {
        store.fetchLightIp().then(() => {
            if (store.colorPalettes.length === 0) {
                store.fetchColorPalettes();
            }
        });
    }, []);

    return (
        <div className="prose lg:prose-xl prose-slate dark:prose-invert dark:bg-cgray-500 min-h-screen">
            <div className="px-5 py-10">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <BottomMenuBar/>
        </div>
    );
}

export default App;
