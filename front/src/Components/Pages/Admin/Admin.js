import React from 'react'
import User from "../../Small/User"
import NotFound from "../NotFound"
import history from '../../../browserHist';
const USERS = "http://localhost:4000/users"

class Admin extends React.Component {

  state = {
     users: [],
     searchTerm: '',
     userdata: JSON.parse(sessionStorage.getItem('user'))
   }
  
  getUserData = async() => {
    let users;
    console.log()
      try {
        let result = await fetch(USERS,{
          method: 'GET',
          headers: {
            'Content-Type':"application/json",
            'access-token':this.state.userdata['access-token'],
            'client':this.state.userdata['client'],
            'uid':this.state.userdata['uid'],
            'expiry':this.state.userdata['expiry'],
          }
        });
        users = await result.json();
        if(result.status===401){
          this.setState({
            users:[]
          })
        }
        else{
        this.setState({
          users,
        })
      }
      } 
      catch (error) {
      }
  }

  componentDidMount = async () => {
    this.getUserData();
  }
  signOut = async()=>{
    let result = await fetch('http://localhost:4000/auth/sign_out',{
      method:'DELETE',
      headers: {
        'Content-Type':"application/json",
        'access-token':this.state.userdata['access-token'],
        'client':this.state.userdata['client'],
        'uid':this.state.userdata['uid'],
        'expiry':this.state.userdata['expiry'],
      }
    })
    if(result.status === 200){
      sessionStorage.removeItem('user');
      history.push('')
    }
  }

  onSearchChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onSearchSubmit = () => {
    const {searchTerm, users} = this.state;
    const filtered = users.filter(user => 
    (user.fname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
     user.lname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
    user.email.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
    this.setState({users: filtered});
  }

  render() {
    const userdata = JSON.parse(sessionStorage.getItem('user'));
    const {users, searchTerm} = this.state;
    if(!userdata){
      return <NotFound />
    }
    else{
      return (
        <div>
          <div>
          {(userdata.role === "admin") && 
          <div>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column gray-navbar">
                <header className="masthead mb-auto container">
                    <div className="inner">
                      <h3 className="masthead-brand">WeWork Admin</h3>
                      <nav className="nav nav-masthead justify-content-center">
                        <button className="btn btn-outline-light" onClick={()=>{this.signOut()}}>Sign out</button>
                      </nav>
                    </div>
                </header>
            </div>
            <div className="container my-3 p-3 bg-white rounded shadow-sm">
              <small className="d-block text-right mt-3">
                <input className = "form-control-sm" type="text" aria-label="Search"  value={searchTerm} onChange = {this.onSearchChange}/>
                <button className="btn btn-outline-success my-2 my-sm-0"
                  onClick = {this.onSearchSubmit}>
                  Search
                </button>
                <button className="btn btn-outline-dark my-2 my-sm-0"
                  onClick = {this.getUserData}>
                  Clear
                </button>
              </small>
            <h6 className="border-bottom border-gray pb-2 mb-0">Users</h6>
              {users.map((user, index) => 
                  <User 
                    user_id = {user.id}
                    key = {user.email}
                    fname = {user.fname}
                    lname = {user.lname}
                    role = {user.role}
                    email = {user.email} />)}
              </div>
            </div>}
            {(userdata.role !== "admin") && 
            <NotFound />}
        </div>
        <div className="container my-3 p-3 bg-white rounded shadow-sm">
          <small className="d-block text-right mt-3">
            <input className = "form-control-sm" type="text" aria-label="Search"  value={searchTerm} onChange = {this.onSearchChange}/>
            <button className="btn btn-outline-success my-2 my-sm-0"
              onClick = {this.onSearchSubmit}>
              Search
            </button>
            <button className="btn btn-outline-dark my-2 my-sm-0"
              onClick = {this.getUserData}>
              Clear
            </button>
          </small>
        <h6 className="border-bottom border-gray pb-2 mb-0">Users</h6>
          {users.map((user, index) => 
              <User 
                user_id = {user.id}
                key = {index}
                fname = {user.fname}
                lname = {user.lname}
                role = {user.role}
                email = {user.email} />)}
          </div>
          </div>
    )
  }
}
}
export default Admin;