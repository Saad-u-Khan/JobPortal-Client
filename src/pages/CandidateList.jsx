import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import { Link, useParams } from "react-router-dom";
import RecruiterDashboard from "../components/RecruiterDashboard";

function CandidateList() {
  const { id } = useParams();
  const [listOfCandidates, setListOfCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get("http://localhost:8080/candidates");
        setListOfCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    fetchCandidates();
  }, [listOfCandidates]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/candidates/${id}`
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
                <td>
                  <Link
                    to={`/candidate/update/${candidate.id}`}
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
