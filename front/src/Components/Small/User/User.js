import React from 'react'

class User extends React.Component {
  render() {
    return (
      <div>
          <div className="media text-muted pt-3">
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-center w-100">
              <strong className="text-gray-dark">Full Name</strong>
              <button className = "btn btn-dark">Change membership</button>
            </div>
            <span className="d-block">@username</span>
          </div>
        </div>
      </div>
    )
  }
}

export default User;