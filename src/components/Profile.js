import React, { Component } from 'react'
import { Link } from 'react-router'
import SessionButton from './SessionButton'
import withAuth from '../utils/withAuth'
import moment from 'moment'

@withAuth
// component within a component
class Profile extends Component {

  state = {
    email: null,
    found: false,
    fromDate: null,
    guestCount: 0,
    name: null,
    toDate: null,
    typeOfRoom: ''
  }

  componentDidMount () {
    this._getBooking()
  }

  // render () {
  //   const categories = data.menu.map((category, i) => {
  //     return <li key={i}>
  //       <Link to={`/menu/${category.slug}`} activeClassName='active'>
  //         {category.name}
  //       </Link>
  //     </li>
  //   })
  updatePhoto () {
    console.log('getting photo')
    if (this.props.auth.isSignedIn) {
      return (
        <img src={this.props.auth.picture} alt='profilephoto' />
      )
    }
    return (
      <img src='' alt='profilephoto' />
    )
  }

  _getBooking = () => {
    const url = 'http://ecohostelapi.azurewebsites.net/api/Reservation'
    window.fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.auth.token
      }
    }).then((r) => r.json()).then((data) => {
      this.setState(data)
    })
  }

  _removeBooking = () => {
    const url = 'http://ecohostelapi.azurewebsites.net/api/Reservation'
    window.fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.auth.token
      }
    }).then(() => {
      console.log('removing')
      this._getBooking()
    })
  }

  upcoming () {
    if (this.state.found) {
      return <div className='upcoming'>
        <img src='https://github.com/satoftegaard/eco-hostel/blob/master/upcomingtrip.jpg?raw=true' alt='You have one upcoming trip!' />
        <h3>From: {moment(this.state.fromDate).format('MMMM Do YYYY')}</h3>
        <h3>To: {moment(this.state.toDate).format('MMMM Do YYYY')}</h3>
        <h4>A {this.state.typeOfRoom} for {this.state.guestCount} guest(s)</h4>
        <p><button onClick={this._removeBooking}>Cancel</button></p>
      </div>
    } else {
      return <div className='upcoming'>
        <h2>You have no upcoming trips planned. :(</h2>
      </div>
    }
  }

  render () {
    return <div>
      <header>
        <nav>
          <h1><Link to='/'><img src='https://github.com/satoftegaard/eco-hostel/blob/master/src/logo.png?raw=true' /></Link></h1>
          <div className='photo'>{this.updatePhoto()}</div>
          {/* <div><img src={this.props.auth.picture} alt='profilephoto' /></div> */}
          <ul className='nav'>
            <li>
              <SessionButton />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='contactinfo'>
          <tr>
            <td><h1>MY CONTACT INFO</h1></td>
          </tr>
          <tr>
            <td><label htmlFor='email'>Email</label></td>
            <td><input name='email' type='text' value={this.props.auth.profile.email} /></td>
          </tr>
          <tr>
            <td><label htmlFor='phone'>Phone number</label></td>
            <td><input name='phone' type='text' /></td>
          </tr>
          <tr>
            <button className='save'>SAVE</button>
          </tr>
        </div>
        <div className='contact' />
        {this.upcoming()}
        <div className='make-sure'>
          <p>While you’re there, make sure to check out...</p>
        </div>
        <div className='categories'>
          <ul>
            <li><Link activeClassName='active' to='/profile/volunteer'>VOLUNTEER TIMES</Link></li>
            <li><Link activeClassName='active' to='/profile/events'>EVENTS</Link></li>
            <li><Link activeClassName='active' to='/profile/classes'>CLASSES</Link></li>
            <li><Link activeClassName='active' to='/profile/rules'>RULES</Link></li>
          </ul>
          {this.props.children}
        </div>
      </main>
    </div>
  }
}

export default Profile
