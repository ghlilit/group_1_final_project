import React from 'react'
import Popup from "reactjs-popup";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import "./RoomPopup.css"
import Timespot from "../Timespot"
const TIMESPOTS = "http://localhost:4000/timespots"
const BOOKINGS = "http://localhost:4000/bookings"
const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
const nextMonth = new Date(today.getTime() + 31 * 24 * 60 * 60 * 1000);

class RoomPopup extends React.Component {

  state = {
    user_id: 1,
    selectedDate: null,
    reserved: [],
    timespots: [],
    timeButtonText: "Pick the time",
    timespot_id: null,
  };
    
  getTimespots = async() => {
    let timespots;
    try {
      let result = await fetch(TIMESPOTS);
      timespots = await result.json();
    } catch (error) {
      }
    this.setState({
      timespots,
    })
  }

  getReservedSpots = async(date) => {
    const arr = [];
    let reserved;
    try {
      let result = await fetch(`${BOOKINGS}/${this.props.id}/${date.toISOString()}`);
      reserved = await result.json();
    } catch (error) {
      }
    reserved.forEach(timespot => {
      arr.push(timespot.timespot_id);
    });
      if(arr.length === 0){
        arr.push(404);
      }
    this.setState({
      reserved: arr,
    })
  }

 
  handleDateChange = date => {
    const noTimeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    this.setState({ 
      selectedDate: noTimeDate,
      reserved: []});
      this.getTimespots();
      this.getReservedSpots(noTimeDate);
  }

  handleHourChange = (text, id) => {
    this.setState({
      timeButtonText: text,
      timespot_id: id,
    })
  }

  handleReservation = async() => {
    const {user_id, timespot_id, selectedDate} = this.state;
    const data = {
      user_id,
      timespot_id,
      room_id: this.props.id,
      book_date: selectedDate.toJSON()
    }
    const Params = {
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        method: "POST"
    }
    try {
      await fetch(BOOKINGS, Params);
      alert("Reservation successful. \nPlease pay at the reception and get further assistance. \nDon't forget to bring your WeWork card.");
    } catch (error) {
      }
    this.getReservedSpots(this.state.selectedDate);
    this.setState({
      timeButtonText: "Pick the time",
      reserved: [],
      timespot_id: null,
      selectedDate: null
    })
  }

  render() {
    const { selectedDate, reserved, timeButtonText, timespots, timespot_id } = this.state;
    return (
      <Popup trigger={ <button className = "btn btn-outline-dark">Reserve</button> } modal>
          <div className = "text-center">
            <h4 className = " cover-heading popup-text">Reserve {this.props.name}</h4>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker value={selectedDate}
                onChange={this.handleDateChange}
                maxDate = {nextMonth}
                minDate = {tomorrow}
                disablePast />
            </MuiPickersUtilsProvider>
                {!selectedDate && 
                  <div className = "text-center"> 
                    <p>Pick a date </p>
                    <span>The earliest reservation day is tomorrow and the latest is next month.</span> <br/>
                    <span>Contact us for special cases!</span>
                  </div>}
                {reserved.length===9 && selectedDate &&
                  <div>All day reserved, please pick another day or room.</div>}
                {selectedDate && 
                  <div className="dropdown">
                    <button className="btn btn-outline-dark dropdown-toggle btn-popup"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      {timeButtonText}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {timespots.map((timespot,index) => 
                        <Timespot
                          reserved = {reserved.includes(timespot.id)}
                          id = {timespot.id}
                          hours = {timespot.hours}
                          key = {timespot.hours}
                          handleHourChange = {this.handleHourChange}/>)}
                    </div>
                    </div>}
                {timespot_id && 
                <div>
                <button
                  className = "btn btn-lg btn-success btn-popup-submit"
                  onClick = {this.handleReservation}>
                  Make a reservation
                  </button>
                </div>}
          </div>
      </Popup>
    )
  }
}

export default RoomPopup;