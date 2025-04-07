import React, { useState, useEffect } from "react";
import axios from "axios";

function ApplyButton({ candidateId, jobId }) {
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    const checkApplicationStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/applies/check/${candidateId}/${jobId}`);
        if (response.data.applied) {
          setApplied(true);
        }
      } catch (error) {
        console.error("Error checking application status:", error);
      }
    };
    checkApplicationStatus();
  }, [candidateId, jobId]);

  const handleApply = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/applies/${candidateId}`, {
        jobId: jobId
      });
      
        console.log(response);
      setApplied(true);
      
      
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  };

  return (
    <div>
      {applied ? (
        <button disabled className="btn btn-secondary">Applied</button>
      ) : (
        <button onClick={handleApply} className="btn btn-success">Apply</button>
      )}
    </div>
  );
}

export default ApplyButton;
