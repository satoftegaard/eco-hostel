import React, { Component } from 'react'

class Home extends Component {

  render () {
    return <div className='home'>
      <h1 />
      <p>40 Bed International Eco Hostel and cultural center offering classes in cooking, music, art, yoga, gardening, permaculture, hydroponics, languages, and sustainability. Looking to be an educational center for sustainability and simple living, while providing travelers an opportunity to connect with our local community through classes & tours. <br />Some of our rooms will be created out of shipping containers, tiny houses, geo domes and other sustainable building ideas yet to be discovered!!!! We plan to offer workshops during our construction to teach others about the sustainable technology that we will be using, including (solar electric, solar hot water, geothermal heating & air conditioning, rain water collection for bathroom and gardening uses, edible landscaping, led lighting, etc...) We are looking to be LEED Platinum Certified. Do you have any knowledge you would like to share with us?</p>
      <div className='reservation'>
        <ul>
          <li>302 15th St. N, St. Petersburg, FL 33712</li>
          <li>Guests</li>
          <li>When</li>
          <li>Type of Room</li>
        </ul>
        <div className='calendar' />
      </div>
      <div className='gallery'>
        <ul>
          <li><img src='https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/15622139_1633114333649274_1830936517661733639_n.jpg?oh=eb5afcafd4a168edb0ce57a87e168aa5&oe=59498EF9' /></li>
          <li><img src='https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/15622139_1633114333649274_1830936517661733639_n.jpg?oh=eb5afcafd4a168edb0ce57a87e168aa5&oe=59498EF9' /></li>
          <li><img src='https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/15622139_1633114333649274_1830936517661733639_n.jpg?oh=eb5afcafd4a168edb0ce57a87e168aa5&oe=59498EF9' /></li>
        </ul>
        <div className='zoom'><img src='https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/15622139_1633114333649274_1830936517661733639_n.jpg?oh=eb5afcafd4a168edb0ce57a87e168aa5&oe=59498EF9' />
        </div>
        <div className='buttons'>
          <ul>
            <li><img src='https://github.com/satoftegaard/eco-hostel/blob/master/request-btn.jpg?raw=true' /></li>
            <li><img src='https://github.com/satoftegaard/eco-hostel/blob/master/book-now-btn.jpg?raw=true' /></li>
          </ul>
        </div>
      </div>
    </div>
  }
}

export default Home
