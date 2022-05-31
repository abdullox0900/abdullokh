import './App.scss';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import { Routes, Route, NavLink} from "react-router-dom";

function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About />}/>
            </Routes>
        </>
    )
}

export default App;
