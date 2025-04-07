import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import CandidateDashboard from "../components/CandidateDashboard";

function CandidateHome() {
  const { id } = useParams();
  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/candidates/${id}`
        );
        setCandidate(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching candidate: ", error);
      }
    };
    fetchCandidate();
  }, []);
  return (
    <div>
      <CandidateDashboard id={id} />
      <div className="main-content">
        <div className="mt-3 mx-5">
          <div className="col-md-11">
            <div className="bs">
            <h2>Your Profile Details: </h2>
              <h5><b>Name: </b>
              {candidate.name}</h5>
              <h5><b>Email: </b>
              {candidate.email}</h5>
               <h5> <b>Contact Information: </b>
               {candidate.contact} </h5>
             <h5><b>Qualification: </b>
             {candidate.qualification}</h5>
               <h5><b>Skills: </b>
               {candidate.skills} </h5>
              <h5><b>Experience: </b>
              {candidate.experience} years </h5>
              <h5><b>Location: </b>
              {candidate.location} </h5>
              
              <div className="update-profile-btn">
                <Link
                  to={`/candidate/update/${candidate.id}`}
                  className="btn btn-dark"
                >
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateHome;
