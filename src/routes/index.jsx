import React from 'react';
import { AdminLayout, FrontendLayout } from '../layouts';
import { adminRoutes } from './Admin';
import { frontendRoutes } from './Frontend';


export const routes = () => {
  return [
    {
      element: <AdminLayout />,
      children: [...adminRoutes()],
    },
    {
      element: <FrontendLayout />,
      children: [...frontendRoutes()],
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ];
};