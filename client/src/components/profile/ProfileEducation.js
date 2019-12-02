import React, { Fragment } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => {
  return (
    <Fragment>
      <div className="education">
        <h6>{school}</h6>
        <p className="degree-fos">
          {degree} - {fieldofstudy}
        </p>
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

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
