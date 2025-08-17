import React from "react";
import { Container, Navbar, Nav  } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "../../../CommonElement/Image";
import frontendRouteMap from "../../../../routes/Frontend/frontendRouteMap";

export function Header() {
  return (   
    <header className="header w-100" >           
        <Navbar expand="lg" bg="transparent" data-bs-theme="light" > 
            <Container fluid>           
                <Navbar.Brand className="me-0 me-md-4">
                    <Link to={frontendRouteMap.HOME.path} as={Nav.link} >
                        <Image source="logo.png" alt="Logo" className="img-fluid" imageFor="frontend" />    
                    </Link>
                </Navbar.Brand>
                <div className="ms-auto d-flex align-items-center header_action order-lg-2">
                    <Link to={frontendRouteMap.LOGIN.path} className="nav-link ">Login</Link>
                    <Link  to={frontendRouteMap.SIGNUP.path} className="btn btn-primary">Get Started</Link>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="order-lg-1">
                    <Nav>
                        <Link to="#!" className="nav-link">Pricing</Link>
                        <Link to="#!" className="nav-link">Reviews</Link>
                        <Link to="#!" className="nav-link">Money-Back Guarantee</Link>
                        <Link to="#!" className="nav-link">Help & Support</Link>
                        <Link to="#!" className="nav-link">Training</Link>
                        <Link to="#!" className="nav-link">Blog</Link>                       
                    </Nav>
                </Navbar.Collapse>  
                
            </Container>          
        </Navbar>          
    </header>   
  );
}
