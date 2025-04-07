import React from "react";

function CandidateDashboard({ id }) {
  return (
    <div className="dashboard">
      <nav className="navbar fixed border-bottom border-body navbar-expand-lg bg-body">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={`/candidate/home/${id}`}
                >
                  My Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href={`/candidate/${id}/jobs`}>
                  Job Postings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CandidateDashboard;
