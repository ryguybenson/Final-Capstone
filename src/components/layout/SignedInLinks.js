import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import Faq from '.././new/Faq'
import About from '.././new/About'



const SignedInLinks = (props) => {

  return (
    <div>
      <ul>
      <li className='right'><NavLink to='/profile' className="btn btn-floating light-blue lighten-1">{props.profile.initials}</NavLink></li>
        <li className='left'><NavLink to='/faq'>FAQ's</NavLink></li>
        <li className='left'><NavLink to='/about'>About</NavLink></li>
        <li className='right'><a onClick={props.signOut}>Log Out</a></li>
      </ul>
    </div>
  )
}



const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}



export default connect(null, mapDispatchToProps)(SignedInLinks)