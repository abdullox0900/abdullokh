import './App.scss';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import { Routes, Route, NavLink } from "react-router-dom";
import Project from './Page/Project/Project';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            console.log('🎉 Тёмный режим поддерживается');
        }
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Project" element={<Project />} />
            </Routes>
        </>
    )
}

export default App;
