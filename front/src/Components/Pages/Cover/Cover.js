import React from 'react'
import InitialNavBar from '../../Layout/InitialNavBar';
import Rooms from '../Rooms/Rooms';


function Cover() {
  const userdata = JSON.parse(sessionStorage.getItem('user'));
  return (
    <div>
    {!userdata && 
    <div>
    <InitialNavBar />
    <div className = "Custom lower-height-cover"> 
      <main role="main" className=" inner cover">
          <h1 className="cover-heading">Welcome to WeWork</h1>
          <p className="lead">WeWork is a full service, creative working environment with a unique entrepreneurial spirit.</p>
      </main>
      <p className="lead">
        <a href="/about" className="btn btn-lg btn-outline-light">Learn more</a>
      </p>
    </div>
  </div>}
  {userdata && <Rooms />}
  </div>
  )
}

export default Cover;