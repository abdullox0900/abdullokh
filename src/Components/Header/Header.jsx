import React from "react";
import "../Header/Header";
import "../Header/Header.scss";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__container">
                        <NavLink to={"/"} className="header__logo-link">
                            Abdullokh
                        </NavLink>
                        <Navbar />
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header;