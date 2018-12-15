import React from 'react'
import './Rooms.css'
import NavBar from "../../Layout/NavBar"
import Carousel from "../../Small/Carousel"
import Room from "../../Small/Room"
import Footer from '../../Layout/Footer';
const ROOMS = "http://localhost:4000/rooms"

class Rooms extends React.Component {

  state = { rooms: [] }
  
  componentDidMount = async () => {
    let rooms;
      try {
        let result = await fetch(ROOMS);
        rooms = await result.json();
      } 
      catch (error) {
      }
      this.setState({
        rooms,
      })
      console.log(rooms);
  }

  render() {
    const {rooms} = this.state;
    return (
      <div>
        <NavBar />
        <Carousel />
        <div className = "container">
          {rooms.map((room, index) => 
            <Room 
              key = {room.name + room.id}
              id = {index + 1}
              name = {room.name}
              price = {room.price}
              setup = {room.setup}
              capacity = {room.capacity}/> 
            )}
          <hr className="featurette-divider"/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Rooms;