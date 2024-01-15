import OurTeam from "../components/OurTeam"
import CtaDownloadApp from "../components/CtaDownloadApp"
import HowItWorks from "../components/HowItWorks"
import { AboutContent } from "../data"
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <HowItWorks information= {AboutContent}/>
      <OurTeam/>
      section
      <section id="cta" className="bg-secondary">
      <CtaDownloadApp/>
      </section>
    </motion.div>
  )
}

export default About