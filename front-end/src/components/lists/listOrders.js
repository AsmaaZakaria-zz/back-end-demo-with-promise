import React,{Component} from 'react';
import JsonTable from "react-json-table"
import { InputTagsContainer } from 'react-input-tags';
import {list} from "../../lib/services.js";
import "../../style/index.css";

export class ListOrders extends Component {

	state = {
		orders : []
	}

  componentDidMount (){
    list()
      .then(obj => {
        console.log('=== componentDidMount orders ===', obj["orders"])
        this.setState({orders: obj["orders"]}, ()=>{
					console.log("=== orders setSatet callback === ", this.state.orders);
				})
        console.log("=== orders after setSatet === ", this.state.orders);
      })
  }

  onChange = (event) => {
    console.log("add new order");
    this.context.router.push("/addOrders");
  }

	
  render(){
    return(
      <div className="container">
        <h2>Orders</h2>
        <JsonTable rows={this.state.orders} />
        <button type="button" onClick={this.onChange} className="btn btn-primary btn-lg">Add Order</button>
      </div>
    )
  }
}



ListOrders.contextTypes = {
  router: React.PropTypes.object.isRequired
}
