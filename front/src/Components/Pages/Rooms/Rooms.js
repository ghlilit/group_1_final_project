import React from 'react'
import './Rooms.css'
import NavBar from "../../Layout/NavBar"
import Carousel from "../../Small/Carousel"
import Room from "../../Small/Room"
import Footer from '../../Layout/Footer';
import NotFound from "../NotFound"
import BookingPopup from '../../Small/BookingPopup';
const ROOMS = "http://localhost:4000/rooms"

class Rooms extends React.Component {

  state = { rooms: [], update: false }
  
  componentDidMount = async () => {
    const userdata = JSON.parse(sessionStorage.getItem('user'));
    let rooms;
      try {
        let result = await fetch(ROOMS);
        rooms = await result.json();
      } 
      catch (error) {
      }
      this.setState({
        rooms,
        userdata
      })
  }

  render() {
    const userdata = JSON.parse(sessionStorage.getItem('user'));
    const {rooms} = this.state;
    return (
      <div>
        {userdata &&  <div>
          <NavBar />
          <Carousel />
          <div className = "container">
          <hr className="featurette-divider"/>
            <div className = "text-center"><BookingPopup/></div>
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
        </div>}
        {!userdata && 
        <NotFound /> }
      </div>
    )
  }
}

export default Rooms;