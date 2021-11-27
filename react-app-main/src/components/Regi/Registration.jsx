import React, { Component } from "react";

class Registration extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  updateForm = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Registration page is connected</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <pre>{JSON.stringify(this.state)}</pre>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    name="username"
                    onChange={this.updateForm}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={this.updateForm}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={this.updateForm}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Registration"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;