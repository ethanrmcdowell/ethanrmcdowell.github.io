import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <a className="navbar-brand">["ETHN", "MCDWL"]</a>
        <form className="d-flex">
          <ul className="nav navbar-nav navbar-expand-lg">
            <li className="nav-item pad">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item pad">
              <a className="nav-link" href="/portfolio">
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
}

export default Nav;