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
      <main>
        <h1 />
        <p>40 Bed International Eco Hostel and cultural center offering classes in cooking, music, art, yoga, gardening, permaculture, hydroponics, languages, and sustainability. Looking to be an educational center for sustainability and simple living, while providing travelers an opportunity to connect with our local community through classes & tours. Some of our rooms will be created out of shipping containers, tiny houses, geo domes and other sustainable building ideas yet to be discovered!!!! We plan to offer workshops during our construction to teach others about the sustainable technology that we will be using, including (solar electric, solar hot water, geothermal heating & air conditioning, rain water collection for bathroom and gardening uses, edible landscaping, led lighting, etc...) We are looking to be LEED Platinum Certified. Do you have any knowledge you would like to share with us?</p>
        <p />
      </main>
    </div>
  }
}

export default Layout
