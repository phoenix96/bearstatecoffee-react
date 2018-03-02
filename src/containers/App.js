import React, { Component } from 'react'
import {  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'

import AddProduct from '../components/AddProduct'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import Login from './Login'
import Signup from './Signup'
import Combo from '../components/Combo'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      baseURL: '127.0.0.1:8000'
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(data){
    this.setState({
      user: data.data.user,
      token: data.data.token
    })
    localStorage.setItem('token', JSON.stringify(data.data.token))
    localStorage.setItem('user', JSON.stringify(data.data.user))
  }

  componentWillMount() {
    if(localStorage.getItem('token')) {
      this.setState({
        token : JSON.parse(localStorage.getItem('token')),
        user : JSON.parse(localStorage.getItem('user'))
      })
    }
  }

  handleLogout(){
    fetch(`http://${this.state.baseURL}/accounts/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.state.token.access_token}`
      }
    }).then(() => {
      alert('Logged out successfully!')
      this.setState({ user: undefined, token: undefined})
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Navbar
            baseState={this.state}
            handleLogout={this.handleLogout}/>
          <div id="Main">
            <Route path="/" exact render={() => <Dashboard baseState={this.state}/>}/>
            <Route path="/login" exact render={() => <Login baseState={this.state} handleLogin={this.handleLogin}/>}/>
            <Route path="/signup" exact render={() => <Signup baseState={this.state}/>}/>
             <Route path="/combo/view" exact render={() => <Combo baseState={this.state}/>}/>
             <Route path="/add" exact render={() => <AddProduct baseState={this.state}/>}/>
          </div>  
        </div>
      </Router>
    )
  }
}

export default App