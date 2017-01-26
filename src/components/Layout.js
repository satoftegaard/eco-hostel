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
          <h1 />
          <ul className='nav'>
            <li>
              <Link to='/profile' />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  }
}

export default Layout
