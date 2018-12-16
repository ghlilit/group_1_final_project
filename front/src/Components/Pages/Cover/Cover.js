import React from 'react'

function Cover() {
  return (
    <div>
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column gray-navbar">
      <header className="masthead mb-auto container">
        <div className="inner container">
          <a className="navbar-brand nav-main" href="/">WeWork</a>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link" href="/signup">Sign up</a>
            <a className="nav-link" href="/signin">Sign in</a>
          </nav>
        </div>
      </header>
    </div>
    <div className = "Custom lower-height-cover"> 
      <main role="main" className=" inner cover">
          <h1 className="cover-heading">Welcome to WeWork</h1>
          <p className="lead">WeWork is a full service, creative working environment with a unique entrepreneurial spirit.</p>
          <p className="lead">
            <a href="/about" className="btn btn-lg btn-outline-light">Learn more</a>
          </p>
      </main>
    </div>
  </div>
  )
}

export default Cover;