import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';


class NavBar extends React.Component {

  render() {
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
              <span className="dropdown-item disabled">{auth.fname} {auth.lname}</span>
              <span className="dropdown-item disabled">Membership: {auth.role}</span>
              <span className="dropdown-item disabled">Desk number: </span>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item">Sign out</button>
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
  return {
      auth: state.signIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);