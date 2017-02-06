import { Link } from 'react-router'
import React, { Component } from 'react'
import SessionButton from './SessionButton'

class Header extends Component {

  render () {
    return <header>
      <nav>
        <h1><Link to='/'><img src='https://github.com/satoftegaard/eco-hostel/blob/master/src/logo.png?raw=true' /></Link></h1>
        <ul className='nav'>
          <li />
          <li>
            <SessionButton />
          </li>
        </ul>
        {this.props.children}
      </nav>
    </header>
  }
}

export default Header
