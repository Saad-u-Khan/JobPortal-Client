import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import { Link, useParams } from "react-router-dom";
import RecruiterDashboard from "../components/RecruiterDashboard";

function CandidateList() {
  const { id } = useParams();
  const [listOfCandidates, setListOfCandidates] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState({});
  const accessToken = sessionStorage.getItem("accessToken");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get("http://localhost:8080/candidates", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setListOfCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    fetchCandidates();
  }, [listOfCandidates]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/applies/getAllApplies`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      
      //apply comes from the response.data
      const jobsMapping = response.data.reduce((acc, apply) => {
        //creating an accumulator array with specific candidate id if it does not exist
        acc[apply.CandidateId] = acc[apply.CandidateId] || [];
        //pushing the job id to that specific (candidate id) accumulator array created above
        acc[apply.CandidateId].push(apply.JobId);
        return acc;
      }, {});
      
      setAppliedJobs(jobsMapping);
      } catch (error) {
        console.error("Error fetching applied jobs", error);
      }
    };
    
    fetchAppliedJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/candidates/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
      {
        /**setListOfCandidates function takes oldCandidates, as an argument,
        which is a function which takes the current state and returns a new state */
      }
      setListOfCandidates((oldCandidates) =>
        oldCandidates.filter((candidate) => candidate.id !== id)
      );
    } catch (error) {
      console.error("Error deleting candidate", error);
    }
  };

  return (
    <div>
      <RecruiterDashboard id={id}/>
      <h2 className="mt-3 mx-5">Candidate List</h2>
      <div className="d-flex justify-content-end me-5">
        <Modal />
      </div>
      <table className="table table-hover mt-5 mx-5">
        <thead>
          <tr>
            <th scope="col">Candidate Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Qualification</th>
            <th scope="col">Skills</th>
            <th scope="col">Experience (in years)</th>
            <th scope="col">Location</th>
            <th scope="col">Applied Jobs (Job Id)</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {listOfCandidates.map((candidate, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th scope="row">{candidate.id}</th>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                <td>{candidate.contact}</td>
                <td>{candidate.qualification}</td>
                <td>{candidate.skills}</td>
                <td>{candidate.experience}</td>
                <td>{candidate.location}</td>
                <td>{appliedJobs[candidate.id]?.join(', ') || 'N/A'}</td>
                <td>
                  <Link
                    to={`/recruiter/${id}/candidate/update/${candidate.id}`}
                    className="btn btn-dark me-1"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(candidate.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default CandidateList;
