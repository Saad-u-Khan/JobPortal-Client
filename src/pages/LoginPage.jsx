import axios from "axios";
import React, { useEffect, useState } from "react";
import Error from "../components/Error";
import { useNavigate } from "react-router-dom";

function LoginPage({ loginType }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (loginType === "candidate") {
      try {
        const response = await axios.post(
          "http://localhost:8080/candidates/login",
          values
        );
        
          sessionStorage.setItem("accessToken", response.data);
          console.log(response);
        const id = response.data.id;
        navigate(`/candidate/home/${id}`);
        
        
      } catch (error) {
        setFlag(true);
        setValues({
          email: "",
          password: "",
        });
        console.error("Some error occured", error);
      }
    } else if (loginType === "recruiter") {
      try {
        const response = await axios.post(
          "http://localhost:8080/recruiters/login",
          values
        );
        console.log(response);
        const id = response.data.id;
        navigate(`/recruiter/home/${id}`);
      } catch (error) {
        setFlag(true);
        setValues({
          email: "",
          password: "",
        });
        console.error("Some error occured", error);
      }
    }
  };

  useEffect(() => {
    let timer;
    if (flag) {
      timer = setTimeout(() => {
        setFlag(false); // Hide error message after 5 seconds
      }, 5000);
    }

    return () => clearTimeout(timer); // Cleanup on unmount or when flag changes
  }, [flag]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center form-container">
        <form onSubmit={handleClick}>
          {flag && (
            <span>
              <Error message={"Wrong Credentials. Try again!"} />
            </span>
          )}
          <h3 className="h3 mb-4">
            {loginType === "recruiter" ? "Recruiter Login" : "Candidate Login"}
          </h3>

          <div className="form-floating mb-2 custom-input">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="btn btn-dark w-100 py-2 mb-2" type="submit">
            Sign in
          </button>
          {loginType === 'candidate' && (
            <div className="text-center mt-2 login-text">
              <p>
                Don't have an account? <a href="/register">Sign up</a>
              </p>
            </div>
          )}
          
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
