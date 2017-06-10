import React,{Component} from 'react';

import "../../style/index.css";

export class SigninForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username : "",
      password: ""
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello ", this.state.username);
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
      <form onSubmit={this.onSubmit}>
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
