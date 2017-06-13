import React,{Component} from 'react';
import JsonTable from "react-json-table"
import {list} from "../../lib/services.js";
import "../../style/index.css";

export class ListItems extends Component{

  state = {
    items: []
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
    return(
      <div className="container list-items">
        <h2>Items</h2>
        <JsonTable rows={this.state.items} />
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
