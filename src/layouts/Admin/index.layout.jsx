import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminLayout() {
  return <Outlet />;
}

export default AdminLayout;
