import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import { createProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);
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

  const onSubmit = async e => {
    e.preventDefault();
    createProfile(formData, history);
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
            <input
              type="text"
              id="company"
              name="company"
              name="company"
              value={company}
              onChange={e => onChange(e)}
            />
            <label htmlFor="company">Company</label>
            <span className="helper-text">
              Could be your own company or you work for
            </span>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="website"
              name="website"
              name="website"
              value={website}
              onChange={e => onChange(e)}
            />
            <label htmlFor="website">Website</label>
            <span className="helper-text">
              Could be your own website or Company website
            </span>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={e => onChange(e)}
            />
            <label htmlFor="location">Location</label>
            <span className="helper-text"> City & State</span>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="skills"
              name="skills"
              value={skills}
              onChange={e => onChange(e)}
            />
            <label htmlFor="skills">Skills</label>
            <span className="helper-text">
              Please use comma separated value (eg. HTML,CSS,JavaScript)
            </span>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="githubname"
              name="githubusername"
              value={githubusername}
              onChange={e => onChange(e)}
            />
            <label htmlFor="githubname">Github Username</label>
            <span className="helper-text">
              If you want your latest repos and a Github link, include your
              username
            </span>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="bio"
              name="bio"
              value={bio}
              onChange={e => onChange(e)}
            />
            <label htmlFor="bio">Bio of yourself</label>
            <span className="helper-text">
              {" "}
              Tell us a little about yourself
            </span>
          </div>
          <ul class="collapsible">
            <li>
              <div class="collapsible-header ">
                <i class="material-icons left">expand_more</i>
                <strong>Add Social Link </strong>
                <span style={{ marginLeft: "1rem", fontStyle: "italic" }}>
                  (optional)
                </span>
              </div>
              <div class="collapsible-body">
                <div className="add-social-link">
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
                    <label htmlFor="twitter">Twitter URL</label>
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
                      onChange={e => onChange(e)}
                    />
                    <label htmlFor="facebook">Facebook URL</label>
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
                    <label htmlFor="youtube">Youtube URL</label>
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
                    <label htmlFor="linkedin">Linkedin URL</label>
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
                    <label htmlFor="instagram">Instagram URL</label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
