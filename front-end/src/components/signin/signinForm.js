import React,{Component} from 'react';
import {browserHistory} from "react-router";

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
    // browserHistory.push("/home")
    this.context.router.push("/home")
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
        <br/>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control"/>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
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
