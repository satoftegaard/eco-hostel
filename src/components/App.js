import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Profile from './Profile'
import ProfileDocs from './ProfileDocs'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/profile' component={Profile}>
          <Route path=':slug' component={ProfileDocs} />
        </Route>
      </Route>
    </Router>
  }
  }

export default App
