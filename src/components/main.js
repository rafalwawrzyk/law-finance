import React from 'react'
import SquaredBg from '../styles/blocks/SquareBlockBg'
import bg1 from '../images/architecture-building-center-27406.jpg'
import SquaredText from '../styles/blocks/SquaredText'



const Main = () => {
  return (
    <div>
      <div>
        <SquaredBg background={bg1}>About</SquaredBg>
        <SquaredText></SquaredText>
      </div>
      <div>
        <SquaredBg background={bg1}>About</SquaredBg>
        <SquaredText></SquaredText>
      </div>
      <div>
        <SquaredBg background={bg1}>About</SquaredBg>
        <SquaredText></SquaredText>
      </div>
    </div>
  )
}

export default Main
