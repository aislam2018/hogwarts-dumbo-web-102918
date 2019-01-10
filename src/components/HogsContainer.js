import React from 'react';
import HogTile from './HogTile';

const HogsContainer = props => {
  return (
    <ul>
    {
        props.hogList.map(hog => (
          <HogTile hog={hog} key={hog.name} />
        ))
    }
    </ul>
  )
}

export default HogsContainer;