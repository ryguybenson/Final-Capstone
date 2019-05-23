import React from 'react'
import ScheduleSummary from './ScheduleSummary'
import { Link } from 'react-router-dom'

const ScheduleList = ({schedules}) => {

  return (
    <div className="schedule-list section">
      { schedules && schedules.map(schedule => {
        return (
          <Link to={'/schedule/' + schedule.id} key={schedule.id}>
            <ScheduleSummary schedule={schedule} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ScheduleList