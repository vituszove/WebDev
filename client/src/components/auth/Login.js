import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 ">
          <div className="card login-form">
            <h3
              className="center white-text teal"
              style={{ padding: "1rem 0" }}
            >
              Login
            </h3>

            <div className="card-content">
              <div className="row ">
                <form className="col s12" onSubmit={e => onSubmit(e)}>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="validate"
                      onChange={e => onChange(e)}
                      value={email}
                      required
                    />
                    <label htmlFor="email">Email</label>
                    <span
                      className="helper-text"
                      data-error="Invalid email address"
                      data-success="Valid email address"
                    >
                      Please enter your email.
                    </span>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      onChange={e => onChange(e)}
                      className="validate"
                      minLength="6"
                      value={password}
                      required
                    />
                    <label htmlFor="password">Password</label>
                    <span
                      className="helper-text"
                      data-error="Password must be 6 or more character"
                      data-success="Valid Password"
                    >
                      Please enter your password.
                    </span>
                  </div>

                  <div>
                    <input
                      type="submit"
                      className="btn-large right"
                      value="Login"
                      href="#"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="card-action">
              <p>
                Don't have an account?
                <Link to="/register" className="teal-text">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
Login.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool //is boolean
};
export default connect(mapStateToProps, { login })(Login);
