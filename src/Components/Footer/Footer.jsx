import React from "react";
import Container from "../Container/Container";
import "../Footer/Footer.scss";

function Footer() {

    var style = {
        backgroundColor: "#FAFAFC",
        textAlign: "center",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    };


    return(
        <>
            <footer style={style} className="footer">
                <Container>
                    <p className="footer__copyright">© 2022 abdullokh.uz</p>
                </Container>
            </footer>
        </>
    )
};

export default Footer;