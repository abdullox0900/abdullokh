import React from "react";
import "../Navbar/Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to={"/about"} className="nav__link">About</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to={"/Project"} className="nav__link">Project</NavLink>
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