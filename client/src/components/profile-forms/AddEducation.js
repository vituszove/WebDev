import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
const AddEducation = ({ addEducation, history }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="container">
      <h3 className="teal-text">Add an Education</h3>
      <p>
        <i className="material-icons left">school</i>Add any school or bootcamp
        that you have attended
      </p>

      <form
        onSubmit={e => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div className="input-field">
          <input
            type="text"
            id="school"
            name="school"
            value={school}
            onChange={e => onChange(e)}
          />
          <label htmlFor="school">School *</label>
          <span className="helper-text">(eg. University, College)</span>
        </div>
        <div className="input-field">
          <input
            type="text"
            id="degree"
            name="degree"
            value={degree}
            onChange={e => onChange(e)}
          />
          <label htmlFor="degree"> Degree or Certificate*</label>
          <span className="helper-text">
            School or bootcamp where you learn the developing skills
          </span>
        </div>
        <div className="input-field">
          <input
            type="text"
            id="fieldofstudy"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={e => onChange(e)}
          />
          <label htmlFor="fieldofstudy">Field of Study</label>
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
          <span>Current School</span>
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
            id="desc"
            className="materialize-textarea"
            name="description"
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
          <label htmlFor="desc">Programme Description</label>
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(withRouter(AddEducation));
