import React from 'react'
import NavBar from "../../Layout/NavBar"
import './Pricing.css'

const Pricing = () => {
  return (
    <div>
      <NavBar />
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Pricing</h1>
            <p className="lead">Become a premium member to enjoy all the benefits WeWork has to offer. We have special plans and prices for different needs.</p>
        </div>

        <div className="container text-center">
        <div className="card-deck mb-3 text-center">
            <div className="card mb-4">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">Standard</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">$225 <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                <li>Dedicated space with flexibilty</li>
                <li>Super-fast wifi</li>
                <li>Amazing community</li>
                <li>Barista coffee</li>
                </ul>
            </div>
            </div>
            <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">Premium</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">$325 <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                <li>Tailored rental terms</li>
                <li>Optional mail handling</li>
                <li>Priority email support</li>
                <li>Special room reservation</li>
                </ul>
            </div>
            </div>
            <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">Loyal premium</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">$2500 <small className="text-muted">/ yr</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                <li>Tailored rental terms</li>
                <li>Optional mail handling</li>
                <li>Priority email support</li>
                <li>Special room reservation</li>
                </ul>
            </div>
            </div>
        </div>
            <a className ="btn btn-outline-dark btn-lg" href="mailto:lilit_ghandilyan@edu.aua.am?subject=Membership" role="button">Get in touch
            </a>
        </div>
    </div>
  )
}

export default Pricing;
