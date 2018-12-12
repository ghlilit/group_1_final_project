import React from 'react'

class Signin extends React.Component {
  render() {
    return (
        <div>
         <div className="cover-container d-flex w-100 h-100 p-2 mx-auto flex-column gray-navbar">
     <header className="masthead mb-auto">
     <div className="inner container">
     <a class="navbar-brand nav-main" href="/">WeWork</a>
     </div>
   </header>
   </div>
        <div className="Sign lower-height">
            <form className="form-signin">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <br />
                <button className="btn btn-lg btn-block btn-secondary" type="submit">Sign in</button>
            </form>
        </div>
        </div>
    )
  }
}

export default Signin;
