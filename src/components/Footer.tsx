import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import main_icon from "../assets/icons/logodark.png";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="container text-light">
      <div className="row py-5 px-3">
        <div className="col-sm-12 col-md-7 col-lg-3 py-3">
          <a href="/" className="nav-link-footer">
            <Image style={{ maxWidth: 140 }} src={main_icon}></Image>
          </a>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-3 py-3">
          <div className="flex-column nav py-2">
            <div className="nav-item">
              <a href="/contact-us" className="nav-link-footer">
                Need Help
              </a>
            </div>
            <a href="/faq" className="nav-link-footer">
              Faq
            </a>
            <a href="/about-us#ourTeam" className="nav-link-footer">
              Meet The Team
            </a>
            <a href="" className="nav-link-footer">
              Falcon Road
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2 py-3">
          <Nav className="flex-column py-2">
            <p className="fw-bold fs-5">Information</p>
            <a className="nav-link-footer" href="contact-us">
              Contact Us
            </a>
            <a className="nav-link-footer" href="/about-us">
              About Us
            </a>
            <a className="nav-link-footer" href="privacy-policy">
              Privay Policy
            </a>
            <a className="nav-link-footer" href="terms-and-conditions">
              Terms and Conditions
            </a>
          </Nav>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2 py-3">
          <Nav className="flex-column py-2">
            <p className="fw-bold fs-5">Accounts</p>
            <a className="nav-link-footer" href="/log-in">
              Log In
            </a>
            <a className="nav-link-footer" href="/sign-up">
              Sign Up
            </a>
          </Nav>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2 py-3">
          <Nav className="flex-column py-2">
            <p className="fw-bold fs-5">Countries</p>
            <a href="#" className="nav-link-footer">
              Nigeria
            </a>
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
