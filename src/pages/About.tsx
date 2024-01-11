import OurTeam from "../components/OurTeam"
import CtaDownloadApp from "../components/CtaDownloadApp"
import HowItWorks from "../components/HowItWorks"
import { AboutContent } from "../data"
const About = () => {
  return (
    <div>
      <HowItWorks information= {AboutContent}/>
      <OurTeam/>
      section
      <section id="cta" className="bg-secondary">
      <CtaDownloadApp/>
      </section>
    </div>
  )
}

export default About