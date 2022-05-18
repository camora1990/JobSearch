import React from "react";
import PropTypes from "prop-types";

const AlertComponent = ({ title, description, footer }) => {
  return (
    <>
      {" "}
      <div className="alert bg-dark" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>
                     "BIENVENIDO A JOBSEARCH!!!      
        </p>
        <hr />
        <p className="mb-0">
        En este panel personal encontrarás todas tus ofertas.
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
