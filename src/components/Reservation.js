import React, { Component } from 'react'
import Icon from './Icon'
import { browserHistory } from 'react-router'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import withAuth from '../utils/withAuth'

@withAuth
class Reservation extends Component {

  state = {
    fromDate: '',
    toDate: '',
    guestCount: 1,
    typeOfRoom: 'single'
  }

  _dateSelected = (dates) => {
    const [fromDate, toDate] = dates
    this.setState({
      toDate: toDate.format(),
      fromDate: fromDate.format()
    })
  }

  _requestBooking = () => {
    const url = 'http://ecohostelapi.azurewebsites.net/api/Reservation'
    window.fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.auth.token
      },
      body: JSON.stringify({
        ...this.state,
        name: this.props.auth.profile.name,
        email: this.props.auth.profile.email
      })
    }).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      browserHistory.push('/profile')
    })
  }

  render () {
    const { typeOfRoom } = this.state
    return <container><div className='reservation'>
      <ul className='details'>
        <li><Icon glyph='map-marker' /> 302 15th St. N, St. Petersburg, FL 33712</li>
        <li>
          Guests
          <input type='number' min={1} max={8} value={this.state.guestCount} onChange={(e) => this.setState({guestCount: e.target.value})} />
        </li>
        <li>When</li>
        <RangeCalendar onSelect={this._dateSelected} />
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
    </div>
      <div className='buttons'>
        <ul>
          <li>{
            this.props.auth.isSignedIn
             ? <button onClick={this._requestBooking}>Request Booking</button>
             : <button onClick={() => this.props.auth.signIn()}>Sign In</button>
          }</li>
        </ul>
      </div>
    </container>
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
