import React, { Component } from "react";
import Task from "./Task";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
// import isEmpty from "../validation/is_empty";

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
    // this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    console.log("Here");
    axios.get("api/todo/").then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    return (
      <div className="container Content">
        <table className="table table-stripped">
          <thead className="custom">
            <tr className="col">
              <td>Description</td>
              <td>Deadline</td>

              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length > 0 &&
              this.state.data.map((item) => (
                <Task
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  deadline={item.deadline}
                  completed={item.completed}
                ></Task>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Content;
