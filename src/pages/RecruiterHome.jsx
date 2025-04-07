import React from 'react'
import { useParams } from 'react-router-dom'
import RecruiterDashboard from "../components/RecruiterDashboard"
import JobList from './JobList';

function RecruiterHome() {
    const {id} = useParams();
  return (
    <div>
        <RecruiterDashboard id={id}/>
        <JobList id={id}/>
    </div>
  )
}

export default RecruiterHome