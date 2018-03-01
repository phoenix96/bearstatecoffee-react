import React, { Component } from 'react'

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '127.0.0.1:8000'
    }
    this.handelClick = this.handelClick.bind(this)
  }

  handelClick(){
    let text = ''
    if(this.state.text==='127.0.0.1:8000')
      text = '127.0.0.1:3000'
    else
      text = '127.0.0.1:8000'
    
    this.setState({
      text: text
    })
  }

  render() {
    return (
      <div className="dashboard">


      <h1>Welcome To Bear State Coffee {this.state.text}</h1>
      <button onClick={this.handelClick}>Sample Rerendering</button>

      </div>
    )
  }
}

export default Dashboard