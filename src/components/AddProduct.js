import React, { Component } from 'react'
import './AddProduct.css'
import { 
  Form,
  FormGroup,
  ControlLabel, 
  FormControl,
  Button
} from 'react-bootstrap'


class AddProduct extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name : "",
      cost : 0,
      image : "",
      quantity: 1
    }

    this.insertProduct = this.insertProduct.bind(this)
  }

insertProduct(){

}
render() {

  return (
    <div className="addProduct">
    <h2>Add a new product</h2>
        <Form className="form">
          <FormGroup controlId="name">
            <ControlLabel>Name:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Sample Name"
            />
          </FormGroup>

          <FormGroup controlId="cost">
            <ControlLabel>Cost:</ControlLabel>
            <FormControl 
              type="float"
              value={this.state.cost}
              placeholder={78}
            />
          </FormGroup>

          <FormGroup controlId="image">
            <ControlLabel>Image:</ControlLabel>
            <FormControl 
              type="text"
              value={this.state.image}
              placeholder="https://goo.gl/aYwphE"
            />
          </FormGroup>

          <FormGroup controlId="available_quantity">
            <ControlLabel>Available Quantity:</ControlLabel>
            <FormControl 
              type="number"
              value={this.state.quantity}
              placeholder={1}
            />
          </FormGroup>


          <Button bsStyle="primary" onClick={this.insertProduct}>Submit</Button>
        </Form>

    </div>
  )
}
}

export default AddProduct