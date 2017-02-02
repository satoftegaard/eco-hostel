import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../data.json'
// import Header from './Header'

class Profile extends Component {

  componentDidMount () {
    if (!this.props.params.slug) {
      this.props.router.push('/menu/' + data.menu[0].slug)
    }
  }

  render () {
    const categories = data.menu.map((category, i) => {
      return <li key={i}>
        <Link to={`/menu/${category.slug}`} activeClassName='active'>
          {category.name}
        </Link>
      </li>
    })

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
      <main>
        <div className='upcoming'>
          <img src='https://github.com/satoftegaard/eco-hostel/blob/master/upcomingtrip.jpg?raw=true' alt='You have one upcoming trip!' />
          <p><a href='#'>Cancel</a> | <a href='#'>edit</a></p>
        </div>
        <div className='make-sure'>
          <p>While you’re there, make sure to check out...</p>
        </div>
        <div className='categories'>
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
