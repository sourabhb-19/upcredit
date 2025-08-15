import React from "react";

export const Login = React.lazy(() => import("./Login/index.page"));
export const SignUp = React.lazy(() => import("./SignUp/index.page"));
export const StepForm = React.lazy(() => import("./StepForm/index.page"));
export const ForgotPassword = React.lazy(() => import("./ForgotPassword/index.page"));
export const UserHome = React.lazy(() => import("./Home/index.page"));
export const ComponentPreview = React.lazy(() => import("./ComponentPreview/index.page"));

