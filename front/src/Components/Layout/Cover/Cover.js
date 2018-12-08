import React from 'react'
import './Cover.css';

class Cover extends React.Component {
  render() {
    return (
        <div>
         <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">WeWork</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link" href="#">Sign up</a>
            <a class="nav-link" href="/signin">Sign in</a>
          </nav>
        </div>
      </header>
      </div>
      <div class = "Cover"> 
        <main role="main" class=" inner cover">
            <h1 class="cover-heading">Welcome to WeWork</h1>
            <p class="lead">WeWork is a full service, creative working environment with a unique entrepreneurial spirit.</p>
            <p class="lead">
            <a href="/about" class="btn btn-lg btn-secondary">Learn more</a>
            </p>
        </main>
      </div>
      </div>
    )
  }
}

export default Cover;