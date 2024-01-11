import { Paper } from "@mui/material";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const HowItWorks = (props: {
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
      <section id="how-it-works" className="pt-5 bg-light d-flex">
        <div className="align-self-center container">
          <div className="shop-header text-start text-primary">
            <div className="fs-4 fw-light work-sans shop-question">
              <p>{props.information.feature}</p>
            </div>
            <div className="shop-header">
              <h1 className="header fs-1 fw-semibold">
                {props.information.featureQuestion}
              </h1>
            </div>
          </div>
          <div className="py-5 shop-features">
            <div className="row p-3">
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
                      className={"p-4 text-start col-md-6 col-sm-12 " + featuredmessage.appearance}
                      
                    >
                      <Paper className="py-5  comment-shadow px-4 featured" elevation={0}>
                        <div className="box-height">
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

export default HowItWorks;
