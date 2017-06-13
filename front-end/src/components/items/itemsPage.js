import React,{Component} from 'react';
import {AddItems} from "./components/items/addItems.js";

export class ItemsPage extends Component{
  render(){
    return(
      <div>
        <AddItems />
      </div>
    )
  }
}
