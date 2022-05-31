import React from "react";
import "../Content/Content.scss";
import AbdullokhImg from "../../Assets/Img/abdullox.jpg";
import GitHubIcon from "../../Assets/Img/Icon/GitHub.svg";
import LinkedinIcon from "../../Assets/Img/Icon/LinkedIn.svg";
import TelegramIcon from "../../Assets/Img/Icon/Telegram.svg";
import YouTubeIcon from "../../Assets/Img/Icon/YouTube.svg";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";

function Content() {

    AOS.init({

    });

    return (
        <>
            <div className="content">
                <img className="content__img" src={AbdullokhImg} alt="avatar-abdullokh" data-aos="zoom-in" />
                <h1 className="content__title" data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="200"
                    // data-aos-duration="200"
                    data-aos-offset="200">
                    Abdullokh Abdusalomov
                </h1>
                <p className="content__subtitle" data-aos="fade-up"
                    data-aos-duration="2000">
                    Front-End Engineer
                </p>
                <div className="content__box" data-aos="fade-up"
                    data-aos-duration="2000">
                    <ul className="content__list">
                        <li className="content__item">
                            <a href="https://github.com/abdullox0900" target={"_blank"} className="content__icon-link">
                                <img className="" src={GitHubIcon} alt="github" />
                            </a>
                        </li>
                        <li className="content__item">
                            <a href="#" className="content__icon-link">
                                <img className="" src={TelegramIcon} alt="telegram" />
                            </a>
                        </li>
                        <li className="content__item">
                            <a href="https://www.linkedin.com/feed/" target={"_blank"} className="content__icon-link">
                                <img className="" src={LinkedinIcon} alt="" />
                            </a>
                        </li>
                        <li className="content__item">
                            <a href="https://www.youtube.com/channel/UCh4_4klA2PtblluTPQhhT1A" target={"_blank"} className="content__icon-link">
                                <img className="" src={YouTubeIcon} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <Stack spacing={2} direction="row" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="700"
                    data-aos-offset="0">
                    <NavLink to={"/About"}>
                        <Button className="content__btn" variant="contained">About Me</Button>
                    </NavLink>
                    <Button className="content__btn-cv" variant="outlined">
                        <a href="#" className="content__btn--link">Cv</a>
                    </Button>
                </Stack>
            </div>
        </>
    )
};

export default Content;