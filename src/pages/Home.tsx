import hero from '../assets/images/hero.svg'
import { Paper } from "@mui/material";
import Rating from "@mui/material/Rating";
import ShopAd from '../components/ShopAd';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useQuery } from '@tanstack/react-query';
import Axios from "axios"
import CtaDownloadApp from "../components/CtaDownloadApp";
import HowItWorks from "../components/HowItWorks";

const Home = (props: any) => {

  const { data } = useQuery({queryKey: ['user'], queryFn:  () => {
    Axios.get("https://api.medihaleconsult.com/api/patient/data").then((res) => res.data)
  }});
console.log(data)
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="work-sans py-5">
      <section id='hero' className="d-flex py-5 container medihale-intro">
        <div style={{ width: '100%' }} className="row align-self-center">
          <motion.div initial={{ x: -700 }} animate={{ x: 0 }} transition={{
            duration: '3'
          }} className="col-sm-12 col-lg-6 pb-5 text-md-start text-sm-center intro-content">
            <div className="fw-normal minheightdis fs-4  header-info">
              <motion.h1 initial={{ x: -200 }} animate={{ x: 0 }} transition={{
                duration: '3'
              }} className="text-secondary fw-bold">
                {props.title}</motion.h1><br />
              <Typewriter words={[props.information.homePageIntro, ' Committed to bringing you the best']}
                loop={0}
              />

            </div>
            <p className="fs-5">{props.information.description}</p>
            <Link to='/sign-up' className="btn  btn-secondary">Start here</Link>
          </motion.div>
          <motion.div initial={{ x: 600 }} animate={{ x: 0 }} transition={{
            duration: '3'
          }} className="col-sm-12 col-lg-6 text-center image-container">
            <img className="img-fluid" src={hero} alt="" />
          </motion.div>
        </div>
      </section>
      <HowItWorks information={props.information} />
      <section className='container'>
        <ShopAd information={props.information} />
      </section>
      <section className="pt-5 py-5 bg-light testimonials">
        <h2 className="pt-5 text-primary fw-bold display-6" >Testimonials</h2>
        <div className="container">
          <div className="testimony-block row">

            <Paper className="h-5 m-4 col text-center" elevation={1}>
              <div className="py-5 px-4 featured">
                <div className=" py-2 text-primary fw-light fs-3 featured-icon">
                  <div className="review">{props.information.testimonyOne.review}</div>
                </div>
                <div className=" text-secondary pt-2 fs-5 featured-header">
                  <div className="testimony">
                    {props.information.testimonyOne.name}
                  </div>
                </div>
                <div className="pt-3 featured-description">
                  <div className="title">
                    {props.information.testimonyOne.title}
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
            </Paper>
            <Paper className="h-5 m-4 col text-Center" elevation={1}>
              <div className="py-5 px-4 featured">
                <div className=" py-2 text-primary fw-light fs-3 featured-icon">
                  <div className="review">{props.information.testimonyTwo.review}</div>
                </div>
                <div className=" text-secondary pt-2 fs-5 featured-header">
                  <div className="testimony">
                    {props.information.testimonyTwo.name}
                  </div>
                </div>
                <div className="pt-3 featured-description">
                  <div className="title">
                    {props.information.testimonyTwo.title}
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
            </Paper>
            <Paper className="h-5 m-4 col text-center" elevation={1}>
              <div className="py-5 px-4 featured">
                <div className=" py-2 text-primary fw-light fs-3 featured-icon">
                  <div className="review">{props.information.testimonyThree.review}</div>
                </div>
                <div className=" text-secondary pt-2 fs-5 featured-header">
                  <div className="testimony">
                    {props.information.testimonyThree.name}
                  </div>
                </div>
                <div className="pt-3 featured-description">
                  <div className="title">
                    {props.information.testimonyThree.title}
                  </div>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </section>
      <section id="cta" className="bg-secondary">
        <CtaDownloadApp />
      </section>

    </motion.div>
  );
};

export default Home;