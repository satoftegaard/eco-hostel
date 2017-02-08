import React, { Component } from 'react'

class Volunteer extends Component {

  state = {
    things: []
  }

  componentDidMount () {
    // fetch API, setState({ things: DATAFROMAPI })
  }

  render () {
    // DO STUFF WITH this.state.things

    return <section className='volunteer'>
      <p>Volunteer Schedule</p>
      <ul>
        <li><b>Farm Day</b></li>
        <li>St. Pete Eco-Hostel</li>
        <li>February 2, 2017 - 4:00pm</li>
      </ul>
      <ul>
        <li><b>Cook for your Hostelmates!</b></li>
        <li>St. Pete Eco-Hostel</li>
        <li>February 19, 2017 - 4:00pm</li>
      </ul>
      <ul>
        <li><b>Farm Day</b></li>
        <li>St. Pete Eco-Hostel</li>
        <li>February 19, 2017 - 4:00pm</li>
      </ul>
      <ul>
        <li><b>Cleaning up the Park</b></li>
        <li>Williams Park, St. Pete FL</li>
        <li>February 19, 2017 4:00pm</li>
      </ul>
    </section>
  }
}

export default Volunteer
