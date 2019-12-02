import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";
const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="container">
            <div className="row">
              <h3>Developers</h3>
              <p>
                <i className="material-icons left">people</i>Browser and connect
                to other developers
              </p>
              <div className="col s12 m12 l9">
                {profiles.length > 0 ? (
                  profiles.map(profile => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))
                ) : (
                  <h4>No profiles found</h4>
                )}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
