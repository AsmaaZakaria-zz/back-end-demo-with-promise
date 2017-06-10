import React,{Component} from 'react';
import {Link} from "react-router";

export  class NavigationBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to={"/"}> Comamos </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-bav navbar-right">
              <li><Link to={"/signup"}>Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
