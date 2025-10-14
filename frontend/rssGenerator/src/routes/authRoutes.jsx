import Login from "@/pages/Authorization/Login";
import Registration from "@/pages/Authorization/Registration";
import React from "react";
import { Route } from "react-router";

const authRoutes = (
  <>
    <Route path="/Login" element={<Login />} />
    <Route path="/Registration" element={<Registration />} />
  </>
);

export default authRoutes;
