import React from "react";
import notfound from "../images/not-found.jpg";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section>
      <div className="container col-xxl-8 px-4 pt-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={notfound}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="800"
              height="800"
              loading="lazy"
            ></img>
          </div>
          <div className="col-lg-6">
            <h3 className="fs-2 text-body-emphasis">Page Not Found</h3>
            <p className="lead">
              Oops! We couldn't find the page that you're looking for. Please
              check the address and try again.
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
  );
}

export default PageNotFound;
