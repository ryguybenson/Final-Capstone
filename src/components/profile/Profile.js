import React from 'react'
import { Link } from 'react-router-dom';
import Dashboard from '.././dashboard/Dashboard'
import Dashschedule from '.././dashschedule/Dashschedule'


function Profile(){
  
  return(
    
    <div>
      <Dashschedule />
      <div>
        <Link to="/form">Form</Link> <br/>
        <Link to="/Locations">Your Locations</Link> <br/>
        <Link to="/faq">FAQ's</Link> <br/>
      </div>
      <Dashboard />
    </div>
    
  )
  
  
  
}

export default Profile