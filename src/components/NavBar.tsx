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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pharmacies">
                Pharmacies near you
              </Link>
            </li>
          </ul>
        </Nav>
        <div className="nav d-flex justify-content-center ms-auto">
        <div className="nav-link">
          <Link to="/log-in" className="btn btn-primary">
            Sign In
          </Link>
        </div>
        <div className="nav-link">
          <Link className="btn btn-secondary" to="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
      </Navbar.Collapse>
     
    </Navbar>
  );
};

export default NavBar;
