import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import CandidateDashboard from "../components/CandidateDashboard";

function UpdateCandidate() {
  let { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    contact: "",
    qualification: "",
    skills: "",
    experience: "",
    location: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/candidates/${id}`
        );
        setValues(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching candidate:", error);
      }
    };
    fetchCandidate();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/candidates/${id}`,
        values
      );
      console.log(response);
      navigate(`/candidate/home/${id}`);
    } catch (error) {
      console.error("Error updating candidate:", error);
    }
  };

  return (
    <div>
      
      <CandidateDashboard id={id} />
        <div className="mt-3 mx-5">
          <div className="col-md-6">
          
            <div className="bs">
              <h2>Update Your Details: </h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={values.name || ""}
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={values.email || ""}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact" className="col-form-label">
                    Contact:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    value={values.contact || ""}
                    onChange={(e) =>
                      setValues({ ...values, contact: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="qualification" className="col-form-label">
                    Qualification:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="qualification"
                    value={values.qualification || ""}
                    onChange={(e) =>
                      setValues({ ...values, qualification: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="skills" className="col-form-label">
                    Skills:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="skills"
                    value={values.skills || ""}
                    onChange={(e) =>
                      setValues({ ...values, skills: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="skills" className="col-form-label">
                    Experience (in years):
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="experience"
                    value={values.experience || ""}
                    onChange={(e) =>
                      setValues({ ...values, experience: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="col-form-label">
                    Location:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={values.location || ""}
                    onChange={(e) =>
                      setValues({ ...values, location: e.target.value })
                    }
                  />
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-end">
              <Link to={`/candidate/home/${id}`} className="btn btn-secondary me-1 mb-3">
                Close
              </Link>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-dark mb-3"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default UpdateCandidate;
