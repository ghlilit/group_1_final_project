import React from 'react'
import NavBar from "../../Layout/NavBar"

function About() {
  return (
    <div>
        <NavBar />
        <div className = "Custom about-height"> 
            <main role="main" className="container inner cover">
                <h1 className="Central cover-heading">Who we are</h1>
                <br />
                <div className="lead">
                    <p>Calling the inspired ones. The corporate shakers, business nomads, freelancers, energetic entrepreneurs, international workers, mobile movers, project teams, start-ups and well-established companies.</p>
                    <p>Welcome to WeWork — your place to work. Where you’ll watch businesses grow because of people and ideas. Where you’ll surround yourself with those who love what they do. And where nothing beats a mental block like a really great cup of coffee served up by one of our expert baristas.</p>
                    <p>WeWork was built on the idea that success breeds more success. That’s why we’ve cultivated a community of members who are thinkers, achievers and imagineers. We’ve built WeWork that suits your every need. And our energetic staff attends to all the details so you can focus on your next big idea.</p>
                    <br />
                    <p className = "Central"><strong>WeWork. Your place to work.</strong></p> 
                </div>
            </main>
        </div>
    </div>
  )
}

export default About;
