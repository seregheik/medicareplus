import ContactComponent from "../components/ContactComponent"
import { ContactDetails } from "../data"
import CtaDownloadApp from "../components/CtaDownloadApp"
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <ContactComponent information={ContactDetails}/>
      <div className="bg-secondary"> <CtaDownloadApp /></div>
    </motion.div>
  )
}

export default Contact