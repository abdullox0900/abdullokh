import React from "react";
import "../Content/Content.scss";
import AbdullokhImg from "../../Assets/Img/abdullox.jpg";
import GitHubIcon from "../../Assets/Img/Icon/GitHub.svg";

function Content() {
    return (
        <>
            <div className="content">
                <img className="content__img" src={AbdullokhImg} alt="avatar-abdullokh" />
                <h1 className="content__title">Abdullokh Abdusalomov</h1>
                <p className="content__subtitle">Frontend Engineer</p>
                <div className="content__box">
                    <ul className="content__list">
                        <li className="content__item">
                            <a href="#" className="content__icon-github">
                                <img className="" src={GitHubIcon} alt="" />
                            </a>
                        </li>
                        <li className="content__item">
                            <a href="#" className="content__icon-github">
                                <img className="" src={GitHubIcon} alt="" />
                            </a>
                        </li>
                        <li className="content__item">
                            <a href="#" className="content__icon-github">
                                <img className="" src={GitHubIcon} alt="" />
                            </a>
                        </li>
                        <li className="content__item">
                            <a href="#" className="content__icon-github">
                                <img className="" src={GitHubIcon} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Content;