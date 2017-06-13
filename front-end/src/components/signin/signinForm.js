import React,{Component} from 'react';
import {loginUser} from "../../lib/services.js";

import "../../style/index.css";

export class SigninForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username : "",
      password: ""
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange (event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log("hello ", this.state);
    const newUser = {username: this.state.username, password: this.state.password}
    loginUser(newUser)
      .then(() => {
        console.log("=== login user  === ",  newUser );
        this.context.router.push("/home")
      })
  }

  handleEmptySubmit = (event) => {
  event.preventDefault(); //without it the page will reload after submit
  this.setState({
    errorMessage: "please login ..."
  })
}

  render(){
    const submitHandler = this.state.username ? this.handleSubmit : this.handleEmptySubmit
    return(
      <form onSubmit={submitHandler}>
        <h1>Welcome !!!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.onChange} className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Log In</button>
      </form>
    )
  }
}


SigninForm.propTypes = {
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired
}

SigninForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}
