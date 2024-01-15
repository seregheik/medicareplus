import { Paper } from "@mui/material";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const ContactComponent = (props: {
  information: {
    featureMessages: any;
    feature:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | null
      | undefined;
    featureQuestion:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | null
      | undefined;
  };
}) => {
  const featureMessage = props.information.featureMessages;

  // console.log(featureMessage);
  return (
    <div>
      <section id="how-it-works" className="bg-light pt-5 d-flex">
        <div className="align-self-center container">
          <div className="shop-header text-start text-primary">
            <div className="fs-6 fw-light work-sans shop-question">
              <p>{props.information.feature}</p>
            </div>
            <div className="shop-header pb-5">
              <h1 className="header pb-5 fs-1 fw-semibold">
                {props.information.featureQuestion}
              </h1>
            </div>
          </div>
          <div className="py-5 contact-shadow bg-white rounded-3 shop-features">
            <div className="row  row-clear p-3">
              {featureMessage.map(
                (
                  featuredmessage: {
                    appearance: any;
                    icon:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                    title:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                    text:
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
                    
                    <div
                      key={key}
                      className={"text-start col-md-6 col-sm-12 col-lg-3 " + featuredmessage.appearance}
                      
                    >
                      <Paper className="py-3 px-4 " elevation={0}>
                        <div style={{minHeight:'14rem'}}>
                        <div className=" py-2 featured-icon text-secondary fs-3">
                          {featuredmessage.icon}
                        </div>
                        <div className=" pt-2 featured-header ">
                          <h5 className="text-primary fw-semibold">
                            {featuredmessage.title}
                          </h5>
                        </div>
                        <div className="pt-3 featured-description">
                          {featuredmessage.text}
                        </div>
                        </div>
                      </Paper>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
