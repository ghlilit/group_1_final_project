import React from 'react'

class Signin extends React.Component {
  render() {
    return (
        <div className="Sign">
            <form className="form-signin">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <br />
                <button className="btn btn-lg btn-block btn-secondary" type="submit">Sign in</button>
            </form>
        </div>
    )
  }
}

export default Signin;
