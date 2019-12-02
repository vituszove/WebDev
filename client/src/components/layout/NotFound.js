import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="teal-text center">
        <i className="fas fa-exclamation"></i> PAGE NOT FOUND
      </h1>
      <h5 className="grey-text text-darken-3 center">
        Sorry, this page doen't exists..
      </h5>
    </Fragment>
  );
};
export default NotFound;
