import React from 'react'
import { Link } from 'react-router-dom'
import about from '../images/about.jpg'

function About() {
  return (
    <section>
      <div className="container col-xxl-8 px-4 pt-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={about}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="800"
              height="800"
              loading="lazy"
            ></img>
          </div>
          <div className="col-lg-6">
            <h3 className="fs-2 text-body-emphasis">About Us</h3>
            <p className="lead">
              JobSeeker is your only goto web application to help you
              find your dream job easily. With more than 1000+ recruiters from
              top companies around the world, start your new career with ease.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link
                to={"/"}
                type="button"
                className="btn btn-dark btn-lg px-4 me-md-2"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About