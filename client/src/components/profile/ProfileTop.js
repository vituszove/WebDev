import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className="container white-text teal darken-1 center  profileimage">
      <img
        className="circle"
        style={{ border: "5px solid #fff" }}
        src={avatar}
        alt="developer"
      />
      <h4>{name}</h4>
      <p>
        {status} {company && <Fragment> at {company}</Fragment>}
      </p>
      <p>{location && <Fragment> {location}</Fragment>}</p>
      <div className="social-icons">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i
              className="fas fa-globe fa-2x tooltipped"
              data-position="bottom"
              data-tooltip="My website"
            ></i>
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <i
              className="fab fa-twitter fa-2x tooltipped"
              data-position="bottom"
              data-tooltip="Twitter"
            ></i>
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <i
              className="fab fa-facebook fa-2x tooltipped"
              data-position="bottom"
              data-tooltip="Facebook"
            ></i>
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <i
              className="fab fa-linkedin fa-2x tooltipped"
              data-position="bottom"
              data-tooltip="Linkedin"
            ></i>
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <i
              className="fab fa-instagram fa-2x tooltipped"
              data-position="bottom"
              data-tooltip="Instagram"
            ></i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
