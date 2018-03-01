import React, { Component } from 'react'
import { 
  Form,
  FormGroup,
  ControlLabel, 
  FormControl,
  Button
} from 'react-bootstrap'
import './login.css'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChangeEmail(evt){
    this.setState({email: evt.target.value})
  }

  handleChangePassword(evt){
    this.setState({password: evt.target.value})
  }

  handleLogin(){
    console.log(this.state)
    fetch(`http://${this.props.baseState.baseURL}/accounts/login/`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
    .then(res => { 
      if(res.result===false){
        alert(res.message)
      }
      console.log(res)
      this.props.handleLogin(res)
    })
  }

  render() {
    return (
      <div className="login">
        <h2>Login In Your Account</h2>
        <Form className="form">
          <FormGroup controlId="email">
            <ControlLabel>Email:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.email}
              placeholder="john.doe@bearstatecoffee.com"
              onChange={this.handleChangeEmail}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password:</ControlLabel>
            <FormControl 
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChangePassword}/>
          </FormGroup>
          <Button bsStyle="primary" onClick={this.handleLogin}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Login