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
    return <section>
      <p>Volunteer info</p>
    </section>
  }
}

export default Volunteer
