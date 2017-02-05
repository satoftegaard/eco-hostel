import React, { Component } from 'react'
import { Link } from 'react-router'
// import SessionButton from './SessionButton'

class Layout extends Component {

  layoutClassName () {
    if (this.props.location.pathname === '/') {
      return 'home'
    } else {
      return this.props.location.pathname.split('/').join(' ')
    }
  }

  render () {
    return <div className={`layout ${this.layoutClassName()}`}>
      {this.props.children}
      {/* <SessionButton /> */}
      <footer>
        <p>&copy; 2017 Eco Hostel. Built with &hearts; at The Iron Yard, in St. Pete, FL</p>
      </footer>
    </div>
  }
}

export default Layout
