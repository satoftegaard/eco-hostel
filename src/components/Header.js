import React, { Component } from 'react'
import { Link } from 'react-router'
import SessionButton from './SessionButton'

class Header extends Component {

  render () {
    return <header>
      <nav>
        <h1><Link to='/'><img src='https://github.com/satoftegaard/eco-hostel/blob/master/src/logo.png?raw=true' /></Link></h1>
        <ul className='nav'>
          <li>
            <Link to='/profile'><img src='https://github.com/satoftegaard/eco-hostel/blob/master/profile-icon_06.png?raw=true' /></Link>
          </li>
        </ul>
        {this.props.children}
        <SessionButton />
      </nav>
    </header>
  }
}

export default Header
