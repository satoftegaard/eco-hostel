import React, { Component } from 'react'
import { Link } from 'react-router'
// import Header from './Header'

class Profile extends Component {

  render () {
    return <div>
      <header>
        <nav>
          <h1><Link to='/'><img src='https://github.com/satoftegaard/eco-hostel/blob/master/src/logo.png?raw=true' /></Link></h1>
          <div><img src='https://github.com/satoftegaard/eco-hostel/blob/master/Me.png?raw=true' alt='profilephoto' /></div>
          <ul className='nav'>
            <li>
              <Link to='/profile'><img src='https://github.com/satoftegaard/eco-hostel/blob/master/profile-icon_06.png?raw=true' /></Link>
            </li>
          </ul>
          {this.props.children}
        </nav>
      </header>
      {/* <Header>
        <h2>HI</h2>
        <div><img src='https://github.com/satoftegaard/eco-hostel/blob/master/Me.png?raw=true' alt='profilephoto' /></div>
        <ul className='sec-buttons'>
          <li><img src='https://github.com/satoftegaard/eco-hostel/blob/master/my-docs_07.jpg?raw=true' /></li>
          <li><img src='https://github.com/satoftegaard/eco-hostel/blob/master/reminders-btn.jpg?raw=true' /></li>
        </ul>
      </Header> */}
      <main>
        <div className='upcoming'>
          <img src='https://github.com/satoftegaard/eco-hostel/blob/master/upcomingtrip.jpg?raw=true' alt='You have one upcoming trip!' />
          <p><a href='#'>Cancel</a> | <a href='#'>edit</a></p>
        </div>
        <div className='make-sure'>
          <p>While you’re there, make sure to check out...</p>
        </div>
        <div className='sections'>
          <ul>
            <li><button>VOLUNTEER TIMES</button></li>
            <li><button>EVENTS</button></li>
            <li><button>CLASSES</button></li>
            <li><button>RULES</button></li>
          </ul>
        </div>
      </main>
    </div>
  }
}

export default Profile
