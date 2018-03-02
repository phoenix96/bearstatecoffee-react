import React, { Component } from 'react'
import { 
  Form,
  FormGroup,
  ControlLabel, 
  FormControl,
  Button
} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import './ForgotPassword.css'

class ForgotPassword extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeEmail(evt){
    this.setState({email: evt.target.value})
  }

  handleSubmit(){
    console.log(this.state)
    fetch(`http://${this.props.baseState.baseURL}/accounts/reset/password/send/mail/`, {
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
    if(this.props.baseState.user){
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="forgot_password">
        <h2>Reset Password</h2>
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
          <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(ForgotPassword)