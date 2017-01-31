import React from 'react'

const Icon = (props) => {
  return <i className={`fa fa-${props.glyph}`} aria-hidden='true' />
}

export default Icon
