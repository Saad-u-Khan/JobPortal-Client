import React, { useState } from "react";
import LoginPage from "./LoginPage";

function Login() {
  const [loginType, setLoginType] = useState(null);
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {!loginType && (
          <>
            <div className="col-md-6 d-flex align-items-center justify-content-center type-recruiter">
              <button
                onClick={() => setLoginType("recruiter")}
                className="btn btn-dark common-btn"
              >
                <h5>Recruiter Login</h5>
              </button>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-center type-candidate">
              <button
                onClick={() => setLoginType("candidate")}
                className="btn btn-secondary common-btn"
              >
                <h5>Candidate Login</h5>
              </button>
            </div>
          </>
        )}
      </div>
      {loginType && <LoginPage loginType={loginType} />}
    </div>
  );
}

export default Login;
