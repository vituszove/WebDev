import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  // } else { //AXIOS METHOD
  //   const newUser = {
  //     name,
  //     email,
  //     password
  //   };
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     };
  //     const body = JSON.stringify(newUser);

  //     const res = await axios.post("/api/users", body, config);
  //     console.log(res);
  //   } catch (err) {
  //     console.error(err.response.data);
  //   }
  // }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 ">
          <div className="card register-form">
            <h3
              className="center white-text teal"
              style={{ padding: "1rem 0" }}
            >
              Sign up
            </h3>

            <div className="card-content">
              <div className="row ">
                <form className="col s12" onSubmit={e => onSubmit(e)}>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="icon_prefix"
                      type="text"
                      className="validate"
                      name="name"
                      value={name}
                      onChange={e => onChange(e)}
                      required
                    />
                    <label htmlFor="icon_prefix">Name</label>
                    <span
                      className="helper-text"
                      data-error="This field is required"
                      data-success="That's a good name"
                    >
                      Please enter your name
                    </span>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="validate"
                      value={email}
                      onChange={e => onChange(e)}
                      autoComplete="true"
                      required
                    />
                    <label htmlFor="email">Email</label>
                    <span
                      className="helper-text"
                      data-error="Invalid email address"
                      data-success="Valid email address"
                    >
                      This sites use gravatar, if you want a profile picture
                      please use gravatar email.
                    </span>
                  </div>
                  <div className="input-field col l6 m6 s12">
                    <i className="material-icons prefix">lock</i>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="validate"
                      minLength="6"
                      required
                      autoComplete="true"
                      value={password}
                      onChange={e => onChange(e)}
                    />
                    <label htmlFor="password">Password</label>
                    <span
                      className="helper-text"
                      data-error="Password must be 6 or more character"
                    >
                      Please enter your password.
                    </span>
                  </div>
                  <div className="input-field col l6 m6 s12">
                    <i className="material-icons prefix">lock</i>
                    <input
                      id="cpassword"
                      type="password"
                      name="password2"
                      className="validate"
                      minLength="6"
                      value={password2}
                      onChange={e => onChange(e)}
                      required
                    />
                    <label htmlFor="cpassword">Confirm Password</label>
                    <span
                      className="helper-text"
                      data-error="Password must be 6 or more character"
                    >
                      Please re-enter your password.
                    </span>
                  </div>

                  <div>
                    <input
                      type="submit"
                      className="btn-large right"
                      value="Register"
                      href="#"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="card-action">
              <p>
                Already have an account?
                <Link to="/login" className="teal-text">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
