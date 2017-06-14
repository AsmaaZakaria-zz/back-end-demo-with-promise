import React,{Component} from 'react';
import {addOrder} from "../../lib/services.js";

import "../../style/index.css";

var items = [];

export class AddOrders extends Component{

  state = {
    state: "waiting",
    owner: "user1",
    itemsList: [
      {
        name: "",
        quant: 0
      }
  ]
  }

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }



  handleAdd = (e) => {
    const {itemsList} = this.state;
    console.log("=== onAddItem ===");
    var name = this.refs.itemName.value;
    var quantity = this.refs.itemQuantity.value;
    console.log("=== itemName === ", name);
    console.log("=== itemQuantity === ", quantity);
    itemsList.push({name: name, quant: quantity});
    this.setState({itemsList})
    console.log("=== items after setState === ", itemsList);
    return itemsList;
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("order info --> ", this.state);

    var allItems = this.handleAdd()
    console.log("=== All items === ", allItems);

    const newOrder = {owner:this.state.owner,
                      state: this.state.state,
                      itemsList: allItems
                    }
    console.log("=== new order === ", newOrder);
    console.log("=== itemsList === ", this.state.itemsList);

    addOrder(newOrder)
      .then((res) => {
        console.log("=== create new order  === ",  newOrder );
      })
  }

  handleUpdateTags = (itemsList) => {
    this.setState({ itemsList });
  }


  render(){


    return(
      <form onSubmit={this.onSubmit}>
        <h1>Add New Order</h1>

        <div className="form-group">
          <label className="control-label">state</label>
          <input type="text" name="state" value={this.state.password} onChange={this.onChange} className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">Items</label>
          <input type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                className="form-control"
                placeholder="name..."
                ref="itemName"
          />
          <input type="number"
                name="quant"
                value={this.state.quant}
                onChange={this.onChange}
                className="form-control"
                placeholder="quantity..."
                ref="itemQuantity"
          />
          <button type="button" onClick={this.handleAdd} className="btn btn-primary btn-lg">Add Item</button>
        </div>

        <button type="submit" className="btn btn-primary btn-lg">Add Order</button>
      </form>
    )
  }
}
