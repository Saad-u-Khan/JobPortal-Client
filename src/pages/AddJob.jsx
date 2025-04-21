import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RecruiterDashboard from "../components/RecruiterDashboard";

function AddJob() {

    const [values, setValues] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const accessToken = sessionStorage.getItem("accessToken");
            const response = await axios.post('http://localhost:8080/jobs', values, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            console.log(response);
            navigate(`/recruiter/home/${id}`);
        } catch (error) {
            console.error('Error adding job: ', error);
        }
    }
  return (
    <div>
      <RecruiterDashboard id={id}/> 
    <div className="mt-3 mx-5">
      <div className="col-md-6">
        <div className="bs">
          <h2>Add a New Job</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <input type="text" className="form-control" id="role"
              onChange={e => setValues({...values, role: e.target.value})} />
            </div>

            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input type="text" className="form-control" id="companyName"
              onChange={e => setValues({...values, name: e.target.value})} />
            </div>

            <div className="mb-3">
              <label htmlFor="jobDescription" className="form-label">
                Job Description
              </label>
              <textarea
                className="form-control"
                id="jobDescription"
                rows="3"
                onChange={e => setValues({...values, description: e.target.value})}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="skills" className="form-label">
                Skills
              </label>
              <input type="text" className="form-control" id="skills"
              onChange={e => setValues({...values, skills: e.target.value})} />
            </div>

            <div className="mb-3">
              <label htmlFor="employmentType" className="form-label">
                Employment Type
              </label>
              <select className="form-control" id="employmentType"
              onChange={e => setValues({...values, type: e.target.value})}>
                <option value="">Select...</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="experience" className="form-label">
                Experience (in years)
              </label>
              <input type="text" className="form-control" id="experience"
              onChange={e => setValues({...values, experience: e.target.value})} />
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">
                Salary
              </label>
              <input type="text" className="form-control" id="salary"
              onChange={e => setValues({...values, salary: e.target.value})} />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input type="text" className="form-control" id="location"
              onChange={e => setValues({...values, location: e.target.value})} />
            </div>
            <div className="d-flex justify-content-end mb-3">
              <Link to={`/recruiter/home/${id}`} className="btn btn-secondary me-1">
                Close
              </Link>
              <button onClick={handleClick} type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddJob;
