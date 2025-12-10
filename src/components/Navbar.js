import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const mode = props.mode || "light";

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title || "TextUtils"}
        </a>

        <div className="navbar-nav">
          {/* <Link className="nav-link" to="/">
            Home
          </Link> */}
            <a className="nav-link" href="#">
            Home
          </a>



          {/* <Link className="nav-link" to="/about">
            About
          </Link> */}
        </div>

        <div
          className={`form-check form-switch text-${
            mode === "light" ? "dark" : "light"
          } ms-3`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            onChange={props.toggleMode}
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
