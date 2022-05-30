import React from "react";
import "../Header/Header";
import "../Header/Header.scss";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";

function Header() {
    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__container">
                        <a href="#" className="header__logo-link">
                            Abdullokh
                        </a>
                        <Navbar />
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header;