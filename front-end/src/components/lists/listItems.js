import React,{Component} from 'react';
import {list} from "../../lib/services.js";
import "../../style/index.css";

export class ListItems extends Component{

  state = {
    items: [
      {
					"itemname": "James Angus",
					"price" : "22",
					"quantity": "Dentist"
				},
				{
					"itemname": "Milan Howen",
					"price" : "36",
					"quantity": "Truck Driver"
				}
    ]
  }

  componentDidMount (){
    list()
      .then(obj => {
        console.log('=== componentDidMount items ===', obj["items"])
        this.setState({items: obj["items"]}, ()=>{
					console.log("=== items setSatet callback === ", this.state.items);
				})
        console.log("=== items after setSatet === ", this.state.items);
      })
  }

  onChange =  (event) => {
    console.log("add new item");
    this.context.router.push("/addItems")
  }

  render(){
    var rows = this.state.items.map(function(row){
			 return <tr>
					 <td>{row.itemname}</td>
					 <td>{row.price}</td>
					 <td>{row.quantity}</td>
				 </tr>
			 });

    return(
      <div className="container list-items">
        <h2>Items</h2>
        <div>
        <table className="table table-striped">
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </thead>
          {rows}
        </table>
        </div>
        <button type="button" onClick={this.onChange} className="btn btn-primary btn-lg">Add Item</button>
      </div>
    )
  }
}

ListItems.propTypes = {
  items: React.PropTypes.array.isRequired
}

ListItems.contextTypes = {
  router: React.PropTypes.object.isRequired
}
