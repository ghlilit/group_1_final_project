import React from 'react'

class Signup extends React.Component {
  render() {
    return (
     <div >
        <div className="cover-container d-flex w-100 h-100 p-2 mx-auto flex-column gray-navbar">
            <header className="masthead mb-auto">
                <div className="inner container">
                    <a class="navbar-brand nav-main" href="/">WeWork</a>
                </div>
            </header>
     </div>
        <div className="Sign">
            <form className="form-signup">
                <input type="text" id="inputName" className="form-control" placeholder="Name" required autoFocus/>
                <input type="text" id="inputLastName" className="form-control" placeholder="Last Name" required/>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <input type="password" id="inputPassword2" className="form-control" placeholder="Confirm Password" required/>
                <br />
                <button className="btn btn-lg btn-block btn-secondary" type="submit">Sign up</button>
            </form>
        </div>
        </div>
    )
  }
}

export default Signup;