import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
const AddExperience = ({ addExperience, history }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="container">
      <h3 className="teal-text">Add an Experience</h3>
      <p>
        <i className="material-icons left">work</i>Add any experience related to
        programming/ developers
      </p>

      <form
        onSubmit={e => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <div className="input-field">
          <input
            type="text"
            id="jobtitle"
            name="title"
            value={title}
            onChange={e => onChange(e)}
          />
          <label htmlFor="jobtitle">Job Title</label>
          <span className="helper-text">
            (eg. Front-end Developer, Back-end Developer)
          </span>
        </div>
        <div className="input-field">
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={e => onChange(e)}
          />
          <label htmlFor="company"> Company *</label>
          <span className="helper-text">
            Could be your own Company or you work for
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
        </div>
        <div className="input-field">
          <input
            type="date"
            id="fromdate"
            name="from"
            value={from}
            onChange={e => onChange(e)}
          />
          <label htmlFor="fromdate">From Date</label>
        </div>
        <label>
          <input
            type="checkbox"
            name="current"
            checked={current}
            value={current}
            onChange={e => {
              setFormData({ ...formData, current: !current });
              toggleDisabled(!toDateDisabled);
            }}
          />
          <span>Current Job</span>
        </label>
        <div className="input-field">
          <input
            type="date"
            id="todate"
            name="to"
            value={to}
            onChange={e => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
          <label htmlFor="todate">To Date</label>
        </div>
        <div className="input-field">
          <textarea
            id="jobdesc"
            className="materialize-textarea"
            name="description"
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
          <label htmlFor="jobdesc">Job Description</label>
        </div>
        <input type="submit" className="btn" />
        &nbsp;&nbsp;&nbsp;
        <Link className="btn grey" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(withRouter(AddExperience));
