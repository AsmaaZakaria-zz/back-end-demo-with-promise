import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
// import { createBrowserHistory } from 'history'

import {App} from "./components/App.js";
import {Signup} from "./components/signup/signupPage.js";
import {Signin} from "./components/signin/signinPage.js";
import {Home} from "./components/home/home.js";

class Routers extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path={"/"} component={App}>
          <IndexRoute component={Signin}/>
          <Route path={"/signup"} component={Signup}></Route>
          <Route path={"/home"} component={Home}></Route>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
);
