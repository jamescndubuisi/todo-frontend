import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import Item from "./components/Item";
import TaskForm from "./components/TaskForm";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App App-header col-xs col-sm col-md">
        <Header></Header>
        <div>
          <Route exact path="/" component={Content}></Route>

          <Route exact path="/create" component={TaskForm}></Route>
          <Route exact path="/tasks/:id" component={Item}></Route>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
