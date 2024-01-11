import ContactComponent from "../components/ContactComponent"
import { ContactDetails } from "../data"
import CtaDownloadApp from "../components/CtaDownloadApp"


const Contact = () => {
  return (
    <div>
      <ContactComponent information={ContactDetails}/>
      <div className="bg-secondary"> <CtaDownloadApp /></div>
     
    </div>
  )
}

export default Contact