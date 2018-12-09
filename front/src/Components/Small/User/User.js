import React from 'react'

class User extends React.Component {
  render() {
    return (
      <div>
          <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">Full Name</strong>
              <button class = "btn btn-dark">Change membership</button>
            </div>
            <span class="d-block">@username</span>
          </div>
        </div>
      </div>
    )
  }
}

export default User;