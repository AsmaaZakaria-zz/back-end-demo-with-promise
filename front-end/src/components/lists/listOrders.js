import React,{Component} from 'react';
import { InputTagsContainer } from 'react-input-tags';
import {list} from "../../lib/services.js";
import "../../style/index.css";

export class ListOrders extends Component {

	state = {
		orders : [
			{
					"status": "James Angus",
					"items": "Dentist"
				},
				{
					"status": "Milan Howen",
					"items": "Truck Driver"
				}
		]
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
		var rows = this.state.orders.map(function(row){
			 return <tr>
					 <td>{row.status}</td>
					 <td>{row.items}</td>
				 </tr>
			 });
    return(
      <div className="container">
        <h2>Orders</h2>
				<div>
        <table className="table table-hover">
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>
          {rows}
        </table>
        </div>
        <button type="button" onClick={this.onChange} className="btn btn-primary btn-lg">Add Order</button>
      </div>
    )
  }
}



ListOrders.contextTypes = {
  router: React.PropTypes.object.isRequired
}
