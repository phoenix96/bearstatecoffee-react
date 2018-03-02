import React, { Component } from 'react'
import './Dashboard.css'



class Combo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '127.0.0.1:8000',
      productList: []
    }
     this.fetchProducts = this.fetchProducts.bind(this)
  }

 fetchProducts(){
     fetch(`http://127.0.0.1:8000/products/combo/view`, {
         method: "GET",
          }).then(res=> res.json())
            .then(res=> {
              console.log(res, typeof res, res.length)
            this.setState({productList: res})
          })
      console.log(this.state.productList)
}


 componentWillMount(){
    this.fetchProducts()
 }

render() {
  
  var list = []
  

  for (let i = this.state.productList.length-1; i >= 0; i--) {
        list.push(
          <li>
            <img src = {this.state.productList[i].image}/>
            <h3> {this.state.productList[i].name} </h3>
            <p>
              <strong>Cost:</strong> {this.state.productList[i].cost} <br/>
              <strong>Available Quantity:</strong> {this.state.productList[i].avail_quantity} <br/>
              <strong>Description:</strong> {this.state.productList[i].desc} <br/>
            </p>
          </li>)
      }



  return (
    <div className="dashboard">
    <h1>Available Combos</h1>
    <ul>
      {list}
    </ul>

    </div>
  )
}
}

export default Combo