import React,{Component} from 'react';
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
		var rows = this.state.orders.map(function(row){
			 return <tr>
					 <td>{row.state}</td>
					 <td>{row.owner}</td>
					 <td>{row.itemsList[0]["name"]}</td>
					 <td>{row.itemsList[0]["quant"]}</td>
				 </tr>
			 });

    return(
      <div className="container">
        <h2>Orders</h2>
				<div>
        <table className="table table-hover">
          <thead>
            <th>State</th>
						<th>Owner</th>
						<th>Name</th>
						<th>Quantity</th>
          </thead>
          {rows}
        </table>
        </div>
        <button type="button" onClick={this.onChange} className="btn btn-primary btn-lg">Add Order</button>
      </div>
    )
  }
}

ListOrders.propTypes = {
  orders: React.PropTypes.array.isRequired
}



ListOrders.contextTypes = {
  router: React.PropTypes.object.isRequired
}
