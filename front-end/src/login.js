import React,{Component} from 'react';

export class Login extends Component{
  constructor(){
    super();
    this.state = {
      username : "",
      password: ""
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      username: event.target.username,
      password: event.target.password
    })
    console.log("hello ", this.state.username);
  }
  render(){
    return(
      <div>
        <h1>Login Page</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          username <input type="text" username={this.state.username}/><br/>
          password <input type="password" password={this.state.password}/><br/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}
