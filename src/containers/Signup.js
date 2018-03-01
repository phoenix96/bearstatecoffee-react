import React, { Component } from 'react'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '127.0.0.1:8000'
    }
  }

  render() {
    return (
      <div className="signup">
        Sign Up {this.state.text}
      </div>
    )
  }
}

export default Signup