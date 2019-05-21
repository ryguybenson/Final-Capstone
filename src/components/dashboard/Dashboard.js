import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render(){
    console.log(this.props)
    return (
      <div>
        <div>
          <div>
            <ProjectList />
          </div>
          <div>
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);