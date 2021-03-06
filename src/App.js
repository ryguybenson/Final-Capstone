import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import FormDetails from './components/forms/FormDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import CreateForm from './components/forms/Form'
import Faq from './components/new/Faq'
import Locations from './components/new/Locations'
import Order from './components/new/Order'
import Policies from './components/new/Policies'
import Profile from './components/profile/Profile'
import Schedule from './components/schedule/Schedule'
import Dashschedule from './components/dashschedule/Dashschedule'
import About from './components/new/About'


class App extends Component {

  render() {
    
    var main = {
      backgroundColor: '#E5EEF3',
      height: '100%',
      minHeight: '100vh'
    }
    
    return (
      <BrowserRouter>
        <div className="App" style={main}>
          <Navbar />
          <Switch>
            <Route exact path='/'component={Profile} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/form' component={CreateForm} />
            <Route path='/create' component={CreateProject} />
            <Route path='/faq' component={Faq} />
            <Route path='/locations' component={Locations} />
            <Route path='/order' component={Order} />
            <Route path='/policies' component={Policies} />
            <Route path='/profile' component={Profile} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
