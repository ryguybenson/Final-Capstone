import React from 'react'
import { Link } from 'react-router-dom';
import Dashboard from '.././dashboard/Dashboard'


function Profile(){
  
  return(
    
    <div>
      <div className='center'>
        <p>Your shoot is scheduled for: Monday the 22nd</p>
        <p>Location: 10801 nw 26th ave</p>
        <p>Time: 5:00</p>
      </div>
      <div className='center'>
        <p>Your reveal session is scheduled for: Thursday the 25th</p>
        <p>My studio address is: 1234 vancouver building</p>
        <p>Time: 5:00</p>
      </div>
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