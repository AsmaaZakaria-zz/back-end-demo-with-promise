import React,{Component} from 'react';
import {createUser} from "../../lib/services.js";

import "../../style/index.css";

export class SignupForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      phone: "",
      address: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange (event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()
    console.log("user info --> ", this.state);
    const newUser = {username: this.state.username, password: this.state.password, phone: this.state.phone, address: this.state.address}
    createUser(newUser)
      .then(() => {
        console.log("=== create new user  === ",  newUser );
        this.context.router.push("/home")
      })
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Join Us !!!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.onChange} className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">Phone</label>
          <input type="number" name="phone" value={this.state.phone} onChange={this.onChange} className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">Address</label>
          <input type="text" name="address" value={this.state.address} onChange={this.onChange} className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
      </form>
    )
  }
}


SignupForm.propTypes = {
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  address: React.PropTypes.string.isRequired,
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}
