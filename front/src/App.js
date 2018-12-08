import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Signin from './Components/Auth/Signin'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/signin" component={Signin} />
          <Route path="/about" component={About} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
