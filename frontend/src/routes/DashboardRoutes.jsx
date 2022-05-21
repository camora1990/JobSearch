import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/ui/NavBar";
import { ApplicationScreen } from "../pages/application/ApplicationScreen";
import { DetailsOffert } from "../pages/deatilsOffert/DetailsOffert";
import HomeScreen from "../pages/HomeScreen";
import NotFound from "../pages/NotFound";
import { Offert } from "../pages/offert/Offert";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="offers" element={<Offert />} />
          <Route path="my-application" element={<ApplicationScreen />} />
          <Route path="details/:id" element={<DetailsOffert />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
