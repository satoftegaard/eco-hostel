import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './Header'

class Profile extends Component {

  render () {
    return <div>
      {/* <ul className='sec-buttons'>
        <li><img src='https://github.com/satoftegaard/eco-hostel/blob/master/my-docs_07.jpg?raw=true' /></li>
        <li><img src='https://github.com/satoftegaard/eco-hostel/blob/master/reminders-btn.jpg?raw=true' /></li>
      </ul> */}
      {/* <header>
        <img src='https://github.com/satoftegaard/eco-hostel/blob/master/profile-pic_03.jpg?raw=true' alt='profilephoto' />
      </header> */}
      <Header>
        <h2>IM IN THE HEADER</h2>
      </Header>
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
