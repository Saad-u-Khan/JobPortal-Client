import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import CandidateDashboard from "../components/CandidateDashboard";
import ApplyButton from "./ApplyButton";

function MyApplies() {
  const { id } = useParams();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();
  const { listOfJobs } = location.state;

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/applies/candidate/${id}`
        );
        setAppliedJobs(response.data.map((apply) => apply.JobId));
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      }
    };
    fetchAppliedJobs();
  }, [id]);

  return (
    <div>
      <CandidateDashboard id={id} />
      <h2 className="mt-3 mx-5">My Applies</h2>
      <div className="d-flex justify-content-end me-5">
        <Link to={`/candidate/${id}/jobs`} className="btn btn-dark">
          Back
        </Link>
      </div>
      {listOfJobs
        .filter((job) => appliedJobs.includes(job.id))
        .map((job, index) => {
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
                      <ApplyButton candidateId={id} jobId={job.id} />
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

export default MyApplies;
