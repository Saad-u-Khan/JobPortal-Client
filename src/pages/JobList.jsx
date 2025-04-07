import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ApplyButton from "./ApplyButton";

function JobList({ id }) {
  const [listOfJobs, setListOfJobs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jobs");
        setListOfJobs(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    fetchJobs();
  }, [listOfJobs]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/jobs/${id}`);
      console.log(response);
      setListOfJobs((oldJobs) => oldJobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting job", error);
    }
  };

  return (
    <div>
      <h2 className="mt-3 mx-5">Job Postings</h2>
      <div className="d-flex justify-content-end me-5">
        {location.pathname === `/recruiter/home/${id}` && (
          <Link to={`/recruiter/${id}/job/add`} className="btn btn-success">
            Add a New Job
          </Link>
        )}
      </div>
      {listOfJobs.map((job, index) => {
        const dateTime = new Date(job.createdAt);
        const dateOnly = dateTime.toLocaleDateString();
        return (
          <div className="accordion mt-3 mb-3 mx-5" key={index}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                  aria-controls={`collapse${index}`}
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  <div className="d-flex flex-column align-items-start">
                    <h5>
                      <b>{job.role}</b>
                    </h5>
                    <span>{job.name}</span>
                    <span>{job.location}</span>
                  </div>
                </button>
              </h2>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse ${
                  openIndex === index ? "show" : ""
                }`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="d-flex flex-column align-items-start">
                    <span>
                      <b>Job Id: </b>
                      {job.id}
                    </span>
                    <span>
                      <b>Job Description: </b>
                      {job.description}
                    </span>
                    <span>
                      <b>Skills Required: </b>
                      {job.skills}
                    </span>
                    <span>
                      <b>Employment Type: </b>
                      {job.type}
                    </span>
                    <span>
                      <b>Experience: </b>
                      {job.experience} years
                    </span>
                    <span>
                      <b>Salary: </b>₹{job.salary}
                    </span>
                    <span>
                      <b>Posted On: </b>
                      {dateOnly}
                    </span>
                  </div>
                  <div className="d-flex justify-content-end me-5">
                    {location.pathname === `/recruiter/home/${id}` && (
                      <>
                        <Link
                          to={`/recruiter/${id}/job/update/${job.id}`}
                          className="btn btn-dark me-1"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </>
                    )}
                    {location.pathname === `/candidate/${id}/jobs` && (
                      <>
                        <ApplyButton candidateId={id} jobId={job.id}/>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobList;
