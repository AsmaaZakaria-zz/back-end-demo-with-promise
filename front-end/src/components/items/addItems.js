import React,{Component} from 'react';
import {Link} from "react-router";
import {addItems} from "../../lib/services.js";

export class AddItems extends Component{
  constructor(props){
    super(props);
    this.state = {
      itemname: "",
      price: "",
      quantity: ""
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("item info --> ", this.state);
    const newItem = {itemname: this.state.itemname, price:this.state.price, quantity: this.state.quantity}
    addItems(newItem)
      .then((res) => {
        console.log("=== create new item  === ",  newItem );
      })
  }


  render(){
    return(
      <div>
      <div>
        <Link to={"/home"}>List Items</Link><br/>
        <Link to={"/addOrders"}>Add Orders</Link>
      </div>
      <form onSubmit={this.onSubmit}>
        <h1>Add New Item</h1>

        <div className="form-group">
          <label className="control-label">name</label>
          <input type="text" name="itemname" value={this.state.itemname} onChange={this.onChange} className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">price</label>
          <input type="number" name="price" value={this.state.price} onChange={this.onChange} className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">quantity</label>
          <input type="number" name="quantity" value={this.state.quantity} onChange={this.onChange} className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      </form>
      </div>
    )
  }
}
