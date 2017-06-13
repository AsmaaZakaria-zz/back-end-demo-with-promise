import React,{Component} from 'react';
import {loginUser} from "../../lib/services.js";
import classnames from "classnames";
import {validateInput} from "../../validations/signin.js";
import TextFieldGroup from "../../common/textFieldGroup.js";

import "../../style/index.css";

export class SigninForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username : "",
      password: "",
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange (event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.isValid()){
      this.setState({errors: {}});
      console.log("hello ", this.state);
      const logUser = {username: this.state.username, password: this.state.password}
      loginUser(logUser)
        .then(() => {
          console.log("=== login user  === ",  logUser );
          this.context.router.push("/home")
        },
        (err) => this.setState({ errors: err.response.data})
      )
    }

  }


  render(){
    const {errors} = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Welcome !!!</h1>

        { errors.form && <div className="alert alert-danger">{errors.form}</div> }

        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
        />


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
