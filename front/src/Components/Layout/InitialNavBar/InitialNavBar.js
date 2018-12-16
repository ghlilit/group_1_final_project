import React from 'react'

function InitialNavBar() {
  return (
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
  )
}

export default InitialNavBar;