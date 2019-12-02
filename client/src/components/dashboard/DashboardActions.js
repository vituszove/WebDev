import React from "react";
import { Link } from "react-router-dom";
export const DashboardActions = () => {
  return (
    <div className="row dashboard-button">
      <div className="col s12"></div>
      <Link to="/edit-profile" className="btn-small col s12 m3 flow-text">
        <i className="material-icons left">person</i> Edit Profiles
      </Link>
      <Link to="/add-experience" className="btn-small col s12 m3 flow-text">
        <i className="material-icons left">work</i> Add Experience
      </Link>
      <Link to="/add-education" className="btn-small col s12 m3 flow-text">
        <i className="material-icons left">school</i> Add Education
      </Link>
    </div>
  );
};
