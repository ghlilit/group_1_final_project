import React from 'react';
import logo from '../logo.jpg'
import InitialNavBar from "../../Layout/InitialNavBar"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';
import NotFound from "../../Pages/NotFound"

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
        }
    }

  render() {
    const userdata = JSON.parse(sessionStorage.getItem('user'));
    const {auth} = this.props;
    return (
        <div>
            {userdata && 
            <NotFound />}
            {!userdata && <div>
                <InitialNavBar />
            <div className="Sign">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                <img className="mb-4" src={logo} alt="logo" width="72" height="72"/>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus onChange={this.onUsernameChange}/>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.onPasswordChange}/>
                    <p>{auth.error ? auth.error : ''}</p>
                    <br />
                    <button className="btn btn-lg btn-block btn-outline-light" type="submit">Sign in</button>
                </form>
            </div>
            </div>}
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ signIn }, dispatch)
);

const mapStateToProps = state => {
    console.log(state);
    return {
        auth: state.signIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
