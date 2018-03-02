import React, { Component } from 'react'
import { 
  Form,
  FormGroup,
  ControlLabel, 
  FormControl,
  Button
} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import './Signup.css'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      user_type: 'user',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeFirst = this.handleChangeFirst.bind(this)
    this.handleChangeLast = this.handleChangeLast.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleChangeFirst(evt){
    this.setState({first_name: evt.target.value})
  }

  handleChangeLast(evt){
    this.setState({last_name: evt.target.value})
  }

  handleChangeEmail(evt){
    this.setState({email: evt.target.value})
  }

  handleChangePhone(evt){
    this.setState({phone_number: evt.target.value})
  }

  handleChangePassword(evt){
    this.setState({password: evt.target.value})
  }

  handleSubmit(){
    console.log(this.state)
    fetch(`http://${this.props.baseState.baseURL}/accounts/signup/`, {
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
      else{
        alert("Confrimation email has been sent to you, first confirm and then login.")
        this.props.history.push('/')
      }
    })
  }

  componentDidMount(){
    if(this.props.baseState.user){
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="signup">
        <h2>Create Your Account</h2>
        <Form className="form">
          <FormGroup controlId="first_name">
            <ControlLabel>First Name:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.first_name}
              placeholder="John"
              onChange={this.handleChangeFirst}
            />
          </FormGroup>
          <FormGroup controlId="last_name">
            <ControlLabel>First Name:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.last_name}
              placeholder="Doe"
              onChange={this.handleChangeLast}
            />
          </FormGroup>
          <FormGroup controlId="phone_number">
            <ControlLabel>Phone Number:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.phone_number}
              placeholder="+918860XXXXXX"
              onChange={this.handleChangePhone}
            />
          </FormGroup>
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
          <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(Signup)