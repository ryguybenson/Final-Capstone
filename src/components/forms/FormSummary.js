import React from 'react'
import moment from 'moment'

const FormSummary = ({form}) => {

  return (
    <div className="card z-depth-0 form-summary">
      <div className="card-content grey-text text-darken-3">
        <p>{form.answerOne}</p>
        <p>{form.answerTwo}</p>
        <p>{form.answerThree}</p> 
        <p>{form.answerFour}</p>
        <p>{form.answerFive}</p>
        <p>{form.answerSix}</p>
        <p className="grey-text">{moment(form.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default FormSummary