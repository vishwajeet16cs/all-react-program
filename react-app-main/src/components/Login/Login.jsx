import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  emailHandler = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);

    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div>
        <h2>Login Component</h2>
        <pre>{JSON.stringify(this.state)}</pre>
        <form>
          <label>Email</label>
          <input type="text" onChange={this.emailHandler} /> <br />
          <label>Password</label>
          <input type="text" onChange={this.passwordHandler} /> <br />
          <br />
        </form>
      </div>
    );
  }
}

export default Login;