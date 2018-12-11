import React from 'react'
import './Rooms.css'
import NavBar from "../../Layout/NavBar"
import Carousel from "../../Small/Carousel"
import Room from "../../Small/Room"
const ROOMS = "http://localhost:4000/rooms"

class Rooms extends React.Component {
  constructor(){
    super();
      this.state = {
        data: [],
        }
}

getRooms = async() =>{
  let data;
    try {
      let result = await fetch(ROOMS);
      data = await result.json();
    } catch (error) {
      }
      this.setState({
        data,
      })
  }

  componentDidMount = () => {
    this.getRooms();
  }

  render() {
    const {data} = this.state;
    return (
      <div>
        <NavBar />
        <Carousel />
        <div className = "container">
            {data.map((room, index) => 
              <Room 
              id = {index + 1}
              name = {room.name}
              price = {room.price}
              setup = {room.setup}
              capacity = {room.capacity}/> 
            )
            }
          <hr className="featurette-divider"/>
        </div>
      </div>
    )
  }
}

export default Rooms;