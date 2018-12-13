import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
        <div className = "Custom default-height"> 
        <main role="main" className=" inner cover">
            <h2>Oops. Requested page not found.</h2>
            <p className="lead">
            <a href="/#" className="btn btn-outline-light">Back home</a>
            </p>
        </main>
      </div>
    )
  }
}
