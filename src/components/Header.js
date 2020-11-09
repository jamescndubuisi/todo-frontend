import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
export class Header extends Component {
  render() {
    return (
      <div>
        <div className="card Header ">
          <div className="card-header bg-dark">Todo List</div>
        </div>
      </div>
    );
  }
}

export default Header;
