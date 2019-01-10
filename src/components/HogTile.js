import React from 'react'

const HogTile = props => {
  return (
    <li>
      <h3>{props.hog.name}</h3>
      <p>{props.hog.greased ? 'Greasy' : 'Dry'}</p>
      <p>{props.hog.specialty}</p>
      <p>{props.hog["highest medal achieved"]}</p>
    </li>
  )
}

export default HogTile;