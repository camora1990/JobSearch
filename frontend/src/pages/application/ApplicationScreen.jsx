import React from "react";
import AlertComponent from "../../components/ui/AlertComponent";

export const ApplicationScreen = () => {
  return (
    <div className="my-application mt-5">
      <AlertComponent message={"At this time you do not have applications for offers, please go to offers and apply for the one that suits your profile and city."}/>
    </div>
  );
};
