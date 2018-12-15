import React from 'react';
import logo from '../logo.jpg'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onUsernameChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password} = this.state;
        if(email && password) {
            this.props.signIn({email, password});
            this.props.history.push('/rooms');
        }
    }

  render() {
      console.log(this.state);
    return (
        <div>
         <div className="cover-container d-flex w-100 h-100 p-2 mx-auto flex-column gray-navbar">
     <header className="masthead mb-auto">
     <div className="inner container">
     <a className="navbar-brand nav-main" href="/">WeWork</a>
     </div>
   </header>
   </div>
        <div className="Sign lower-height">
            <form className="form-signin" onSubmit={this.handleSubmit}>
            <img class="mb-4" src={logo} alt="logo" width="72" height="72"/>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus onChange={this.onUsernameChange}/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.onPasswordChange}/>
                <br />
                <button className="btn btn-lg btn-block btn-outline-light" type="submit">Sign in</button>
            </form>
        </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ signIn }, dispatch)
);

export default connect(undefined, mapDispatchToProps)(Signin);
