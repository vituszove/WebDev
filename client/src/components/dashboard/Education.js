import React, { Fragment } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";
const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
        {edu.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn red white-text"
          onClick={() => deleteEducation(edu._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h5 className="teal-text">Education Credentials</h5>

      <table className="striped">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th className="red-text">Action</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
