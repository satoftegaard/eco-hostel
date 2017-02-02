import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Profile from './Profile'
// import ProfileDocs from './ProfileDocs'
// import ProfileMenu from './ProfileMenu'
// import ProfileItem from './ProfileItem'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='profile' component={Profile} />
        {/* <Route path=':slug' component={ProfileDocs} /> */}
      </Route>
      {/* <Route path='/profilemenu' component={ProfileMenu} /> */}
      {/* <Route path='/profileitem' component={ProfileItem} /> */}
    </Router>
  }
}

export default App
