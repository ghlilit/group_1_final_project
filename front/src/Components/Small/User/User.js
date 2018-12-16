import React from 'react'
const USERS = "http://localhost:4000/users"
const DESKS = "http://localhost:4000/desks"
const roles = ["nonmember", "regular", "premium", "admin"]

class User extends React.Component {
  state = {
    role: this.props.role
  }
  
  createDesk = async(name) => {
    const {user_id} = this.props;
    const data = {
      user_id,
      name,
    }
    const Params = {
      headers: {
          'Content-Type': 'application/json'
          },
      body: JSON.stringify(data),
      method: "POST"
    }
    try {
      await fetch(DESKS, Params);
    } catch (error) {
    }
  }

  handleRoleChange = async(role) => {
    let desk_name;
    if (this.state.role === "nonmember" && (role === "regular" || role === "premium")){
      desk_name = prompt("Please enter desk name");
    }
    if (window.confirm(`Are you sure you want to make this user ${role}?`)){
      if(desk_name){
        this.createDesk(desk_name);
      }
      const {user_id} = this.props;
      const data = {
        user_id,
        role,
      }
      const Params = {
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
        method: "PATCH"
      }
      try {
        const res = await fetch(`${USERS}/${user_id}`, Params);
        const answer = await res.json();
        if(answer){
          this.setState({role,})
          alert("Change successful")}
      } catch (error) {
          alert("Something went wrong. Try again later.");
        }
    }
  }

  render() {
    const {fname, lname, email} = this.props;
    const {role} = this.state;
    const display = roles.filter(userRole => userRole !== role);
    console.log(display);
    return (
      <div>
        <div className="media text-muted pt-3">
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-center w-100">
              <strong className="text-gray-dark">{fname} {lname}</strong>
                <div className="dropdown show">
                  <button className="btn btn-secondary dropdown-toggle" href="#"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {role}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {display.map(role => 
                      <button className="dropdown-item" onClick = {() => {this.handleRoleChange(role)}}>{role}</button>
                    )}
                  </div>
                </div>
            </div>
            <span className="d-block">{email}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default User;