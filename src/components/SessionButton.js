import React, { Component } from 'react'
import { Link } from 'react-router'
import withAuth from '../utils/withAuth'

@withAuth
class SessionButton extends Component {

  handleClick = () => {
    const { auth } = this.props
    auth.isSignedIn
      ? auth.signOut()
      : auth.signIn()
  }

  signedIn () {
    return <Link to='/profile'>
      <img src={this.props.auth.picture} width={60} />
    </Link>
  }

  signedOut () {
    return <button className='session' onClick={this.handleClick}>
      <img src='https://github.com/satoftegaard/eco-hostel/blob/master/profile-icon_06.png?raw=true' />
    </button>
  }

  render () {
    const { auth } = this.props
    return auth.isSignedIn ? this.signedIn() : this.signedOut()
  }
}

export default SessionButton
