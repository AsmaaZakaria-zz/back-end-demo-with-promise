import React,{Component} from 'react';
import {ListOrders} from "../../components/lists/listOrders.js";
import {ListItems} from "../../components/lists/listItems.js";

export class Home extends Component{
  render(){
    return(
      <div className="home">
        <ListOrders />
        <ListItems />
      </div>
    )
  }
}
