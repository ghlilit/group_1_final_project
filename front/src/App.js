import React, { Component } from 'react';
import history from './browserHist';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Signin from './Components/Auth/Signin'
import Signup from './Components/Auth/Signup'
import Cover from './Components/Pages/Cover'
import About from './Components/Pages/About'
import Rooms from './Components/Pages/Rooms'
import Pricing from './Components/Pages/Pricing'
import Admin from './Components/Pages/Admin'
import NotFound from './Components/Pages/NotFound'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Cover} /> 
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/admin" component={Admin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
