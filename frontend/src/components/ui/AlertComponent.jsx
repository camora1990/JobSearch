import React from "react";
import PropTypes from "prop-types";

const AlertComponent = ({ title, description, footer }) => {
  return (
    <>
      {" "}
      <div className="alert bg-dark" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </div>
    </>
  );
};

AlertComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
};

export default AlertComponent;
