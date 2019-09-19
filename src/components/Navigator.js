import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navigator extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          date-toggle="collapse"
          data-target="#dataSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          My React Page
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link style={{ marginRight: "1rem" }} to="/">
                Home
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link style={{ marginRight: "1rem" }} to="/todo">
                Todo
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link style={{ marginRight: "1rem" }} to="/contact">
                Contact
              </Link>{" "}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigator;
