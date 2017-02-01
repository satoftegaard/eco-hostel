import React, { Component } from 'react'
import Icon from './Icon'

class Reservation extends Component {

  state = {
    fromDate: '',
    toDate: '',
    guestCount: 1,
    typeOfRoom: 'single'
  }

  render () {
    const { typeOfRoom } = this.state
    return <div className='reservation'>
      <ul className='details'>
        <li><Icon glyph='map-marker' /> 302 15th St. N, St. Petersburg, FL 33712</li>
        <li>
          Guests
          <input type='number' min={1} max={8} value={this.state.guestCount} onChange={(e) => this.setState({guestCount: e.target.value})} />
        </li>
        <li>When</li>
        <li className='roomType'>
          Type of Room
          <ul>
            <li>
              <Checkbox checked={typeOfRoom === 'single'} didClick={() => this.setState({typeOfRoom: 'single'})} /> Single
            </li>
            <li>
              <Checkbox checked={typeOfRoom === 'double'} didClick={() => this.setState({typeOfRoom: 'double'})} /> Double
            </li>
            <li>
              <Checkbox checked={typeOfRoom === 'communal'} didClick={() => this.setState({typeOfRoom: 'communal'})} /> Communal
            </li>
          </ul>
        </li>
      </ul>
      <div className='calendar' />
    </div>
  }
}

class Checkbox extends Component {

  render () {
    return <div className='checkbox' onClick={() => this.props.didClick()}>
      {this.props.checked ? <Icon glyph='check' /> : null}
    </div>
  }
}

export default Reservation