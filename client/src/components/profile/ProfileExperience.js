import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => {
  return (
    <Fragment>
      <div className="experience">
        <h6>
          {company} - {title}
        </h6>
        <p className="date grey-text text-darken-2">
          <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
          {!to ? " Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
        </p>
        <p className="desc-title">Description:</p>
        <p className="desc grey-text text-darken-2">{description}</p>
      </div>
      <div className="line"></div>
    </Fragment>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
