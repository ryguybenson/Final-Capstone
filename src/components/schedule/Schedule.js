import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSchedule } from '../../store/actions/scheduleActions'
import { Redirect } from 'react-router-dom'

class CreateSchedule extends Component {

  state = {
    shoot: '',
    reveal: '',
    location: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createSchedule(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signout' />
    var outer = {
      padding: '2%'
    }
    var top = {
      marginTop: '2%'
    }
    return (
      <div className="container" style={top}>
        <form className="white" onSubmit={this.handleSubmit}>
          <div style={outer}>
          <p>Select a date for your photoshoot</p>
          <input type='date' id='shoot' onChange={this.handleChange} />
          <p>Select a date for your reveal session</p>
          <input type='date' id='reveal' onChange={this.handleChange} />
          <p>Select a location for your reveal photoshoot</p>
          <input type='text' id='location' onChange={this.handleChange} />
          </div>
          <div className="input-field" style={outer}>
            <button className="btn pink lighten-1">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createSchedule: (schedule) => dispatch(createSchedule(schedule))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSchedule)
