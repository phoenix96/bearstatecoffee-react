import React, { Component } from 'react';

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      baseURL: '127.0.0.1:8000'
    }
  }

  render() {
    return (
      <div className="Dashboard">


      <p>You are on the dashboard {this.props.baseURL}</p>

      </div>
    );
  }
}

export default Dashboard;