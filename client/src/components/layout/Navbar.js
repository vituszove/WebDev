import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import Navbarguest from "./Navbarguest";

import Navbg from "../../img/navbg.jpg";
const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  useEffect(() => {
    M.AutoInit();
  }, [isAuthenticated, user]);

  return !loading && isAuthenticated && user ? (
    <Fragment>
      <div className="navbar-fixed">
        <ul id="dropdown1" className="dropdown-content blue-grey darken-4 ">
          <li>
            <Link to="/dashboard" className="white-text">
              Dashboard
            </Link>
          </li>
          <li>
            <Link onClick={logout} to="/" className="white-text">
              Logout
            </Link>
          </li>
        </ul>
        <nav>
          <div className="nav-wrapper blue-grey darken-4">
            <div className="container">
              <Link to="/" className="brand-logo ">
                <i className="material-icons left ">code</i>
                WebDev
              </Link>
              <button
                data-target="mobile-demo"
                className="sidenav-trigger blue-grey darken-4 white-text"
                style={{ borderBottom: "teal 2px solid" }}
              >
                <i className="material-icons">menu</i>
              </button>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/posts">
                    <i className="material-icons left ">forum</i>
                    Community
                  </Link>
                </li>{" "}
                <li>
                  <Link to="/profiles">
                    <i className="material-icons left white-text">people</i>
                    Developers
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-trigger"
                    href="#!"
                    data-target="dropdown1"
                  >
                    Settings
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav blue-grey darken-4" id="mobile-demo">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={Navbg} alt="sidenav-header" />
            </div>
            <a href="#user">
              <img className="circle" src={user.avatar} alt="user" />
            </a>
            <a href="#name">
              <span className="white-text name">{user.name}</span>
            </a>
            <a href="#email">
              <span className="white-text email">{user.email}</span>
            </a>
          </div>
        </li>
        <li>
          <Link to="/posts" className="sidenav-close">
            <i className="material-icons left white-text">forum</i>
            Community
          </Link>
        </li>
        <li>
          <Link to="/profiles" className="sidenav-close">
            <i className="material-icons left white-text">people</i>
            Developers
          </Link>
        </li>

        <li>
          <Link to="/dashboard" className="sidenav-close">
            <i className="material-icons left white-text">dashboard</i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link onClick={logout} to="/" className="sidenav-close">
            <i className="material-icons left white-text">exit_to_app</i>
            Logout
          </Link>
        </li>
      </ul>
    </Fragment>
  ) : (
    <Navbarguest />
  );
};
Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { logout })(Navbar);
