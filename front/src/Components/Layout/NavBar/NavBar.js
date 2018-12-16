import React from 'react'
import history from '../../../browserHist';

class NavBar extends React.Component {
  state = {
    userdata: JSON.parse(sessionStorage.getItem('user'))
  }
  signOut = async()=>{
    let result = await fetch('http://localhost:4000/auth/sign_out',{
      method:'DELETE',
      headers: {
        'Content-Type':"application/json",
        'access-token':this.state.userdata['access-token'],
        'client':this.state.userdata['client'],
        'uid':this.state.userdata['uid'],
        'expiry':this.state.userdata['expiry'],
      }
    })
    if(result.status === 200){
      sessionStorage.removeItem('user');
      history.push('')
    }
  }
  render() {
    const {userdata} = this.state
    console.log("navbar state",this.state)
    return (
      <div className="cover-container d-flex w-100 h-100 p-2 mx-auto flex-column gray-navbar">
     <header className="masthead mb-auto ">
     <div className="inner container">
     <a className="navbar-brand nav-main" href="/rooms">WeWork</a>
       <nav className="nav nav-masthead justify-content-center">
         <a className="nav-link" href="/rooms">Rooms</a>
         <a className="nav-link" href="/pricing">Pricing</a>
         <a className="nav-link" href="/about">About</a>
         <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle nav-button"
              type="button"
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
                My Profile
            </button>
            <div className="dropdown-menu">
              <span className="dropdown-item disabled"> {userdata.fname} {userdata.lname}</span>
              <span className="dropdown-item disabled">Membership: {userdata.role}</span>
              <span className="dropdown-item disabled">Desk number: {userdata.id}</span>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" onClick={()=>{this.signOut()}}>Sign out</button>
            </div>
      </div>
       </nav>
     </div>
   </header>
   </div>
    )
  }
}

export default NavBar;