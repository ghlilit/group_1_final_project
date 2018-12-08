import React from 'react'

class Signin extends React.Component {
  render() {
    return (
        <div class="Sign">
            <form className="form-signin">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <br />
                <button className="btn btn-lg btn-block btn-secondary" type="submit">Sign in</button>
            </form>
        </div>
    )
  }
}

export default Signin;
