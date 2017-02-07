import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import withAuth from '../utils/withAuth'

import Layout from './Layout'
import Home from './Home'
import Profile from './Profile'

import Volunteer from './Volunteer'
import Events from './Events'
import Classes from './Classes'
import Rules from './Rules'

// import ProfileDocs from './ProfileDocs'
// import ProfileMenu from './ProfileMenu'
// import ProfileItem from './ProfileItem'

@withAuth
class App extends Component {

  requireAuth = (nextState, replace) => {
    if (!this.props.auth.isSignedIn) {
      replace({ pathname: '/' })
    }
  }

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='profile' component={Profile} onEnter={this.requireAuth}>
          <Route path='volunteer' component={Volunteer} />
          <Route path='events' component={Events} />
          <Route path='classes' component={Classes} />
          <Route path='rules' component={Rules} />
        </Route>
        {/* <Route path=':slug' component={ProfileDocs} /> */}
      </Route>
      {/* <Route path='/profilemenu' component={ProfileMenu} /> */}
      {/* <Route path='/profileitem' component={ProfileItem} /> */}
    </Router>
  }
}

export default App
