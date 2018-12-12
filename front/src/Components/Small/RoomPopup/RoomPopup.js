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
  constructor(){
    super();
    this.state = {
      user_id: 1,
      selectedDate: new Date(tomorrow),
      reserved: [],
      timespots: [],
      timeButtonText: "Pick the time",
      timespot_id: null,
      timePicked: false
    };
  }
    
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

  pickTime = (text, id) => {
    this.setState({
      timeButtonText: text,
      timespot_id: id,
      timePicked: true,
    })
  }
    
  handleDateChange = date => {
    const noTimeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    this.setState({ 
      selectedDate: noTimeDate,
      reserved: [],
      timeSelector: true});
      this.getTimespots();
      this.getReserved(noTimeDate);
  }

  handleReservation = async() => {
    const {user_id, timespot_id, selectedDate} = this.state;
    const room_id = this.props.id;
    const data = {
      user_id,
      timespot_id,
      room_id,
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
    } catch (error) {
      }
      this.getReserved(this.state.selectedDate);
      this.setState({
        timeButtonText: "Pick the time",
        timespot_id: null,
        timePicked: false})
      alert("Reservation successful");
  }

  getReserved = async(noTimeDate) => {
    const arr = [];
    let reserved;
    try {
      let result = await fetch(`${BOOKINGS}/${this.props.id}/${noTimeDate.toISOString()}`);
      reserved = await result.json();
    } catch (error) {
      }
    reserved.forEach(timespot =>{
      arr.push(timespot.timespot_id);
    });
      if(arr.length === 0){
        arr.push(404);
      }
    this.setState({
      reserved: arr,
    })
  }

  render() {
    const { selectedDate } = this.state;
    return (
      <div>
        <Popup trigger={ <button className = "btn btn-outline-dark">Reserve</button>} modal>
            <div className = "text-center">
            <h4 className = " cover-heading popup-text">Reserve {this.props.name}</h4>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={selectedDate}
             onChange={this.handleDateChange}
             maxDate = {nextMonth}
             minDate = {tomorrow}
             disablePast />
              </MuiPickersUtilsProvider>
                 {this.state.reserved.length!==0 && (<div className="dropdown">
                <button className="btn btn-outline-dark dropdown-toggle btn-popup"
                    type="button" id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                   {this.state.timeButtonText}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {console.log(this.state.reserved)}
                        {this.state.timespots.map(timespot => 
                      <Timespot
                      reserved = {this.state.reserved.includes(timespot.id)}
                      id = {timespot.id}
                      hours = {timespot.hours}
                      key = {timespot.hours}
                      pickTime = {this.pickTime} />)
                    }
                </div>
                </div>)}
                {this.state.timePicked && (<div>
                <button
                  className = "btn btn-lg btn-success btn-popup-submit"
                  onClick = {this.handleReservation}>Make a reservation</button>
                </div>)}
            </div>
        </Popup>
      </div>
    )
  }
}

export default RoomPopup;