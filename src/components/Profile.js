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
        <div className='contactinfo'>
          <tr>
            <td><h1>MY CONTACT INFO</h1></td>
          </tr>
          <tr>
            <td><label htmlFor='email'>Email</label></td>
            <td><input name='email' type='text' /></td>
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
