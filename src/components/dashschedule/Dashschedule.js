import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import ScheduleList from '../schedule/ScheduleList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashschedule extends Component {

  render() {
    // console.log(this.props);
    const { schedules, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ScheduleList schedules={schedules} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    schedules: state.firestore.ordered.schedules,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'schedules' }
  ])
)(Dashschedule)