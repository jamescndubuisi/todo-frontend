import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap";
import "../App.css";
function Footer() {
  return (
    <div className="card Footer ">
      <div className="card-footer bg-dark ">
        &copy; The Just {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
