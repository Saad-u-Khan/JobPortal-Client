import React from 'react'
import CandidateDashboard from '../components/CandidateDashboard';
import { useParams } from 'react-router-dom';
import JobList from './JobList';

function CandidateJobList() {
    const {id} = useParams();
    return (
      <div>
          <CandidateDashboard id={id}/>
          <JobList id={id}/>
      </div>
    )
}

export default CandidateJobList