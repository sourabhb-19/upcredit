import React from "react";
import { Outlet } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../assets/frontend/scss/main.scss";

function FrontendLayout() {
  return <Outlet />;
}

export default FrontendLayout;
