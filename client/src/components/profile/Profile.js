import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileGithub from "./ProfileGithub";

import M from "materialize-css/dist/js/materialize.min.js";

import { getProfileById } from "../../actions/profile";
import ProfileTab from "./ProfileTab";
const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  const { id } = useParams();
  useEffect(() => {
    M.AutoInit();
    getProfileById(id);
  }, [getProfileById, id]);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="container bckbtn">
            <Link to="/profiles" className="waves-effect waves-light btn">
              <i className="material-icons left">chevron_left</i>Back to
              Developers
            </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to="/edit-profile" className="btn right black">
                  Edit Profile
                </Link>
              )}
          </div>
          <ProfileTop profile={profile} />
          <ProfileTab profile={profile} />

          {profile.githubusername && (
            <ProfileGithub username={profile.githubusername} />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(mapStateToProps, { getProfileById })(Profile);
