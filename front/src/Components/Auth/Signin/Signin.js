import React from 'react'
import './Signin.css';

class Signin extends React.Component {
  render() {
    return (
        <div class="Signin">
            <form className="form-signin">
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <br />
                <button className="btn btn-lg btn-block btn-secondary" type="submit">Sign in</button>
            </form>
        </div>
    )
  }
}

export default Signin;