import React from "react";

export const AdminLayout = React.lazy(() => import("./Admin/index.layout"));
export const AdminPublicLayout = React.lazy(() => import("./Admin/public.layout"));
export const AdminPrivateLayout = React.lazy(() => import("./Admin/private.layout"));

export const FrontendLayout = React.lazy(() => import("./Frontend/index.layout"));
export const FrontendPublicLayout = React.lazy(() => import("./Frontend/public.layout"));
export const FrontendPrivateLayout = React.lazy(() => import("./Frontend/private.layout"));
