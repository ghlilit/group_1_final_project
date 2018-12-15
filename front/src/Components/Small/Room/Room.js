import React from 'react'
import getImage from './getImage'
import '../RoomPopup'
import './Room.css'
import RoomPopup from '../RoomPopup';

class Room extends React.Component {

  render() {
    let img = getImage(this.props.id);
    const position = (this.props.id % 2 === 0 ? "col-md-7" : "col-md-7 order-md-2")
    return (
      <div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
          <div id = "position-div"className={position}>
            <h2 className="info-tab">{this.props.name}</h2>
            <br />
            <p className="lead text center"></p>
            <div className="list-unstyled info-tab">
              <p> ✓ Per hour <strong>{this.props.price}$</strong></p>
              <p> ✓ For max. <strong>{this.props.capacity} people</strong></p>
              <p> ✓ Room setup: <strong>{this.props.setup}</strong></p>
              <div className = "balanced-button">
                <RoomPopup name = {this.props.name} id = {this.props.id}/>
              </div>
            </div>
          </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src ={img} alt="Generic placeholder"/>
            </div>
        </div>
      </div>
    )
  }
}

export default Room;