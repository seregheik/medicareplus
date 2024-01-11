import CEO from "../assets/images/EFOSA.png";
import CTO from "../assets/images/clint.png";
import ResearchManager from "../assets/images/agunu1.png";
import { Team } from "../data";

const OurTeam = () => {
  return (
    <section id="ourTeam" className="container py-5">
      <div className="our-team pt-5">
        <div className="team-title p-3 text-primary fw-light fs-5 ">
          Our Team
        </div>
        <div className="team-main-title pb-5 text-primary fw-bold display-6">
          The People Behind Us
        </div>
        <div className="d-flex justify-content-center text-center">
          <div className="row">
            <div className="col pt-5 d-flex justify-content-center team-content m-2">
              <div className="">
                <div className="card bg-secondary bg-opacity-50 card-width">
                  <img src={CEO} className="card-img-top" alt="..." />
                </div>
                <div className="card-width">
                  <div className="fs-5 fw-semibold text-primary">
                    {Team.ChiefExec}
                  </div>
                  <div className="text-secondary fw-light ">{Team.Founder}</div>
                  <div className="lead">{Team.CeoBio}</div>
                </div>
              </div>
            </div>
            <div className="col pt-5 d-flex justify-content-center team-content m-2">
              <div className="">
                <div className="card bg-dark  card-width">
                  <img src={CTO} className="card-img-top" alt="..." />
                </div>
                <div className="card-width">
                  <div className="fs-5 fw-semibold text-primary">
                  {Team.Cto}
                  </div>
                  <div className="text-secondary fw-light ">{Team.Ctotitle}</div>
                  <div className="lead">{Team.CtoBio}</div>
                </div>
              </div>
            </div>
            <div className="col pt-5 d-flex justify-content-center team-content m-2">
              <div className="">
                <div className="card bg-secondary card-width">
                  <img src={ResearchManager} className="card-img-top" alt="..." />
                </div>
                <div className="card-width">
                  <div className="fs-5 fw-semibold text-primary">
                  {Team.Hord}
                  </div>
                  <div className="text-secondary fw-light ">{Team.HordTitle}</div>
                  <div className="lead">{Team.HordBio}</div>
                </div>
              </div>
            </div>
            {/* <div className="col team-content m-2">
              <div className="card bg-dark bg-gradient card-width">
                <img src={CTO} className="card-img-top" alt="..." />
              </div>
              <div className="card-width text-center">
                <div className="fs-5 fw-semibold text-primary">{Team.Cto}</div>
                <div className="text-secondary fw-light">{Team.Ctotitle}</div>
                <div className="lead">{Team.CtoBio}</div>
              </div>
            </div> */}
            {/* <div className="col team-content m-2">
              <div className="card bg-secondary bg-gradient card-width">
                <img src={ResearchManager} className="card-img-top" alt="..." />
              </div>
              <div className="card-width text-center">
                <div className="fs-5 fw-semibold text-primary">{Team.Hord}</div>
                <div className="text-secondary fw-light">{Team.HordTitle}</div>
                <div className="lead">{Team.HordBio}</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
