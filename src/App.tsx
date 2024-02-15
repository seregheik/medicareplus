import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
 

} from "react-router-dom";

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
import {
  Title,
  HomePagecontent,
  TermsandConditions,
  PrivacyPolicies,
} from "./data";
import Privacy from "./pages/PrivacyPolicy";
import { AnimatePresence } from "framer-motion";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'



const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route  path="/" element={<NavBar />}>
      
      <Route path="*" element={<PageInvalid />} />
      <Route
        index
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
    </Route>

  )
);

function App() {
  
  const client = new QueryClient();

  return (
  <QueryClientProvider client={client}><AnimatePresence><RouterProvider router={router} /></AnimatePresence></QueryClientProvider>);
}

export default App;
