import React from "react";
import { Container, Navbar, Nav, Form} from 'react-bootstrap'
import './Header.css'
import Logo from "../../assets/coffee.png"

const Header = () => {
    return (
        <>
         <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="logo">
            <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="links">Get Your Mug</Nav.Link>
            <Nav.Link href="#aboutus" className="links">About Us</Nav.Link>
            <Nav.Link href="#contactus" className="links">Contact Us</Nav.Link>            
          </Nav>
          <Nav className="ms-auto">
            <Nav>
                <Form>
                <Form.Control type="text" placeholder="Search" />
                </Form>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Header