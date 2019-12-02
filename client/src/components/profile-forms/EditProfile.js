import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  useEffect(() => {
    M.AutoInit();
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      githubusername:
        loading || !profile.githubusername ? "" : profile.githubusername,
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram
    });
  }, [loading, getCurrentProfile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  return (
    <Fragment>
      <section className="container">
        <h3 className="teal-text">Create your profile</h3>
        <p>
          <i className="material-icons left">person</i>Details about yourself
        </p>
        <form onSubmit={e => onSubmit(e)}>
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0"> Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other...</option>
          </select>
          <div className="input-field">
            <i className="material-icons prefix">business</i>
            <input
              type="text"
              id="company"
              name="company"
              name="company"
              value={company}
              placeholder={company}
              onChange={e => onChange(e)}
            />

            <span className="helper-text">Company</span>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">web</i>
            <input
              type="text"
              id="website"
              name="website"
              name="website"
              value={website}
              onChange={e => onChange(e)}
              placeholder={website}
            />

            <span className="helper-text">Website</span>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">my_location</i>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={e => onChange(e)}
              placeholder={location}
            />

            <span className="helper-text"> Location</span>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">business_center</i>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder={skills}
              value={skills}
              onChange={e => onChange(e)}
            />

            <span className="helper-text">Skills</span>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">work</i>
            <input
              type="text"
              id="githubname"
              name="githubusername"
              value={githubusername}
              onChange={e => onChange(e)}
              placeholder={githubusername}
            />

            <span className="helper-text">Github Username</span>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">chat</i>
            <input
              type="text"
              id="bio"
              name="bio"
              value={bio}
              onChange={e => onChange(e)}
              placeholder={bio}
            />

            <span className="helper-text">Bio</span>
          </div>
          <div className="add-social-link">
            <ul className="collapsible">
              <li>
                <div className="collapsible-header">
                  {" "}
                  Add social link
                  <i className="material-icons left">keyboard_arrow_down</i>
                </div>
                <div className="collapsible-body">
                  <div className="input-field col s12">
                    <i
                      className="fab fa-twitter prefix"
                      style={{ color: "#00acee" }}
                    ></i>
                    <input
                      id="twitter"
                      type="text"
                      name="twitter"
                      value={twitter}
                      onChange={e => onChange(e)}
                    />
                  </div>

                  <div className="input-field col s12">
                    <i
                      className="fab fa-facebook prefix"
                      style={{ color: "#3b5998" }}
                    ></i>
                    <input
                      id="facebook"
                      type="text"
                      name="facebook"
                      value={facebook}
                      placeholder={facebook}
                      onChange={e => onChange(e)}
                    />
                  </div>

                  <div className="input-field col s12">
                    <i
                      className="fab fa-youtube prefix"
                      style={{ color: "#c4302b" }}
                    ></i>
                    <input
                      id="youtube"
                      type="text"
                      name="youtube"
                      value={youtube}
                      onChange={e => onChange(e)}
                    />
                  </div>

                  <div className="input-field col s12">
                    <i
                      className="fab fa-linkedin prefix"
                      style={{ color: "#0077b5" }}
                    ></i>
                    <input
                      id="linkedin"
                      type="text"
                      name="linkedin"
                      value={linkedin}
                      onChange={e => onChange(e)}
                    />
                  </div>

                  <div className="input-field col s12">
                    <i
                      className="fab fa-instagram prefix"
                      style={{
                        color: "#8e24aa"
                      }}
                    ></i>
                    <input
                      id="instagram"
                      type="text"
                      name="instagram"
                      value={instagram}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <input type="submit" className="btn" />
          &nbsp;&nbsp;&nbsp;
          <Link className="btn grey" to="/dashboard">
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
