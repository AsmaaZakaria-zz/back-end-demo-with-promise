import React,{Component} from 'react';
import {createUser} from "../../lib/services.js";
import classnames from "classnames";
import validateInput from "../../validations/signup.js";
import TextFieldGroup from "../../common/textFieldGroup.js";

import "../../style/index.css";

export class SignupForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      phone: "",
      address: "",
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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

  onSubmit(event){
    event.preventDefault()
    if (this.isValid()){
      this.setState({errors: {}});
      console.log("user info --> ", this.state);
      const newUser = {username: this.state.username, password: this.state.password, phone: this.state.phone, address: this.state.address}
      createUser(newUser)
        .then(() => {
          console.log("=== create new user  === ",  newUser );
          this.context.router.push("/home")
        },
        (err) => this.setState({ errors: err.response.data})
      )
    }
  }

  render(){
    const {errors} = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Join Us !!!</h1>

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

        <TextFieldGroup
          error={errors.phone}
          label="Phone"
          onChange={this.onChange}
          value={this.state.phone}
          field="phone"
        />

        <TextFieldGroup
          error={errors.address}
          label="Address"
          onChange={this.onChange}
          value={this.state.address}
          field="address"
        />


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
