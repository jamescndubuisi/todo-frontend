import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      complete: "",
      deleted: "",
    };
    // this.state.complete = this.state.data.completed.bind(this);
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    console.log(this.props);
    axios.get(`api/todo/${params.id}`).then((recieved) => {
      this.setState({
        data: recieved.data,
        complete: recieved.data.completed.toString(),
        deleted: "false",
      });

      // alert();
    });
  }
  complete_task(wow) {
    console.log("here oooo");
    axios
      .put("api/todo/update", { completed: true, id: wow })
      .then((task) => {
        this.setState({ complete: "true" });
        console.log(task);
      })
      .catch((err) => console.log(err));
  }
  uncomplete_task(wow) {
    console.log("here oooo");
    axios
      .put("api/todo/update", { completed: false, id: wow })
      .then((task) => {
        this.setState({ complete: "false" });
        console.log(task);
      })
      .catch((err) => console.log(err));
  }
  delete_task(wow) {
    console.log(`delete ${wow}`);
    axios.delete(`api/todo/delete/${wow}`).then((task) => {
      this.setState({ deleted: "True" });
      console.log(task);
    });
  }

  render() {
    return (
      <div className="custom">
        <h2>Title: {this.state.data.title}</h2>
        <p>Description: {this.state.data.description}</p>
        <p>Deadline: {this.state.data.deadline}</p>
        <p>Completed: {this.state.complete}</p>
        <button className="btn btn-primary">Edit</button>
        <button
          className="btn btn-danger"
          onClick={() => this.delete_task(this.state.data._id)}
        >
          Delete
        </button>
        <button
          className="btn btn-info"
          onClick={() => this.complete_task(this.state.data._id)}
        >
          Complete
        </button>
        <button
          className="btn btn-info"
          onClick={() => this.uncomplete_task(this.state.data._id)}
        >
          uncomplete
        </button>
      </div>
    );
  }
}

export default Item;
