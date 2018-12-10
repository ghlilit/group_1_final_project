import React from 'react'
import './Rooms.css'
import NavBar from "../../Layout/NavBar"
import Carousel from "../../Small/Carousel"
import Room from "../../Small/Room"

class Rooms extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Carousel />
        <div className = "container">
          <Room id = "1"/>
          <Room id = "2"/>
          <Room id = "3"/>
          <Room id = "4"/>
          <Room id = "5"/>
          <Room id = "6"/>
          <Room id = "7"/>
          <hr className="featurette-divider"/>
        </div>
      </div>
    )
  }
}

export default Rooms;