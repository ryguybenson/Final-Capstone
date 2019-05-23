import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ScheduleSummary = ({schedule}) => {

  var border = {
    border: '3px solid #9ED3EB',
    backgroundColor: 'white',
    fontSize: '18px',
    paddingBottom: '20px'
  }
  var hr = {
    width: '60%'
  }
  
  return (
    <div>
      <div style={border}>
        <div>
          <p>Your shoot is scheduled for: {schedule.shoot}</p>
          <p>Meet at: {schedule.location}</p>
        </div> <hr style={hr}/>
        <div>
          <p>Your reveal session is scheduled for: {schedule.reveal}</p>
          <p>My studio address is: 1234 vancouver building</p>
          <Link to={'/schedule/' + schedule.id} key={schedule.id}>
            <button schedule={schedule}>Change</button>
          </Link> 
        </div>
      </div>
    </div>
  )
}

export default ScheduleSummary