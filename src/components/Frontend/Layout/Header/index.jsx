import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // use NavLink
import Image from "../../../CommonElement/Image";
import frontendRouteMap from "../../../../routes/Frontend/frontendRouteMap";

export function Header() {
  return (
    <header className="header w-100">
      <Navbar expand="lg" bg="transparent" data-bs-theme="light">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand className="me-0 me-md-4">
            <NavLink to={frontendRouteMap.HOME.path} className="p-0">
              <Image
                source="logo.png"
                alt="Logo"
                className="img-fluid"
                imageFor="frontend"
              />
            </NavLink>
          </Navbar.Brand>

          {/* Right side actions */}
          <div className="ms-auto d-flex align-items-center header_action order-lg-2">
            <NavLink
              to={frontendRouteMap.LOGIN.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Login
            </NavLink>
            <NavLink
              to={frontendRouteMap.SIGNUP.path}
              className={({ isActive }) =>
                isActive ? "btn btn-primary active" : "btn btn-primary"
              }
            >
              Get Started
            </NavLink>
          </div>

          {/* Menu Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="order-lg-1">
            <Nav>
              <NavLink
                to={frontendRouteMap.PRICING.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Pricing
              </NavLink>
              <NavLink
                to={frontendRouteMap.REVIEWS.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Reviews
              </NavLink>
              <NavLink
                to={frontendRouteMap.MONEYBACKGUARANTEE.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Money-Back Guarantee
              </NavLink>
              <NavLink
                to={frontendRouteMap.HELPANDSUPPORT.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Help & Support
              </NavLink>
              <NavLink
                to={frontendRouteMap.TRAINING.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Training
              </NavLink>
              {/* <NavLink
                to={frontendRouteMap.BLOG.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Blog
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
