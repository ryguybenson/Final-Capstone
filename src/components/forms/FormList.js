import React from 'react'
import FormSummary from './FormSummary'
import { Link } from 'react-router-dom'

const FormList = ({forms}) => {

  return (
    <div className="form-list section">
      { forms && forms.map(form => {
        return (
          <Link to={'/form/' + form.id} key={form.id}>
            <FormSummary form={form} />
          </Link>
        )
      })}  
    </div>
  )
}

export default FormList