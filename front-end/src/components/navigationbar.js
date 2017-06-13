import React,{Component} from 'react';
import {Link} from "react-router";

import "../style/index.css";

export  class NavigationBar extends Component{

  // const userLinks = (
  //   <ul className="nav navbar-bav navbar-right">
  //     <li><Link to={"/home"}>Comamos</Link></li>
  //     <li><Link to={"/"}>Logout</Link></li>
  //   </ul>
  // )
  // const guestLinks = (
  //   <ul className="nav navbar-bav navbar-right">
  //     <li className="signup"><Link to={"/signup"}>Sign Up</Link></li>
  //     <li className="signin"><Link to={"/signin"}>Sign In</Link></li>
  //   </ul>
  // )

  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to={"/"}> Comamos </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-bav navbar-right signup-sigin">
              <li className="signup"><Link to={"/signup"}>Sign Up</Link></li>
              <li className="signin"><Link to={"/signin"}>Sign In</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
