import { Link } from "react-router-dom";
import { CtaDownloadAppData } from "../data";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

const CtaDownloadApp = () => {
  // console.log(CtaDownloadAppData)

  return (
    <div className="p-5">
      <section
        id="cta"
        className="d-flex text-light my-3 container medihale-intro"
      >
        <div className="row align-self-center">
          <div className="col-sm-12 col-lg-8 pb-5 text-center intro-content">
            <h1 className="fw-bold fs-1 text-start header-info">
              <span className="text-secondary"></span>
              {CtaDownloadAppData.header}
            </h1>
            <p className="text-start">{CtaDownloadAppData.sub}</p>
            <div className="text-start d-flex">
              <Link
                to="/sign-up"
                className="btn btn-sm text-center btn-secondary"
              >
                <div className="icon d-flex">
                  <div className="px-1">
                    <FaGooglePlay />
                  </div>
                  <p className="">Get On PlayStore</p>
                </div>
              </Link>
              <Link
                to="/sign-up"
                className="btn btn-sm text-center btn-secondary"
              >
                <div className="icon d-flex">
                  <div className="px-1">
                    <FaAppStoreIos />
                  </div>
                  <p className="">Get On AppStore</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 text-center image-container">
            {/* <img className="img-fluid" src={hero} alt="" /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CtaDownloadApp;
