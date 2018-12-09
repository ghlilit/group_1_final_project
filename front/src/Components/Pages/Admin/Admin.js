import React from 'react'
import User from "../../Small/User"

class Admin extends React.Component {
  render() {
    return (
      <div>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column gray-navbar">
            <header className="masthead mb-auto ">
                <div className="inner">
                <h3 className="masthead-brand">WeWork Admin</h3>
                    <nav className="nav nav-masthead justify-content-center">
                        <button className="btn btn-outline-light">Sign out</button>
                    </nav>
                </div>
            </header>
        </div>
        <div className="container my-3 p-3 bg-white rounded shadow-sm">
        <small className="d-block text-right mt-3">
          <input className = "form-control-sm" type="text" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </small>
        <h6 className="border-bottom border-gray pb-2 mb-0">Users</h6>
            <User />
            <User />
            <User />
        </div>
      </div>
    )
  }
}

export default Admin;