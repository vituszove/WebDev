import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import { getProfileById } from "../../actions/profile";
import M from "materialize-css/dist/js/materialize.min.js";
import ProfileEducation from "./ProfileEducation";

const ProfileTab = ({ profile: { profile, loading } }) => {
  useEffect(() => {
    M.Tabs.init(document.querySelectorAll(".tabs"), { swipeable: true });
  }, [profile, loading]);
  return (
    <div className="container z-depth-1">
      <div className="row">
        <ul id="tabs" className="tabs teal">
          <li className="tab col s4 ">
            <a className="btn black white-text" href="#test-swipe-1">
              <i className="material-icons left">code</i>About
            </a>
          </li>
          <li className="tab col s4">
            <a className="btn black white-text" href="#test-swipe-2">
              <i className="material-icons left">business_center</i>
              Experience
            </a>
          </li>
          <li className="tab col s4">
            <a className="btn black white-text" href="#test-swipe-3">
              <i className="material-icons left">school</i>Education
            </a>
          </li>
        </ul>

        {/* About tab */}
        <div id="test-swipe-1" className="col s12 tabcontent ">
          <ProfileAbout profile={profile} />
        </div>

        <div id="test-swipe-2" className="col s12 tabcontent ">
          <h5 className="teal-text working-experience-title">
            Working Experience
          </h5>
          <div className="line"></div>
          {profile.experience.length > 0 ? (
            <Fragment>
              {profile.experience.map(experience => (
                <ProfileExperience
                  key={experience._id}
                  experience={experience}
                />
              ))}
            </Fragment>
          ) : (
            <h6 style={{ marginLeft: "2.5%" }}>No experience</h6>
          )}
        </div>
        <div id="test-swipe-3" className="col s12 tabcontent ">
          <h5 className="teal-text education-title">Education</h5>
          <div className="line"></div>
          {profile.education.length > 0 ? (
            <Fragment>
              {profile.education.map(education => (
                <ProfileEducation key={education._id} education={education} />
              ))}
            </Fragment>
          ) : (
            <h6 style={{ marginLeft: "2.5%" }}>No education</h6>
          )}
        </div>
      </div>
    </div>
  );
};

ProfileTab.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(mapStateToProps, { getProfileById })(ProfileTab);
