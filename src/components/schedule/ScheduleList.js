import React from 'react'
import ScheduleSummary from './ScheduleSummary'
import { Link } from 'react-router-dom'

const ScheduleList = ({schedules}) => {

  return (
    <div className="schedule-list section">
      { schedules && schedules.map(schedule => {
        return (
            <ScheduleSummary schedule={schedule} />
        )
      })}  
    </div>
  )
}

export default ScheduleList