import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';


class NavBar extends React.Component {

  render() {
    console.log(this.props.auth.fname)
    const {auth} = this.props
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
              <p className="dropdown-item disabled">Name {auth.fname}</p>
              <p className="dropdown-item disabled">LastName {auth.lname}</p>
              <p className="dropdown-item disabled">Role {auth.role}</p>
              <p className="dropdown-item disabled">Desk number: </p>
              <div className="dropdown-divider"></div>
              <p className="dropdown-item" role ="button">Sign out</p>
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