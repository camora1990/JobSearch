import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth/authContext";
import moment from "moment";
import { NavLink } from "react-router-dom";

export const Offert = () => {
  const { user } = useContext(AuthContext);
  const options = { headers: { Authorization: `Bearer ${user.token}` } };
  const [offerts, setofferts] = useState([]);

  useEffect(() => {
    console.log(options);
    axios
      .get("/offer", options)
      .then((data) => {
        setofferts(data.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card-deck row mt-3 animate__animated animate__slideInDown">
      {offerts.map((offert) => (
        <div key={offert._id} className="col-12 col-md-6 col-lg-4 my-3">
          <div className="card h-100 card-offert bg-dark">
            <div className="hover_color_bubble"></div>
            <div className="card-body">
              <h5 className="card-title">{offert.name}</h5>
              <p className="card-text">{offert.details.description}</p>
              <p className="card-text">
                <span>Category: </span>
                {offert.category.category}
              </p>
              <p className="card-text"> 
                <span>Employer: </span>
                {offert.user.name}
              </p>
              <NavLink to="/deatils">
                <button className="button  mt-3" type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span> Read more
                </button>
              </NavLink>
              <div className="card-footer bg-transparent text-muted mt-3">
                {moment(offert.createdAt, "YYYYMMDD").fromNow()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
