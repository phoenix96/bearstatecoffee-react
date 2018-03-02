import React, { Component } from 'react'
import { 
  Form,
  FormGroup,
  ControlLabel, 
  FormControl,
  Button
} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import './ForgotPasswordForm.css'

class ForgotPasswordForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      password: '',
      confirm_password: ''
    }
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangePassword(evt){
    this.setState({password: evt.target.value})
  }

  handleChangeConfirmPassword(evt){
    this.setState({confirm_password: evt.target.value})
  }

  handleSubmit(){
    console.log(this.state)
    fetch(`http://${this.props.baseState.baseURL}/accounts/reset/password/${this.props.match.params.token}/`, {
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
        alert(res.data)
        this.props.history.push('/')
      }
    })
  }

  componentDidMount(){
    console.log(this.props.match.params.token)
    if(this.props.baseState.user){
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="forgot_password">
        <h2>Reset Password</h2>
        <Form className="form">
          <FormGroup controlId="password">
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
              placeholder="******"
              onChange={this.handleChangePassword}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Confirm Password:</ControlLabel>
            <FormControl
              type="password"
              value={this.state.confirm_password}
              placeholder="******"
              onChange={this.handleChangeConfirmPassword}
            />
          </FormGroup>
          <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(ForgotPasswordForm)