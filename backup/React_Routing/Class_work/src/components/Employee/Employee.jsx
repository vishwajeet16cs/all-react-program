import React, { Component } from "react";
import edata from "./Data";
class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: edata,
    };
  }
  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.map((emp) => {
                    return (
                      <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.loc}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Employee;