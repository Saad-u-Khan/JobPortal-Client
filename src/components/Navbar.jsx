import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    navigate('/');
  }
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand fs-4">
          <WorkIcon className="ms-2 me-1 mb-1" />
          JobSeeker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
        {(location.pathname.startsWith('/candidate/') || location.pathname.startsWith('/recruiter/')) && (
          <> 
            <div className="justify-content-end">
              <button onClick={handleLogout} className="btn btn-warning">Logout</button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
