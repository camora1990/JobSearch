import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/ui/NavBar";
import { ApplicationScreen } from "../pages/application/ApplicationScreen";
import { Offert } from "../pages/offert/Offert";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="offerts" element={<Offert />} />
          <Route path="my-application" element={<ApplicationScreen />} />
        </Routes>
      </div>
    </>
  );
};
