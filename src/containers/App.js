import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Dashboard from '../components/Dashboard';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      baseURL: '127.0.0.1:8000'
    }
  }

  render() {
    return (
      <Router>
        <div className="App">


        <Route path="/" exact render={() => <Dashboard baseURL={this.state.baseURL}/>}/>

        </div>
      </Router>
    );
  }
}

export default App;