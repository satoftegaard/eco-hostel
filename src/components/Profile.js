import React, { Component } from 'react'
import { Link } from 'react-router'
import SessionButton from './SessionButton'
import withAuth from '../utils/withAuth'
// import data from '../data.json'
// import Header from './Header'

@withAuth
// component within a component
class Profile extends Component {

  // componentDidMount () {
  //   if (!this.props.params.slug) {
  //     this.props.router.push('/menu/' + data.menu[0].slug)
  //   }
  // }

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
        <div className='contact'>
          {/* <form id='contact' method='post'> */}
          <h1>MY CONTACT INFO</h1>
          <p>Email</p>
          <p>Phone number</p>
          {/* <fieldset><input placeholder="Your name" type="text" tabindex="1" required autofocus>
          <fieldset>
              <input placeholder="Your Email Address" type="email" tabindex="2" required>
          </fieldset> */}
        </div>
        <div className='upcoming'>
          <img src='https://github.com/satoftegaard/eco-hostel/blob/master/upcomingtrip.jpg?raw=true' alt='You have one upcoming trip!' />
          <p><a href='#'>Cancel</a> | <a href='#'>edit</a></p>
        </div>
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
