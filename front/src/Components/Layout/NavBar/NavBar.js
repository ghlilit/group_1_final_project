import React from 'react'

class NavBar extends React.Component {

  render() {
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column gray-navbar">
     <header className="masthead mb-auto ">
     <div className="inner">
       <h3 className="masthead-brand">WeWork</h3>
       <nav className="nav nav-masthead justify-content-center">
         <a className="nav-link" href="/rooms">Rooms</a>
         <a className="nav-link" href="/about">About</a>
         <div className="nav-link">Sign out</div>
       </nav>
     </div>
   </header>
   </div>
    )
  }
}


export default NavBar;