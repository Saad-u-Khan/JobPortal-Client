import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CandidateList from './pages/CandidateList'
import Navbar from './components/Navbar'
import UpdateCandidate from './pages/UpdateCandidate'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import UpdateJob from './pages/UpdateJob'
import AddJob from './pages/AddJob'
import About from './pages/About'
import CandidateHome from './pages/CandidateHome'
import Login from './pages/Login'
import Register from './pages/Register'
import RecruiterHome from './pages/RecruiterHome'
import CandidateJobList from './pages/CandidateJobList'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/candidate/home/:id' element={<CandidateHome/>}/>
        <Route path='/candidate/update/:id' element={<UpdateCandidate/>}/>
        <Route path='/candidate/:id/jobs' element={<CandidateJobList/>}/>

        <Route path='/recruiter/home/:id' element={<RecruiterHome/>}/>
        <Route path='/recruiter/:id/job/add' element={<AddJob/>}/>
        <Route path='/recruiter/:id/job/update/:jobId' element={<UpdateJob/>}/>
        <Route path='/recruiter/:id/candidates' element={<CandidateList/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
