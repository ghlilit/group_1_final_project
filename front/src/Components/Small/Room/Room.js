import React from 'react'
import getImage from './getImage'

export default class Room extends React.Component {

  render() {
    let img = getImage(this.props.id);
    const position = (this.props.id % 2 === 0 ? "col-md-7" : "col-md-7 order-md-2")
    return (
      <div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
                <div className={position}>
                    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src ={img} alt="Generic placeholder"/>
                </div>
            </div>
      </div>
    )
  }
}

