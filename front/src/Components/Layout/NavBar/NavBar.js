import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';


class NavBar extends React.Component {

  render() {
    console.log(this.props.auth.fname)
    return (
      <div className="cover-container d-flex w-100 h-100 p-2 mx-auto flex-column gray-navbar">
     <header className="masthead mb-auto ">
     <div className="inner container">
     <a className="navbar-brand nav-main" href="/rooms">WeWork</a>
       <nav className="nav nav-masthead justify-content-center">
         <a className="nav-link" href="/rooms">Rooms</a>
         <a className="nav-link" href="/pricing">Pricing</a>
         <a className="nav-link" href="/about">About</a>
         <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle nav-button"
              type="button"
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
                My Profile
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item disabled">Name {this.props.auth.fname}</a>
              <a className="dropdown-item disabled">LastName {this.props.auth.lname}</a>
              <a className="dropdown-item disabled">Role {this.props.auth.role}</a>
              <a className="dropdown-item disabled">Desk number: </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" role ="button">Sign out</a>
            </div>
      </div>
       </nav>
     </div>
   </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);