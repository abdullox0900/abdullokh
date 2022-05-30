import React from "react";
import "../Navbar/Navbar.scss";

function Navbar() {
    return(
        <>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="3" className="nav__link">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="3" className="nav__link">Project</a>
                    </li>
                    <li className="nav__item">
                        <a href="3" className="nav__link">Channel</a>
                    </li>
                    <li className="nav__item">
                        <a href="3" className="nav__link">Useful</a>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;