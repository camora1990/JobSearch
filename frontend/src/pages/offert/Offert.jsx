import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth/authContext";
import moment from "moment";
import { NavLink } from "react-router-dom";

export const Offert = () => {
  const { user } = useContext(AuthContext);
  const options = { headers: { Authorization: `Bearer ${user.token}` } };
  const [offerts, setofferts] = useState([]);
  const [countries, setCountries] = useState([]);
  const [categories, setcategories] = useState([]);
  const [category, setCategory] = useState("");
  const [country, setcountry] = useState("");
  const [filter, setfilter] = useState(false);

  const handleChangeCountry = (e) => {
    setcountry(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    axios
      .get("/category", options)
      .then((data) => {
        setcategories(data.data.data);
      })
      .catch((err) => console.error(err));
    axios
      .get("/country/", options)
      .then((data) => {
        setCountries(data.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!filter) {
      setCategory("");
      setcountry("");
    }
    filter
      ? axios
          .get(`/offer?country=${country}&category=${category}`, options)
          .then((data) => {
            setofferts(data.data.data);
          })
          .catch((err) => console.error(err))
      : axios
          .get("/offer", options)
          .then((data) => {
            setofferts(data.data.data);
          })
          .catch((err) => console.error(err));
  }, [filter]);

  return (
    <>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-12 col-lg-6  d-flex p-2">
          <select
            className="form-select mx-2"
            value={category}
            onChange={handleChangeCategory}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.category}
              </option>
            ))}
          </select>
          <select
            className="form-select mx-2"
            value={country}
            onChange={handleChangeCountry}
          >
            <option value="">Select country</option>
            {countries.map((country) => (
              <option key={country._id} value={country._id}>
                {country.country}
              </option>
            ))}
          </select>
          <button
            className="button"
            onClick={() => {
              (country || category) && setfilter(!filter);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span> {filter ? "Clear" : "Search"}
          </button>
        </div>
      </div>

      <div className="card-deck row mt-3 animate__animated animate__slideInDown">
        {offerts.map((offert) => (
          <div key={offert._id} className="col-12 col-md-4 col-lg-3 my-3">
            <div className="card h-100 card-offert bg-dark">
              <div className="hover_color_bubble"></div>
              <div className="card-body">
                <h5 className="card-title">{offert.name}</h5>
                <p className="card-text my-3">
                  <span>Employer: </span>
                  {offert.user.name}
                </p>
                <div className="d-flex aling-items-center card-offert_category mb-3">
                  <div className="me-2 bg-darkcategory-item">
                    <i className="fa-solid fa-tags me-2 text-muted"></i>
                    {offert.category.category}
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  {" "}
                  <div className="card-offert__time">
                    <i className="fa-solid fa-clock text-muted me-1"></i>{" "}
                    {moment(offert.createdAt, "YYYYMMDD").fromNow()}
                  </div>
                  <div className="card-offert__location">
                    <i className="fa-solid fa-location-dot text-muted me-1"></i>
                    {`${offert.country.country}`}
                  </div>
                </div>

                <div className="card-footer bg-transparent text-muted mt-3">
                  <NavLink to="/deatils">
                    <button className="button">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span> Read more
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
