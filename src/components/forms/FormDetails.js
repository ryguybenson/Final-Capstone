import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const FormDetails = (props) => {

  const { form, auth } = props
  if (!auth.uid) return <Redirect to='/signin' />
  if (form) {
    return (
      <div className="container section form-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{form.answerOne}</span>
            <p>{form.answerTwo}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {form.answerOne} {form.answerTwo}</div>
            <div>{moment(form.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <p>Loading form...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const forms = state.firestore.data.forms;
  const form = forms ? forms[id] : null
  return {
    form: form,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'forms'
  }])
)(FormDetails)