import React from 'react'

class NavBar extends React.Component {

  render() {
    return (
      <div className="cover-container d-flex w-100 h-100 p-2 mx-auto flex-column gray-navbar">
     <header className="masthead mb-auto ">
     <div className="inner container">
     <a className="navbar-brand nav-main" href="/rooms">WeWork</a>
       <nav className="nav nav-masthead justify-content-center">
         <a className="nav-link" href="/rooms">Rooms</a>
         <a className="nav-link" href="/pricing">Pricing</a>
         <a className="nav-link" href="/about">About</a>
         <div class="dropdown">
            <button class="btn btn-outline-light dropdown-toggle nav-button"
              type="button"
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
                My Profile
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item disabled">Name LastName</a>
              <a class="dropdown-item disabled">Desk number: </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" role ="button">Sign out</a>
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