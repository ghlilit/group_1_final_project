import React from 'react';
import logo from '../logo.jpg'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signUp } from '../../../actions';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
    }

    onChange = (event, type) => {
        switch(type) {
            case 'fname':
                this.setState({
                    fname: event.target.value
                });
                break;
            case 'lname':
                this.setState({
                    lname: event.target.value
                });
                break;
            case 'email':
                this.setState({
                    email: event.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: event.target.value
                });
                break;
            case 'coPassword':
                this.setState({
                    password_confirmation: event.target.value
                });
                break;
            default:
                break;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, fname, lname, password_confirmation} = this.state;
        if(email && password && fname && lname && password_confirmation && password === password_confirmation) {
            this.props.signUp({ fname, lname, email, password, password_confirmation, role: 'nonmember'});
        }
    }

  render() {
      console.log(this.state);
      const {auth} = this.props
    return (
     <div >
        <div className="cover-container d-flex w-100 h-100 p-2 mx-auto flex-column gray-navbar">
            <header className="masthead mb-auto">
                <div className="inner container">
                    <a className="navbar-brand nav-main" href="/">WeWork</a>
                </div>
            </header>
     </div>
        <div className="Sign">
            <form className="form-signup" onSubmit={this.handleSubmit}>
                <img className="mb-4" src={logo} alt="logo" width="72" height="72"/>
                <input type="text" id="inputName" className="form-control" placeholder="Name" required autoFocus onChange={(event) => this.onChange(event, 'fname')}/>
                <input type="text" id="inputLastName" className="form-control" placeholder="Last Name" required onChange={(event) => this.onChange(event, 'lname')}/>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={(event) => this.onChange(event, 'email')}/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={(event) => this.onChange(event, 'password')}/>
                <input type="password" id="inputPassword2" className="form-control" placeholder="Confirm Password" required onChange={(event) => this.onChange(event, 'coPassword')}/>
                <p>{auth.error ? auth.error : ''}</p>
                <br />
                <button className="btn btn-lg btn-block btn-outline-light" type="submit">Sign up</button>
            </form>
        </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ signUp }, dispatch)
);
const mapStateToProps = state => {
    console.log(state);
    return {
        auth: state.signIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);