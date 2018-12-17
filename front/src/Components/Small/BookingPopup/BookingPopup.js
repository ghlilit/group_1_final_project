import React from 'react'
import Popup from "reactjs-popup";

class BookingPopup extends React.Component {
    state = {
        bookings: []
    }
    getData = async()=>{
      const userdata = JSON.parse(sessionStorage.getItem('user'));
      let result = await fetch(`http://localhost:4000/bookings/search/${userdata.id}`);
      let bookings = await result.json()
      this.setState({
        bookings,
      })
    }

    componentDidMount = async()=> {
      this.getData()
    }

  render() {
      const {bookings} = this.state;
    return (
      <div>
        <Popup trigger={ <button className="btn btn-lg btn-outline-dark" onClick={this.getData()}>My Bookings</button>} modal>
            <div>
                {bookings.map((booking,index) => 
                    <p key = {index} >{booking.book_date.substr(0,10)} {booking.timespot} {booking.room}</p>)}
            </div>
        </Popup>
      </div>
    )
  }
}

export default BookingPopup;