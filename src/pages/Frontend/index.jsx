import React from "react";

export const Login = React.lazy(() => import("./Login/index.page"));
export const SignUp = React.lazy(() => import("./SignUp/index.page"));
export const StepForm = React.lazy(() => import("./StepForm/index.page"));
export const ForgotPassword = React.lazy(() => import("./ForgotPassword/index.page"));
export const UserHome = React.lazy(() => import("./Home/index.page"));
export const Pricing = React.lazy(()=> import("./Pricing/index.page"));
export const Reviews = React.lazy(()=> import("./Reviews/index.page"));
export const MoneyBackGuarantee = React.lazy(()=> import("./MoneyBackGuarantee/index.page"));
export const HelpAndSupport = React.lazy(()=> import("./HelpAndSupport/index.page"));
export const Training = React.lazy(()=> import("./Training/index.page"));
export const Blog = React.lazy(()=> import("./Blog/index.page"));
export const BlogDetails = React.lazy(()=> import("./BlogDetails/index.page"));
export const ContactUs = React.lazy(()=> import("./ContactUs/index.page"));
export const Terms = React.lazy(()=> import("./Terms/index.page"));
export const Privacy = React.lazy(()=> import("./Privacy/index.page"));
export const ComponentPreview = React.lazy(() => import("./ComponentPreview/index.page"));

