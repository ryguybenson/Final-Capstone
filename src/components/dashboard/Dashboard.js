import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import FormList from '../forms/FormList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

  render() {
    // console.log(this.props);
    const { forms, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div>
        <div className="row">
            <FormList forms={forms} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    forms: state.firestore.ordered.forms,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'forms', limit: 1, orderBy: ['createdAt', 'desc'] }
  ])
)(Dashboard)