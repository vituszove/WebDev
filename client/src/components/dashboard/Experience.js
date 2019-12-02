import React, { Fragment } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn red white-text"
          onClick={() => deleteExperience(exp._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h5 className="teal-text">Experience Credentials</h5>

      <table className="striped">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th className="red-text">Action</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
