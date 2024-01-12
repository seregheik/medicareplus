import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import main_icon from "../assets/icons/logodark.png";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="container text-light">
      <div className="row py-5 px-3">
        <div className="col-sm-12 col-md-7 col-lg-3 py-3">
          <Link to="/" className="nav-link-footer">
            <Image style={{ maxWidth: 140 }} src={main_icon}></Image>
          </Link>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-3 py-3">
          <div className="flex-column nav py-2">
            <div className="nav-item">
              <Link to="/contact-us" className="nav-link-footer">
                Need Help
              </Link>
            </div>
            <Link to="/faq" className="nav-link-footer">
              Faq
            </Link>
            <Link to="/about-us#ourTeam" className="nav-link-footer">
              Meet The Team
            </Link>
            <Link to="" className="nav-link-footer">
              Falcon Road
            </Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2 py-3">
          <Nav className="flex-column py-2">
            <p className="fw-bold fs-5">Information</p>
            <Link className="nav-link-footer" to="contact-us">
              Contact Us
            </Link>
            <Link className="nav-link-footer" to="/about-us">
              About Us
            </Link>
            <Link className="nav-link-footer" to="privacy-policy">
              Privay Policy
            </Link>
            <Link className="nav-link-footer" to="terms-and-conditions">
              Terms and Conditions
            </Link>
          </Nav>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2 py-3">
          <Nav className="flex-column py-2">
            <p className="fw-bold fs-5">Accounts</p>
            <Link className="nav-link-footer" to="/log-in">
              Log In
            </Link>
            <Link className="nav-link-footer" to="/sign-up">
              Sign Up
            </Link>
          </Nav>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2 py-3">
          <Nav className="flex-column py-2">
            <p className="fw-bold fs-5">Countries</p>
            <Link to="#" className="nav-link-footer">
              Nigeria
            </Link>
          </Nav>
        </div>
        <div className="col-sm-12 col-md-9  tex-sm-center text-md-start">
          @ 2024 <span className="fw-bold"> Medihale Consult. </span> All rights
          reserved.
        </div>
        <div className="col-sm-12 col-md-3">
         <SocialLinks/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
