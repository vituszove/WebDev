import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing" style={{ position: "fixed" }}>
      <div className="overlay">
        <div className="landing-inner">
          <h1>WebDev Community</h1>
          <h6 style={{ marginTop: "-.3rem" }}>
            Social network for developers, share your post and getting help from
            other developers..
          </h6>
          <div className="landingbtn">
            <Link
              to="/register"
              className="btn "
              style={{
                width: "8rem",
                height: "2.4rem",
                borderRadius: "15px"
              }}
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="btn white-text transparent"
              style={{ border: "1px solid teal", borderRadius: "15px" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
