import React from "react";
import "../Header/Header";
import "../Header/Header.scss";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";
import NavModal from "../NavModal/NavModal";


function Header() {

    const elNavModal = React.useRef();
    // const elBody = document.querySelector("#body")

    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__container">
                        <NavLink to={"/"} className="header__logo-link">
                            <span className="header__logo-a">A</span>
                            bdullokh
                        </NavLink>
                        <Navbar />
                        <button className="header__burger-btn" onClick={() => {
                            elNavModal.current.classList.add("nav--open");

                            // elModal.current.classList.add("modal--style")
                        }}></button>
                    </div>
                    <NavModal elNavModal={elNavModal}/>
                </Container>
            </header>
        </>
    )
}

export default Header;