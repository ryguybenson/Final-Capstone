import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

class Dashboard extends Component {
  render(){
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

export default Dashboard;