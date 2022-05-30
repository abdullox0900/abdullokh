import React from "react";
import "../Main/Main.scss";
import Container from "../Container/Container";
import Content from "../Content/Content";

function Main() {
    return (
        <>
            <main className="main">
                <Container>
                    <Content />
                </Container>
            </main>
        </>
    )
};

export default Main;