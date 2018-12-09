import React from 'react'
import './Carousel.css'
import premium from './img/premium.jpg'
import catering from './img/catering.jpg'
import events from './img/events.jpg'

const Carousel = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="first-slide" src={catering} alt="First slide"/>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Catering</h1>
                <p>We’ll take care of everything so you can focus on your meeting. We have packages to make your choice easier, but there is lots more to choose from. We’d love to help you assemble a healthy lunch, a selection of delicious American pastries, an extensive buffet or dinner, or maybe just a simple breakfast to start the day with something nice?</p>
                <p><a className="btn btn-lg btn-outline-light" href="mailto:lilit_ghandilyan@edu.aua.am?subject=Catering" role="button">Email us</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="second-slide" src={premium} alt="Second slide"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>Premium membership</h1>
                <p>Wework Premium Membership is a paid, premium subscription that offers a wide range of benefits across the WeWork platform. One of the most important ones is the ability to do room reservations.</p>
                <p><a className="btn btn-lg btn-outline-light" href="/pricing" role="button">Pricing</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="third-slide" src={events}/>
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>Special events</h1>
                <p>We love to host special events and see our beautiful spaces become the scene of all types of exceptional occasions. Make an appointment and we’ll make sure your seminar, event, workshop, talk, party or shareholder meeting will be a blast.</p>
                <p><a className="btn btn-lg btn-outline-light" href="mailto:lilit_ghandilyan@edu.aua.am?subject=Events" role="button">More info</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    </div>
  )
}

export default Carousel;
