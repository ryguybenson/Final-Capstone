import React from 'react'
import { Link } from 'react-router-dom';
import Dashboard from '.././dashboard/Dashboard'
import Dashschedule from '.././dashschedule/Dashschedule'


function Profile(){
  
  return(
    
    <div className="center">
      <Dashschedule />
      <Dashboard />
    </div>
    
  )
  
  
  
}

export default Profile