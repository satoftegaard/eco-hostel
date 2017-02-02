import React, { Component } from 'react'

class ProfileItem extends Component {

  static propTypes = {
    category: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  }

  render () {
    return <tr>
      <th>{this.props.name}</th>
      <td>{this.props.description}</td>
    </tr>
  }
}

export default ProfileItem
