import React from "react";
import './Footer.css'
import { Container } from "react-bootstrap";

const Footer = () => {
    return(
        <>
        <section id="contactus">
        <Container>
            <h2>Contact Us</h2>
            <div className="footer">
            <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Number: 10010001000</a>

            </div>
        
        </Container>
        </section>
       
        
        </>
    )
}
export default Footer