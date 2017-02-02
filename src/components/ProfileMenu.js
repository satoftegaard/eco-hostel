import React, { Component } from 'react'
// import { Link } from 'React-router'
import data from '../data.json'

class ProfileMenu extends Component {

  static propTypes = {
    params: React.propTypes.object.isRequired
  }

  render () {
    const category = data.menu.find(c => c.slug === this.props.params.slug)
    const items = category.items.map((item, i) => {
      return <ProfileMenu category={item.name} description={item.description} />
    })

    return <section>
      <h3>{this.props.name}</h3>
      <table>
        <tbody>
          {items}
        </tbody>
      </table>
    </section>
  }
}

export default ProfileMenu
