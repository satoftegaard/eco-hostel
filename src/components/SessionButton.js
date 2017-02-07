import React, { Component } from 'react'
import { Link } from 'react-router'
import withAuth from '../utils/withAuth'

@withAuth
class SessionButton extends Component {

  _signOut = () => {
    this.props.auth.signOut()
  }

  _signIn = () => {
    this.props.auth.signIn()
  }

  signedIn () {
    return <div className='session'>
      <Link to='/profile'>
        <img src={this.props.auth.picture} width={60} />
      </Link>
      <ul>
        <li>
          <button onClick={this._signOut}>Sign Out</button>
        </li>
      </ul>
    </div>
  }

  signedOut () {
    return <div className='session'>
      <button onClick={this._signIn}>
        <img src='https://github.com/satoftegaard/eco-hostel/blob/master/profile-icon_06.png?raw=true' />
      </button>
    </div>
  }

  render () {
    const { auth } = this.props
    return auth.isSignedIn ? this.signedIn() : this.signedOut()
  }
}

export default SessionButton
