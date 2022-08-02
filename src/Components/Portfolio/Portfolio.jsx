import React from "react";

// Import => Components
import "../Portfolio/Portfolio.scss";
import Container from "../Container/Container";

function Portfolio() {
    return (
        <>
            <Container>
                <section className="portfolio">
                    <h1 className="portfolio__title">
                        Portfolio
                    </h1>

                    {/* <div className="btn-wrap">
                        
                    </div> */}

                    <div className="por-cards">
                        <div className="por-card por-card-1">

                        </div>
                        <div className="por-card">
                            
                        </div>
                        <div className="por-card">
                            
                        </div>
                        <div className="por-card">
                            
                        </div>
                        <div className="por-card">
                            
                        </div>
                        <div className="por-card">
                            
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Portfolio