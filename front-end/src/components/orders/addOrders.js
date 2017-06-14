import React,{Component} from 'react';
import {Link} from "react-router";
import {addOrder} from "../../lib/services.js";

import "../../style/index.css";

var items = [];

export class AddOrders extends Component{

  state = {
    state: "waiting",
    owner: "user1",
    itemsList: [],
    msg: ""
  }

  onChange = (event) => {
    var state = this.refs.state.value
  }

  handleAdd = () => {
    const {itemsList} = this.state;
    console.log("=== onAddItem ===");

    var name = this.refs.itemName.value;
    var quantity = this.refs.itemQuantity.value;

    console.log("=== itemName === ", name);
    console.log("=== itemQuantity === ", quantity);
    console.log("=== itemsList before push === ", this.state);

    itemsList.push({"name": name, "quant": quantity});
    console.log("=== items after setState === ", itemsList);
    console.log("=== this.state in handleAdd === ", this.state);
    return itemsList;
  }


  onSubmit = (event) => {
    const {owner, state, itemsList} = this.state;
    event.preventDefault();
    console.log("order info --> ", this.state);

    const newOrder = {owner:owner,
                      state:state,
                      itemsList:itemsList
                    }
    console.log("=== new order === ", newOrder);
    console.log("=== itemsList === ", itemsList);

    addOrder(newOrder)
      .then((res) => {
        console.log("=== create new order  === ",  newOrder );
        console.log("=== add order res === ", res);
        if(res === true){
          console.log("res true");
          this.setState({msg: "Orded Added successfully"})
        }
        else{
          console.log("res not true");
          this.setState({msg: res})
        }
      }).then(() => {
        console.log("=== itemsList after add order successfully === ", itemsList);
      })
  }

  render(){

    var items = this.state.itemsList;
    var name = "";
    items.map((item) => {
      name = item.name
      console.log("-----------> ", name);
    })
    console.log("-----------> ", name);

    return(
      <div>
      <div>
        <Link to={"/home"}>List Orders</Link><br/>
        <Link to={"/addItems"}>Add Items</Link>
      </div>
      <form onSubmit={this.onSubmit}>
        <h1>Add New Order</h1>

        <div className="form-group">
          <label className="control-label">state</label>
          <input type="text"
                name="state"
                value={this.state.password}
                onChange={this.onChange}
                className="form-control"
                ref="state"
          />
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

        <p name="error">
          {this.state.msg}
        </p>

        <div>
          <ul>
          <li>{name}</li>
          </ul>
        </div>
      </form>
      </div>
    )
  }
}
