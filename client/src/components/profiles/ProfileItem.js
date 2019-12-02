import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
    bio
  }
}) => {
  return (
    <div className="card ">
      <div className="card-image teal">
        <img
          src={avatar}
          alt="profile"
          style={{
            height: "100%",
            width: "auto",
            borderRadius: "50%",
            margin: "0 auto",
            border: "3px solid #fff"
          }}
        />
      </div>

      <div className="card-content">
        <h5 className="teal-text center  ">{name}</h5>
        <p className="center profiles-location">
          {location && <span>{location}</span>}
        </p>

        <p className="center profiles-bio grey-text text-darken-1">{bio}</p>
      </div>
      <div className="card-action">
        <ul>
          {skills.slice(0, 4).map((skill, index) => (
            <li
              className="chip transparent teal-text"
              style={{ border: "1px solid teal" }}
              key={index}
            >
              {skill}
            </li>
          ))}{" "}
          <Link
            to={`/profile/${_id}`}
            className="btn right black full-size-btn"
          >
            View profile
          </Link>
        </ul>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
