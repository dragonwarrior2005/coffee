import React from "react";
import { Container } from "react-bootstrap";
import './Aboutus.css'
import coffee from "../../assets/coffee2.png";


const Aboutus = () => {
    return(
        <>
        <section id="aboutus"></section>
        <Container className="aboutsec">
            <div className="aboutus">
                <h1>About Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolore animi provident distinctio et soluta facilis inventore possimus dolorem, error eveniet amet voluptatem in ea debitis beatae, quibusdam eligendi. Quam?</p>
            </div>
            <div className="aboutuspic">
                <img src={coffee} alt="" />
            </div>
        </Container>
        </>
    )
}

export default Aboutus