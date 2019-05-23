import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ScheduleDetails = (props) => {

  const { schedule, auth } = props
  if (!auth.uid) return <Redirect to='/signin' />
  if (schedule) {
    return (
      <div className="container section schedule-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{schedule.shoot}</span>
            <p>{schedule.reveal}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {schedule.shoot} {schedule.reveal}</div>
            <div>{moment(schedule.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading schedule...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const schedules = state.firestore.data.schedules;
  const schedule = schedules ? schedules[id] : null
  return {
    schedule: schedule,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'schedules'
  }])
)(ScheduleDetails)