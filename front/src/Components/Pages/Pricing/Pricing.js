import React from 'react'
import NavBar from "../../Layout/NavBar"
import './Pricing.css'

const Pricing = () => {
  return (
    <div>
      <NavBar />
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Pricing</h1>
            <p class="lead">Become a premium member to enjoy all the benefits WeWork has to offer. We have special plans and prices for different needs.</p>
        </div>

        <div class="container text-center">
        <div class="card-deck mb-3 text-center">
            <div class="card mb-4">
            <div class="card-header">
                <h4 class="my-0 font-weight-normal">Standard</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">$225 <small class="text-muted">/ mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                <li>Dedicated space with flexibilty</li>
                <li>Super-fast wifi</li>
                <li>Amazing community</li>
                <li>Barista coffee</li>
                </ul>
            </div>
            </div>
            <div class="card mb-4 shadow-sm">
            <div class="card-header">
                <h4 class="my-0 font-weight-normal">Premium</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">$325 <small class="text-muted">/ mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                <li>Tailored rental terms</li>
                <li>Optional mail handling</li>
                <li>Priority email support</li>
                <li>Special room reservation</li>
                </ul>
            </div>
            </div>
            <div class="card mb-4 shadow-sm">
            <div class="card-header">
                <h4 class="my-0 font-weight-normal">Loyal premium</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">$2500 <small class="text-muted">/ yr</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                <li>Tailored rental terms</li>
                <li>Optional mail handling</li>
                <li>Priority email support</li>
                <li>Special room reservation</li>
                </ul>
            </div>
            </div>
        </div>
            <a class ="btn btn-dark btn-lg" href="mailto:lilit_ghandilyan@edu.aua.am?subject=Catering" role="button">Get in touch
            </a>
        </div>
    </div>
  )
}

export default Pricing;
