import axios from "axios";
import React, { useEffect, useState } from "react";
import Success from "../components/Success";

function Register() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    contact: "",
    qualification: "",
    skills: "",
    experience: "",
    location: "",
  });

  const [flag, setFlag] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/candidates/auth",
        values
      );
      console.log(response);
      setFlag(true);
      setValues({
        email: "",
        password: "",
        name: "",
        contact: "",
        qualification: "",
        skills: "",
        experience: "",
        location: "",
      });
    } catch (error) {
      console.error("Some error occured", error);
    }
  };

  useEffect(() => {
    let timer;
    if (flag) {
      timer = setTimeout(() => {
        setFlag(false); // Hide success message after 5 seconds
      }, 5000);
    }
    return () => clearTimeout(timer); // Cleanup on unmount or when flag changes
  }, [flag]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center registration-form">
        <form onSubmit={handleClick}>
          {flag && (
            <span>
              <Success message={"Registration Successful!"} />
            </span>
          )}
          <h3 className="h3 mb-3">Candidate Registration Form</h3>
          <div className="form-floating mb-2">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
            />
            <label htmlFor="floatingInput">Name</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Contact"
              value={values.contact}
              onChange={(e) =>
                setValues({ ...values, contact: e.target.value })
              }
              required
            />
            <label htmlFor="floatingInput">Contact</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Qualification"
              value={values.qualification}
              onChange={(e) =>
                setValues({ ...values, qualification: e.target.value })
              }
              required
            />
            <label htmlFor="floatingInput">Qualification</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Skills"
              value={values.skills}
              onChange={(e) => setValues({ ...values, skills: e.target.value })}
              required
            />
            <label htmlFor="floatingInput">Skills</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Experience"
              value={values.experience}
              onChange={(e) =>
                setValues({ ...values, experience: e.target.value })
              }
              required
            />
            <label htmlFor="floatingInput">Experience (in years)</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Location"
              value={values.location}
              onChange={(e) =>
                setValues({ ...values, location: e.target.value })
              }
              required
            />
            <label htmlFor="floatingInput">Location</label>
          </div>

          <button className="btn btn-dark w-100 py-2 mt-3 mb-2" type="submit">
            Register
          </button>
          <div className="text-center mt-2 login-text">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
