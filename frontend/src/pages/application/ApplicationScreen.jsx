import React, { useContext, useEffect, useState } from "react";
import AlertComponent from "../../components/ui/AlertComponent";
import axios from "axios";
import { AuthContext } from "../../context/auth/authContext";
import { createErrorMessage } from "../../helpers/responseErrorMessage";
import { errormesage } from "../../helpers/alertMessages";
import moment from "moment";

export const ApplicationScreen = () => {
  const { user } = useContext(AuthContext);
  const options = { headers: { Authorization: `Bearer ${user.token}` } };
  const [applications, setApplications] = useState([]);
  const getApplication = async () => {
    try {
      const { data: response } = await axios.get(`/application`, options);
      setApplications(response.data);
    } catch (error) {
      console.error(error);
      const responseError = createErrorMessage(error);
      errormesage(responseError);
    }
  };

  useEffect(() => {
    getApplication();
  }, []);

  return (
    //   <div className="my-application mt-5">
    //     <AlertComponent
    //       message={
    //         "At this time you do not have applications for offers, please go to offers and apply for the one that suits your profile and city."
    //       }
    //     />
    //   </div>
    // );
    <section className="mt-5">
      <div className="card text-center bg-dark">
        <div className="card-header">
          {/* {applications[0].employer.name} */}
          </div>
        <div className="card-body">
          <h5 className="card-title">
            {/* {applications[0].offer.name} */}
            </h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <div className="d-flex">
            <div className="me-2 bg-darkcategory-item">
              <i className="fa-solid fa-tags me-2 text-muted"></i>
              {/* {applications[0].offer.category.category} */}
            </div>
          </div>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">
          {/* {moment(applications[0].createdAt).fromNow()} */}
        </div>
      </div>
    </section>
  );
};
