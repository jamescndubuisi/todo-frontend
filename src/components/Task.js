import React, { Component } from "react";
// import Edit from "./Edit";
// import Delete from "./Delete";
import "bootstrap/dist/css/bootstrap.css";
// import View from "./View";
import "../App.css";
import { Link } from "react-router-dom";
class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // clickhandler = () => {
  //   this.props.history.push(`/${this.props.id}`);
  // };

  render() {
    return (
      <tr className="custom">
        {/* <td>{this.props.title}</td> */}
        <td>{this.props.description}</td>
        <td>{this.props.deadline}</td>
        {/* <td>{this.props.completed.toString()}</td> */}
        <td>
          <Link to={"tasks/" + this.props.id} className="btn btn-info mr-2">
            View
          </Link>
          {/* <button className="btn btn-info" onClick={this.clickhandler}>
            View
          </button> */}
        </td>
        {/* <td>
          <Delete></Delete>
        </td> */}
      </tr>
    );
  }
}

export default Task;
