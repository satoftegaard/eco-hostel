import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  layoutClassName () {
    if (this.props.location.pathname === '/') {
      return 'home'
    } else {
      return this.props.location.pathname.split('/').join(' ')
    }
  }

  render () {
    return <div className={`layout ${this.layoutClassName()}`}>
      <header>
        <nav>
          <h1><Link to='home' /></h1>
          <ul className='nav'>
            <li>
              <Link to='/profile'><img src='https://github.com/satoftegaard/eco-hostel/blob/master/profile.gif?raw=true' /></Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {this.props.children}
      </main>
      <footer>
        <p>&copy; 2017 Eco Hostel. Built with &hearts; at The Iron Yard, in St. Pete, FL</p>
      </footer>
    </div>
  }
}

export default Layout
