import React from 'react'
import Popup from "reactjs-popup";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import "./RoomPopup.css"
import Timespot from "../Timespot"
const TIMESPOTS = "http://localhost:4000/timespots"

class RoomPopup extends React.Component {

    state = {
        selectedDate: new Date(),
        timeSelector: false,
        timespots: [],
        timeButtonText: "Pick the time",
        time_id: null,
        timePicked: false
      };

      pickTime = (text, id) => {
        this.setState({
          timeButtonText: text,
          time_id: id,
          timePicked: true,
        })
      }
    
      handleDateChange = date => {
        const noTimeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        this.setState({ 
          selectedDate: noTimeDate,
          timeSelector: true});
          this.getTimespots();
          console.log(this.state.timespots);

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


  render() {
    const today = new Date();
    const nextMonth = new Date(today.getTime() + 31 * 24 * 60 * 60 * 1000);
    const { selectedDate } = this.state;
    console.log(selectedDate);
    return (
      <div>
        <Popup trigger={ <button className = "btn btn-outline-dark" onClick = {this.handlePopup}>Reserve</button>} modal>
            <div className = "text-center">
            <h4 className = " cover-heading popup-text">Reserve {this.props.name}</h4>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={selectedDate}
             onChange={this.handleDateChange}
             maxDate = {nextMonth}
             disablePast />
              </MuiPickersUtilsProvider>
                 {this.state.timeSelector && (<div className="dropdown">
                <button className="btn btn-outline-dark dropdown-toggle btn-popup"
                    type="button" id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                   {this.state.timeButtonText}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.state.timespots.map(timespot => 
                      <Timespot
                      id = {timespot.id}
                      hours = {timespot.hours}
                      key = {timespot.hours}
                      pickTime = {this.pickTime} />
                    )
                    }
                </div>
                </div>)}
                {this.state.timePicked && (<div>
                <button className = "btn btn-lg btn-success btn-popup-submit">Make a reservation</button>
                </div>)}
            </div>
        </Popup>
      </div>
    )
  }
}

export default RoomPopup;