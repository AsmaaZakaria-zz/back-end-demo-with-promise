import React,{Component} from 'react';
import {NavigationBar} from "./navigationbar.js"

export class App extends Component{
  render(){
    return(
      <div className="container">
        <NavigationBar />
        {this.props.children}
      </div>
    )
  }
}
