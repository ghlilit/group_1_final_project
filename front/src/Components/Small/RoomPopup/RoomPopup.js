import React from 'react'
import Popup from "reactjs-popup";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import "./RoomPopup.css"

class RoomPopup extends React.Component {

    state = {
        selectedDate: new Date(),
      };
    
      handleDateChange = date => {
        this.setState({ selectedDate: date });
      };
    
  render() {
    const today = new Date();
    const nextYear = new Date(today.getTime() + 365 * 24 * 60 * 60 * 1000);
    const { selectedDate } = this.state;
    return (
      <div>
        <Popup trigger={ <button class = "btn btn-outline-dark">Reserve</button>} modal>
            <div class = "text-center">
            <h4 class = " cover-heading popup-text">Reserve {this.props.name}</h4>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={selectedDate}
             onChange={this.handleDateChange}
             maxDate = {nextYear}
             disablePast />
              </MuiPickersUtilsProvider>
                 <div class="dropdown">
                <button class="btn btn-outline-dark dropdown-toggle btn-popup"
                    type="button" id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                   Pick the time
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
                </div>
                <button class = "btn btn-lg btn-success btn-popup-submit">Make a reservation</button>
            </div>
        </Popup>
      </div>
    )
  }
}

export default RoomPopup;