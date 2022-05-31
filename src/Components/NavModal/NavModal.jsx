import React from "react";
import "../NavModal/NavModal.scss";
import { NavLink } from "react-router-dom";

function NavModal({ elNavModal }) {

    window.addEventListener("keydown", function (event) {
        var handled = false;
        if (event.key !== 27) {
            elNavModal.current.classList.remove("nav--open");
        }
    }, true);

    return (
        <>
            <nav className="nav-modal" ref={elNavModal} onClick={(evt) => {
                if (
                    evt.target.matches(".nav-modal") || evt.target.matches(".nav-modal__btn")
                ) {
                    elNavModal.current.classList.remove("nav--open");
                }
            }}>
                <div className="nav-modal__box">
                    <ul className="nav-modal__list">
                        <li className="nav-modal__item">
                            <NavLink to={"/"} className="nav-modal__link">Home</NavLink>
                        </li>
                        <li className="nav-modal__item">
                            <NavLink to={"/About"} className="nav-modal__link">About</NavLink>
                        </li>
                        <li className="nav-modal__item">
                            <a href="#" className="nav-modal__link">Project</a>
                        </li>
                        <li className="nav-modal__item">
                            <a href="#" className="nav-modal__link">Blog</a>
                        </li>
                        <li className="nav-modal__item">
                            <a href="#" className="nav-modal__link">Data</a>
                        </li>
                    </ul>
                    <span className="nav-modal__line"></span>
                    {/* <button className="btn-dark"></button> */}
                    <button className="nav-modal__btn"></button>
                </div>
            </nav>
        </>
    )
}

export default NavModal;