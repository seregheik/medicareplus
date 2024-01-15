import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import { ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";

const NavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="px-2 border-bottom sticky-top navbar backdrop-filter fw-semibold nav-background d-flex navbar-expand-lg  navbar-light bg-light"
      >
        <Navbar.Brand className="order">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Medihale Plus" width={60} height={60} />
          </Link>
        </Navbar.Brand>
        <div className="order-sm-first nav-button">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link as='div' href="#">
              <ul className="navbar-nav">
                <Nav.Link href="" className="nav-item"></Nav.Link>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="about-us">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="contact-us">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="pharmacies">
                    Pharmacies near you
                  </NavLink>
                </li>
              </ul>
            </Nav.Link>
            
          </Nav>
          <Nav>
          <Nav.Link as='div' className="" href="#">
              <div className="nav d-flex justify-content-center ms-auto">
                <div className="nav-link">
                  <Link to="log-in" className="btn btn-primary">
                    Sign In
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="btn btn-secondary" to="sign-up">
                    Sign Up
                  </Link>
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet/>
      <section className="footer-bg">
        <Footer />
      </section>
      <ScrollRestoration />
    </div>
  );
};

export default NavBar;
