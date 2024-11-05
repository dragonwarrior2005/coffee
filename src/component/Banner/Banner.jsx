import React from "react";
import './Banner.css'
import { Container} from 'react-bootstrap'


const Banner = () => {
    return(
        <>
        <section id="home">
            <Container>
                <div className="home">
                    <div className="banner-text">
                        <h1>Get Your <span className="coffee">Coffee</span> Mug Now</h1>
                        <a href="#">Click Here To Get your Coffee Mug</a>
                    </div>
                </div>

            </Container>
        </section>
        </>
    )
}

export default Banner