import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { Navbar, Nav} from "react-bootstrap";

const NavBar = () => {
  return (

    <Navbar
      expand="lg"
      className="px-2 border-bottom  navbar backdrop-filter fw-semibold nav-background d-flex navbar-expand-lg  navbar-light bg-light"
    >
      <Navbar.Brand className="order">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Medihale Plus" width={60} height={60} />
        </Link>
      </Navbar.Brand>
      <div className="order-sm-first nav-button">
      <Navbar.Toggle aria-controls="basic-navbar-nav" /></div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-us">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pharmacies">
                Pharmacies near you
              </a>
            </li>
          </ul>
        </Nav>
        <div className="nav d-flex justify-content-center ms-auto">
        <div className="nav-link">
          <a href="/log-in" className="btn btn-primary">
            Sign In
          </a>
        </div>
        <div className="nav-link">
          <a className="btn btn-secondary" href="/sign-up">
            Sign Up
          </a>
        </div>
      </div>
      </Navbar.Collapse>
     
    </Navbar>
  );
};

export default NavBar;
