import React from 'react'
import getImage from './getImage'
import './Room.css'

export default class Room extends React.Component {

  render() {
    let img = getImage(this.props.id);
    const position = (this.props.id % 2 === 0 ? "col-md-7" : "col-md-7 order-md-2")
    return (
      <div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
                <div className={position}>
                    <h2 className="info-tab">{this.props.name}</h2>
                    <br />
                    <p className="lead text center"></p>
                    <div className="list-unstyled info-tab">
                      <p> ✓ Per hour <strong>{this.props.price}$</strong></p>
                      <p> ✓ For max. <strong>{this.props.capacity} people</strong></p>
                      <p> ✓ Room setup: <strong>{this.props.setup}</strong></p>
                      <div class = "balanced-button">
                        <button class = "btn btn-outline-dark">Reserve</button>
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

