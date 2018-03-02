import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
  Navbar,
  Nav, 
  NavItem, 
  NavDropdown, 
  MenuItem 
} from 'react-bootstrap'


class NavbarComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '127.0.0.1:8000'
    }
  }

  renderRightButtons(){
    if(this.props.baseState.user){
      return (
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            {this.props.baseState.user.email}
          </NavItem>
        </Nav>
      )
    }
    else{
      return (
        <Nav pullRight>
          <NavItem>
            <Link to="/add">Admin Add Product</Link>  
          </NavItem>
          <NavItem>
            <Link to="/">Products</Link>  
          </NavItem>
          <NavItem>
            <Link to="/combo/view">Combos</Link>  
          </NavItem>
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
          <NavItem>
            <Link to="/signup">Sign Up</Link>  
          </NavItem>
         
        </Nav>
      )
    }
  }

  renderLeftButtons(){
    if(this.props.baseState.user){
      return (
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      )
    }
    else{
      return(<div/>)
    }
  }

  render() {
    return (
      <div className="navbar">
        <Navbar fluid inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">BearStateCoffee</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {this.renderLeftButtons()}
            {this.renderRightButtons()}
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarComponent