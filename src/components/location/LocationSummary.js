import React from 'react'
import moment from 'moment'

const LocationSummary = ({schedule}) => {

  return (
    <div className="card z-depth-0 form-summary">
      <div className="card-content grey-text text-darken-3">
        <div className='center'>
          <p>Your shoot is scheduled for: {schedule.shoot}</p>
          <p>Location: 10801 nw 26th ave</p>
        </div>
        <div className='center'>
          <p>Your reveal session is scheduled for: {schedule.reveal}</p>
          <p>My studio address is: 1234 vancouver building</p>
        </div>
      </div>
    </div>
  )
}

export default LocationSummary