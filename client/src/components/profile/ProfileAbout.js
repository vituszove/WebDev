import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <Fragment>
    <div className="about">
      {bio && (
        <Fragment>
          {" "}
          <h5 className="teal-text biotitle">
            {name.trim().split(" ")[0]}'s Bio
          </h5>
          <p className="bio grey-text text-darken-2">{bio}</p>
        </Fragment>
      )}

      <div className="line"></div>
    </div>
    <div className="skillset ">
      <h5 className="teal-text">Skills Set</h5>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="chip white-text teal">
            {skill}
          </div>
        ))}
      </div>
    </div>
  </Fragment>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
