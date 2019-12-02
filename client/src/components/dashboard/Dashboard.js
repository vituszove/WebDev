import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { DashboardActions } from "./DashboardActions";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Experience from "./Experience";
import Education from "./Education";
const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className="container">
      <h3 className="teal-text">
        <i className="material-icons left medium">dashboard</i>Dashboard
      </h3>
      <p>
        Welcome, <strong>{user && user.name}</strong>
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="danger-zone">
            <h5 className="red-text">Danger Zone</h5>
            <p>Permanently Delete My Account</p>
            <button
              className="red white-text btn"
              onClick={() => deleteAccount()}
            >
              Delete Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            Hey, tell us more about you, lets add some details to your profile
          </p>
          <Link to="/create-profile" className="btn">
            <i className="material-icons left">person_add</i>Create Profile
          </Link>
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
