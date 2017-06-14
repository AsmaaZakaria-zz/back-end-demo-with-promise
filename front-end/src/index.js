import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
// import { createBrowserHistory } from 'history'

import {App} from "./components/App.js";
import {Greetings} from "./components/greetings.js";
import {Signup} from "./components/signup/signupPage.js";
import {Signin} from "./components/signin/signinPage.js";
import {Home} from "./components/home/home.js";
import {AddOrders} from "./components/orders/addOrders.js";
import {AddItems} from "./components/items/addItems.js";


class Routers extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path={"/"} component={App}>
          <IndexRoute component={Greetings}/>
          <Route path={"/signup"} component={Signup}></Route>
          <Route path={"/signin"} component={Signin}></Route>
          <Route path={"/home"} component={Home}></Route>
          <Route path={"/addOrders"} component={AddOrders}></Route>
          <Route path={"/addItems"} component={AddItems}></Route>

        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
);
