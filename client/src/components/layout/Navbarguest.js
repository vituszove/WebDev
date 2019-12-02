import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Navbg from "../../img/navbg.jpg";
const Navbarguest = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <div>
        <nav>
          <div className="nav-wrapper blue-grey darken-4">
            <div className="container">
              <Link to="/" className="brand-logo white-text">
                <i className="material-icons left w">code</i>WebDev
              </Link>
              <button
                data-target="mobile-demo"
                className="sidenav-trigger blue-grey darken-4 white-text"
                style={{ borderBottom: "2px solid teal" }}
              >
                <i className="material-icons white-text">menu</i>
              </button>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/profiles" className="white-text">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="white-text">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="white-text">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav blue-grey darken-4" id="mobile-demo">
        <div className="background">
          <img
            src={Navbg}
            className="guest-sidenav-img"
            alt="sidenav-background"
          />
          <h5 className="white-text center side-logo">WebDev</h5>
        </div>
        <li>
          <Link to="/profiles" className="sidenav-close">
            Developers
          </Link>
        </li>
        <li>
          <Link to="/register" className="sidenav-close">
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" className="sidenav-close">
            Login
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default Navbarguest;
