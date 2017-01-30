import React, { Component } from 'react'

class Home extends Component {

  render () {
    return <div className='home'>
      <h1>40 Bed International Eco Hostel <br />& Cultural Center</h1>
      <ul className='social'>
        <li><a href='https://www.facebook.com/stpetehostel/?fref=ts' ><i className='fa fa-facebook' aria-hidden='true' /></a></li>
        <li><a href='https://www.instagram.com/stpetehostel/' ><i className='fa fa-instagram' aria-hidden='true' /></a></li>
      </ul>
      <p>Offering classes in cooking, music, art, yoga, gardening, permaculture, hydroponics, languages, and sustainability. Looking to be an educational center for sustainability and simple living, while providing travelers an opportunity to connect with our local community through classes & tours. <br />We plan to offer workshops during our construction to teach others about the sustainable technology that we will be using, including (solar electric, solar hot water, geothermal heating & air conditioning, rain water collection for bathroom and gardening uses, edible landscaping, led lighting, etc...) We are looking to be LEED Platinum Certified.</p>
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
        <p>Property Gallery</p>
        <ul>
          <li><img src='https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/15622139_1633114333649274_1830936517661733639_n.jpg?oh=eb5afcafd4a168edb0ce57a87e168aa5&oe=59498EF9' /></li>
          {/* <div className='info-container' /> */}
          <li><img src='https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/16195892_1648095895484451_7314084950253886820_n.jpg?oh=75722d2def26b10fbdebfa1a630bddb4&oe=59114268' /></li>
          <li><img src='https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/16387126_1648095842151123_6861152548960249353_n.jpg?oh=a20f543b3607ce8ed932bcc7f6ae0cba&oe=59455334' /></li>
        </ul>
        <div className='zoom'><img src='https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/15622139_1633114333649274_1830936517661733639_n.jpg?oh=eb5afcafd4a168edb0ce57a87e168aa5&oe=59498EF9' />
        </div>
        <div className='buttons'>
          <ul>
            <li><a href='#'><img src='https://github.com/satoftegaard/eco-hostel/blob/master/request-btn.jpg?raw=true' /></a></li>
            <li><a href='#'><img src='https://github.com/satoftegaard/eco-hostel/blob/master/book-now-btn.jpg?raw=true' /></a></li>
          </ul>
        </div>
      </div>
    </div>
  }
}

export default Home
