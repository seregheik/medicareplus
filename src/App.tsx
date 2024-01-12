import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestions";
import PageInvalid from "./pages/PageInvalid";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import TermsAndConditions from "./pages/TermsAndConditions";
import NavBar from "./components/NavBar";
import Pharmacies from "./pages/Pharmacies";
import Footer from "./components/Footer";
import {
  Title,
  HomePagecontent,
  TermsandConditions,
  PrivacyPolicies,
} from "./data";
import Privacy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <section className="sticky-top">
          <NavBar />
        </section>
        <Routes>
          <Route path="*" element={<PageInvalid />} />
          <Route
            path="/"
            element={<Home title={Title.title} information={HomePagecontent} />}
          />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<FrequentlyAskedQuestions />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions information={TermsandConditions} />}
          />
          <Route
            path="/privacy-policy"
            element={<Privacy information={PrivacyPolicies} />}
          />
          <Route path="/pharmacies" element={<Pharmacies />} />
          <Route
            path="/"
            element={<Home title={Title.title} information={HomePagecontent} />}
          />
        </Routes>
        <section className="footer-bg">
          <Footer />
        </section>
      </Router>
    </>
  );
}

export default App;
