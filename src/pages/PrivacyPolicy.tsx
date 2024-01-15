import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
import { motion } from 'framer-motion';

const Privacy = (props: any) => {
  const Termsdata = props.information.privacyPolicy;
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="container">
      <h1 className="text-center text-3xl text-primary font-bold mt-8">
        Privacy Policy
      </h1>
      <div className="terms text-start">
        {Termsdata.map(
          (
            termsofservice: {
              subContent: ReactNode;
              subTitle: ReactNode;
              title:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              content:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
            },
            key: Key | null | undefined
          ) => {
            return (
              <div key={key}>
                <h3 className="fw-bold fs-5 text-primary" key={key}>
                  {termsofservice.title}
                </h3>
                <p>{termsofservice.content}</p>
                <p>
                  <span className="text-primary fw-semibold">
                    {termsofservice.subTitle}
                  </span>
                  {termsofservice.subContent}
                </p>
              </div>
            );
          }
        )}
      </div>
    </motion.section>
  );
};

export default Privacy;
