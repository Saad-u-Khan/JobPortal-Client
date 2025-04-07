import React from "react";
import homescreen from "../images/homescreen.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BusinessIcon from "@mui/icons-material/Business";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section>
        <div className="container col-xxl-8 px-4 pt-5 home-container">
          <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={homescreen}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="max-width"
                height="max-height"
                loading="lazy"
              ></img>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Where Opportunity Meets Ambition
              </h1>
              <p className="lead">
                JobSeeker is your ultimate companion in the quest for the
                perfect job! Empowering candidates to effortlessly explore
                opportunities that match their skills and aspirations.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link
                  to={'/register'}
                  type="button"
                  className="btn btn-dark btn-lg px-4 me-md-2"
                >
                  Register
                </Link>
                <Link
                  to={'/login'}
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container col-lg-8 mt-4">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <CheckCircleIcon />
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Easy to use.</h3>
                <p>Just sign-up and find your next job!</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <BusinessIcon />
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Fortune 500.</h3>
                <p>
                  Discover the companies you have always dreamed of working at.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <EngineeringIcon />
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Guaranteed work.</h3>
                <p>
                  Provides guaranteed employment to anyone finding their next
                  job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="my-4">
          <div className="p-2 text-center bg-body-tertiary">
            <div className="container py-5">
              <h2 className="text-body-emphasis">
                "I no longer have to waste my time on other websites. JobSeeker
                provides an intuitive UI and helped find my dream job!"
              </h2>
              <p className="col-lg-8 mx-auto lead">Vikas, Mumbai</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              
              <li className="nav-item">
                <a href="/about" className="nav-link px-2 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© JobSeeker, Inc</p>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default Home;
