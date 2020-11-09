import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import axios from "axios";
class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      deadline: "",
      errors: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    // console.log("changing");
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    // console.log("submitting");
    const task = {
      title: this.state.title,
      description: this.state.description,
      deadline: this.state.deadline,
    };
    console.log(task);
    axios
      .post("api/todo", task)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
        this.setState({ errors: err });
      });
  }

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="custom">title</label>
            <input
              name="title"
              id="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.onChange}
            ></input>
          </div>

          <br />
          <div className="form-group">
            <label className="custom">Description</label>
            <input
              name="description"
              id=" description"
              placeholder="description"
              value={this.state.description}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label className="custom">deadline</label>
            <input
              name="deadline"
              id="deadline"
              placeholder="deadline"
              type="date"
              value={this.state.deadline}
              onChange={this.onChange}
            ></input>
          </div>

          <button name="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
