import { iconsvgimg } from "./components/iconsComponent";
import LanguageIcon from "@mui/icons-material/Language";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SearchIcon from "@mui/icons-material/Search";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import SocialLinks from "./components/SocialLinks";
import { IoAccessibility } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { FaPrescription } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { phoneadimg } from "./components/iconsComponent";





export const Title = {
  title: "Health Check Consult",
};
export const HomePagecontent = {
  homePageIntro:
    " is the first\
        digital pharmacy service in Nigeria",
  description:
    "Find your medication,\
        and the nearest \
        pharmacies with ease",
  feature: "Digital Pharmacy",
  featureQuestion: "How does this work?",
  AdSubHead: "Shop",
  AdMainHead: "Shop from any Pharmacy Near you and Search for your medication.",
  AdImage: phoneadimg,
  appearance: 'col-sm-12 col-lg-4 col-md-6',
  testimonyOne: {
    name: "Victoria Ero",
    title: "CEO, HealthyLife",
    review:
      "I was looking for a reliable source to get my medicine. I found it here!",
  },
  testimonyTwo: {
    name: "Efosa Ezomo",
    title: "Founder & CEO, MedMate",
    review: "This platform has made finding drugs easy for me.",
  },
  testimonyThree: {
    name: "Adewale Akinlade",
    title: "Nurse, Clinic-Online",
    review:
      "The app is very user friendly and helpful when searching for drugs.",
  },
  featureMessages: [
  {
    icon: <LanguageIcon />,
    title: "Step One",
    text: "Visit our website or download the app",
    appearance: ' col-lg-3',
  },
  {
    icon: <AppRegistrationIcon />,
    title: "Step Two",
    text: "Sign Up as a user or Pharmacist",
    appearance: ' col-lg-3',
  },
  {
    icon: <SearchIcon />,
    title: "Step Three",
    text: "Search Medication or Pharmacies, get location based results.",
    appearance: ' col-lg-3',
  },
  {
    icon: <AppRegistrationIcon />,
    title: "Step Four",
    text: "Order medication, Converse with Pharmacists, Get medical Advice, a world of health awaits you",
    appearance: ' col-lg-3',
  },
],
};
export const SearchPageContent = {
  search: <div>a</div>,
  icon: iconsvgimg,
};

export const Team = {
  teamTitle: "Meet Our Team",
  ChiefExec: "Efosa Ezomo",
  Founder: "Founder & CEO",
  CeoBio:
    "Born in Edo state, with a passion for health, technology and the arts, CEO, Efosa Ezomo is a revolutionary in the health sector, having , seeking to bridge the gap between health, pharmacy practice and technology.",
  Cto: "Tamaremin Clinton",
  Ctotitle: "CTO",
  CtoBio:
    "Educated as a pharmacist but with a strong technical background, Clinton aims to push the limits of what is deemed possible, and this is evident in the quality beaming through this company",
  Hord: "Agunu Victor",
  HordTitle: "Head of Research and development",
  HordBio:
    "well recognized as a scholar, Mr Agunu's passion for knowledge and science is evident in his dedication to ensure Medihale is the best possible version it can be",
};

export const CtaDownloadAppData = {
  header: "The Medihale Mobile App is here",
  sub: "The Medihale mobile app is now available on Google Play Store and App Store. Download the Mobile App now.",
};

export const AboutContent = {
  feature: "Why Medihale",
  featureQuestion:
  "Embracing a new era of pharmaceutical care tailored to meet your health needs.",
featureMessages: [
  {
    icon: <IoAccessibility/>,
    title: "Accessibility and Convenience",
    text: "Our app brings the pharmacy to you, Providing a seamless experience for your pharmaceutical needs. Access medications, health advice and services convienently, saving you time and effort.",
    appearance: 'col-lg-4'  ,
},
  {
    icon: <FaHandHoldingMedical/>,
    title: "Personalized Medication Management",
    text: "Enjoy the benefits of personalized medication management. Our app offers features such as medication reminders, dosage tracking, and automatic prescription refills",
    appearance: 'col-lg-4' ,  
},
  {
    icon: <MdLocationPin />,
    title: "Location-Based Services",
    text: "Our app helps you locate the nearest pharmacy, ensuring you have quick access to essential medications and professional advice whenever and wherever you need it.",
    appearance: 'col-lg-4' ,  
},
  {
    icon: <GrUserExpert />,
    title: "Expert Guidance and Consultation",
    text: "Connect with experienced pharmacists through our app for real-time consultations. Whether you have questions about medications, side effects, or general health concerns, our expert team is here to provide reliable advice and guidance, ensuring you make informed decisions about your health",
    appearance: 'col-lg-4' ,  
},
  {
    icon: <FaPrescription />,
    title: "Prescription Management Simplified",
    text: "Say goodbye to long waits and paperwork. Easily upload and manage your prescriptions within the app. Experience a streamlined process for prescription refills, transfers, and approvals.",
    appearance: 'col-lg-4' ,  
},
  {
      icon: <GrResources />,
      title: "Health and Wellness Resources",
      text: "Explore a comprehensive wellness hub within the app, offering health articles, tips, and information. Stay informed about health trends, preventive care, and lifestyle choices",
      appearance: 'col-lg-4' 
    },
],
};
export const ContactDetails ={
    feature: "Why Medihale",
    featureQuestion:
      "Contact Us",
      featureMessages: [
        {
          icon: <BsFillBuildingsFill />,
          title: "Addresses",
          text: <><div className="fw-semibold">Benin Office</div></>
        //   appearance: ' col-lg-4',
        },
        {
          icon: <BsFillTelephoneForwardFill />,
          title: "Call Our Line",
          text: <><a className="nav-link fw-semibold" href="tel:+2349027793805">+234 902 779 3805</a></>,
        },
        {
          icon: <MdAlternateEmail />,
          title: "Mail Us",
          text: <><a className="nav-link fw-semibold" href="mailto:info@medihaleconsult.com">info@medihaleconsult.com</a></>,
        },
        {
        //   icon: <FaRegBuilding />,
          title: "Visit Our Social Links",
          text: <div className="text-primary"><SocialLinks/></div>,
        },
       
      ],
}
export const TermsandConditions = {
  termsofservice: [
    {
      title: "Privacy Statemet",
      content:
        "Play Medihale Limited and its affiliates (“Medihale”) value the privacy \
            of individuals who access our Site, Applications (WhatsApp and mobile application),\
            and use our Services.\
            This Privacy Policy outlines the collection, use, and sharing of Personal Data by Medihale.\
            It specifies the types of Personal Data collected, the methods of collection employed by Medihale,\
            and details how you can exercise control over the use and sharing of your Personal Data. It informs\
             you what information the Healthcare Providers or other members can see when you use our Site, Applications,\
            and Services. It informs you of your rights and choices with respect to your Personal Data and how\
            you can contact us should you have any questions or concerns.\
            MEDIHALE SITES, APPLICATIONS, AND SERVICES WILL BE COLLECTING AND TRANSMITTING PERSONAL,\
             MEDICAL AND HEALTH-RELATED DATA ABOUT YOU. BY USING OUR SITE, APPLICATIONS AND SERVICES \
            YOU GIVE CONSENT THAT WE CAN COLLECT AND USE YOUR PERSONAL AND OTHER DATA AS DESCRIBED IN\
            THIS PRIVACY POLICY. IF YOU DO NOT AGREE, PLEASE DO NOT USE OUR SITE, APPLICATIONS OR\
            SERVICES. YOU HAVE THE RIGHT TO WITHDRAW YOUR CONSENT AT ANY TIME, PROVIDED\
    ",
    },
    {
      title: "Your Agreement to the Terms",
      content:
        "BY CLICKING I ACCEPT OR OTHERWISE ACCESSING OR USING THE SITES OR ANY OF THE SERVICES YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND BY THE TERMS. By clicking I ACCEPT or otherwise accessing or using any Services you also represent that you have the legal authority to accept the Terms on behalf of yourself and any party you represent in connection with your use of any Services. If you are an individual who is entering into these Terms on behalf of an entity, you represent and warrant that you have the power to bind that entity, and you hereby agree on that entity’s behalf to be bound by these Terms, with the terms “you,” and “your” applying to you, that entity, and other users accessing the Services on behalf of that entity. If you do not wish to be bound by any of these Terms of Use, you may not use the Sites or the Services.",
    },
    {
      title: "Description of the Services",
      content:
        "Medihale provides online Sites enabling its members access health information, engage healthcare professionals and obtain Medical/Healthcare Services available to its members within the Authorized Jurisdictions.\
            Whenever we use the words your Pharmacist or your doctor or healthcare provider or similar words on the Sites, including in these Terms of Use, we mean your personal doctor with whom you have of an actual, mutually acknowledged, Pharmacist/healthcare provider-patient relationship. If you participate in a Virtual Consultations on our Sites, you understand and agree that the Healthcare Professionals are not your primary care physician, and you agree not to use Medihale as a substitute for interactions with your primary care physician or health insurance. You acknowledge that although some Content may be provided by Healthcare professionals on the Sites, the provision of such Content does not constitute an opinion, medical advice, or diagnosis or treatment.\
            We do not recommend or endorse any specific Content, Services, tests, doctors, products, procedures, opinions, or other information that may be mentioned on the Sites. Reliance on Medihale Content or Services is solely at your own risk. Some Services and Content (including posts by Healthcare Professionals) may not be reviewed or certified by Medihale. We cannot guarantee that the Content and Services will help you achieve any specific goals or results. Content regarding dietary supplements or other treatments or regimens have not been evaluated by the relevant Food and Drug Administration authority and is not intended to diagnose, treat, cure, or prevent any disease.\
            Medihale encourages Healthcare Professionals to use the Services responsibly. Medihale shall make all reasonable efforts to ensure the Health Care Professionals’ availability. We will not be liable for cancelled or otherwise unfulfilled appointments, or any injury or loss resulting therefrom, or for any other injury or loss resulting or arising from, or related to, the use of the Sites or Services whatsoever.\
            Medihale contents and Services are not for use in a potential or actual medical emergency. CALL 911 OR YOUR LOCAL EMEGRGENCY HOTLINE OR YOUR DOCTOR FOR ALL MEDICAL EMERGENCIES.",
    },
    {
      title: "Healthcare Professionals",
      content:
        "The Healthcare Professionals who deliver Services through the Sites are independent professionals practicing within a group of independently owned professional practices collectively known as Healthcare Professionals. Medihale does not practice medicine or any other licensed profession and does not interfere with the practice of medicine or any other licensed profession by Healthcare Professionals, each of whom is responsible for his or her services and compliance with the requirements applicable to his or her profession and license. Neither Medihale nor any third parties who promote the Services or provide you with a link to the Services shall be liable for any professional advice you obtain from a Healthcare Professional via the Services. Users are advised to obtain further information relating to the Healthcare Professionals through their relevant professional licensing boards where necessary. MEDIHALE IS NOT RESPONSIBLE FOR VERIFYING THE MEDICAL QUALIFICATIONS OF THE HEALTHCARE PROFFESSIONALS PERFORMING THE SERVICES ON THE SITES AND DOES NOT MAKE ANY REPRESENTATION OR GUARANTEES WITH RESPECT TO THEIR MEDICAL QUALIFICATIONS.",
    },
    {
      title: "Your Use the Sites and the Services",
      content:
        "Medihale Sites are intended for personal use only. You may only use the Sites in compliance with this Agreement and all applicable laws and regulations. In connection with using the Sites and the Services, you understand that You are responsible for choosing your own Healthcare Provider, including without limitation, determining whether the applicable healthcare provider is suitable for your healthcare needs based on specialty, experience, qualification, licenses and other important facts and circumstances that could impact your care. In order to accept this Agreement and to use the Services, you must be at least 18 years of age Minimum Age. The Services are not intended for users under the Minimum Age. A parent or legal guardian may set up an account to help manage a child’s care. Parents or guardians must agree to (a) manage and control the account in accordance with applicable law, and (b) the use of their child’s data in accordance with our Privacy Policy in order to create such an account.",
    },
    {
      title: "Your User Account",
      content: "",
      subTitle: "Registration: ",
      subContent:
        "You must complete the registration process by providing the Company with the information as prompted by the applicable registration form. In registering, you agree to provide accurate, current, and complete information, and to keep it up to date at all times. You will also choose a username and password. Please do not choose as a username and email address that is indecent or offensive, or otherwise violates this Agreement or any applicable laws or regulations.",
    },
    {
      title: "",
      content: "",
      subTitle: "Responsibility for Account: ",
      subContent:
        "You are entirely responsible for maintaining the confidentiality of your password and account. Furthermore, you are entirely responsible for any and all activities that occur under your account. You agree to notify the Company immediately of any unauthorized use of your account or any other breach of security.",
    },
    {
      title: "",
      content: "",
      subTitle: "Sharing: ",
      subContent:
        "You may have the ability to share your Content with anyone of your choosing. If you decide to share your Content, we will send the recipient instructions for how to access your Content. You understand and agree that you decide with whom to share your Content and that you will have no remedies against us for how any recipient uses, shares, or otherwise processes your Content. You agree and authorize us to share your Content with whomever you have selected.",
    },
  ],
};

export const PrivacyPolicies = {
  privacyPolicy: [
    {
      title: "Privacy Statement",
      content:
        "Play Medihale Limited and its affiliates (Medihale) value the privacy of individuals who access our Sites and use our Services. This Privacy Policy describes the Personal Data that Medihale collects, how Medihale collects, uses, and shares the Personal Data, and which ways in which you can control how we use and share your Personal Data. It informs you what information the Healthcare Professionals or other members can see when you use our Sites and Services. It informs you of your rights and choices with respect to your Personal Data and how you can contact us should you have any questions or concerns. MEDIHALE SITES WILL BE COLLECTING AND TRANSMITTING PERSONAL, MEDICAL AND HEALTH RELATED DATA ABOUT YOU. BY USING THE SITE, YOU GIVE CONSENT THAT WE CAN COLLECT AND USE YOUR PERSONAL AND OTHER DATA AS DESCRIBED IN THIS SITE'S PRIVACY POLICY. IF YOU DO NOT AGREE, PLEASE DO NOT USE THE SITE. YOU HAVE THE RIGHT TO WITHDRAW YOUR CONSENT AT ANY TIME, PROVIDED THAT WE DO NOT HAVE ANOTHER LEGAL BASIS TO KEEP PROCESSING YOUR PERSONAL DATA.",
      subTitle: "",
      subContent: "",
    },
    {
      title: "Important Definitions",
      content: "",
      subTitle: "Personal Data ",
      subContent:
        "in this Privacy Policy, means Data about you that is personally identifiable to you, such as your contact information (e.g., name, address, email address, or telephone number), your images personally identifiable health or medical Data (Health Data), and any other non-public Data that is associated with such Data.",
    },
    {
      title: "",
      content: "",
      subTitle: "De-Identified Data, ",
      subContent:
        "means Data that is neither used nor intended to be used to personally identify an individual.",
    },
    {
      title: "Data We Receive or Collect from You",
      content: "",
      subTitle: "Registration Data: ",
      subContent:
        "When you register or create an account, you provide us with certain information, which includes your email address, telephone number, date of birth, gender, your image, and zip or postal code (the Registration Data), as well as a password for your account.",
    },
    {
      title: "",
      content: "",
      subTitle: "Payment Information: ",
      subContent:
        "If you choose to use a fee-based Service, you will be requested to provide (at a minimum) your name and payment information including payment card information (Payment Information). A third-party service provider that handles payments for us will also receive your payment card information.",
    },
    {
      title: "",
      content: "",
      subTitle: "Data You Choose to Provide to Us: ",
      subContent:
        "You have the ability to provide a variety of Data during your interactions with us and the Medihale Services, such as emails you may send us, information you respond to, and emails or newsletters that you sign up to receive. Medihale or third parties acting on our behalf receive data from you whenever you provide us with Data.",
    },
    {
      title: "",
      content: "",
      subTitle: "Contact Data: ",
      subContent:
        ": If you choose to participate in research studies or sign up for certain features, you may provide us, and we may collect, your contact Data, including your name, mailing address, and phone number (Contact Data).",
    },
    {
      title: "",
      content: "",
      subTitle: "",
      subContent: "",
    },
    {
      title: "",
      content: "",
      subTitle: "",
      subContent: "",
    },
    {
      title: "",
      content: "",
      subTitle: "",
      subContent: "",
    },
    {
      title: "",
      content: "",
      subTitle: "",
      subContent: "",
    },
    {
      title: "",
      content: "",
      subTitle: "",
      subContent: "",
    },
    {
      title: "",
      content: "",
      subTitle: "",
      subContent: "",
    },
    {
      title: "",
      content: "",
      subTitle: "",
      subContent: "",
    },
    {
      title: "",
      content: "",
      subTitle: "",
      subContent: "",
    },
    {
      title: "",
      content: "",
      subTitle: "",
      subContent: "",
    },
  ],
};
