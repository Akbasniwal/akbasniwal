import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        style={{
          borderBottom: `1px solid ${
            props.mode === "dark" ? "white" : "black"
          }`,
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand centerText" to="/">
            <h3 style={{ fontWeight: "bolder", margin: "0px" }}>AK.Basniwal</h3>
          </Link>
          <div></div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-hvr">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch right">
            <input
              onClick={props.change}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="darkswitch"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}