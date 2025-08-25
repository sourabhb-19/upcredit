import { baseRoutes } from "../../helpers/baseRoutes";

const frontendRouteMap = {
  LOGIN: { path: `${baseRoutes.userBaseRoutes}/login`},
  SIGNUP: { path: `${baseRoutes.userBaseRoutes}/sign-up`},
  STEPFORM: { path: `${baseRoutes.userBaseRoutes}/step-form`},
  FORGOTPASSWORD: { path: `${baseRoutes.userBaseRoutes}/forgot-password`},
  HOME: { path: `${baseRoutes.userBaseRoutes}/`},
  PRICING: { path: `${baseRoutes.userBaseRoutes}/pricing`},
  REVIEWS: { path: `${baseRoutes.userBaseRoutes}/reviews`},
  MONEYBACKGUARANTEE: { path: `${baseRoutes.userBaseRoutes}/money-back-guarantee`},
  HELPANDSUPPORT: { path: `${baseRoutes.userBaseRoutes}/help-and-support`},
  TRAINING: { path: `${baseRoutes.userBaseRoutes}/training`},
  BLOG: { path: `${baseRoutes.userBaseRoutes}/blog`},
  BLOGDETAILS: { path: `${baseRoutes.userBaseRoutes}/blog-details`},
  CONTACTUS: { path: `${baseRoutes.userBaseRoutes}/contact-us`},
  TERMS: { path: `${baseRoutes.userBaseRoutes}/terms`},
  PRIVACY: { path: `${baseRoutes.userBaseRoutes}/privacy`},
  SECURITY: { path: `${baseRoutes.userBaseRoutes}/security`},
  SOC: { path: `${baseRoutes.userBaseRoutes}/security/soc-2`},
  COMPONENTPREVIEW: { path: `${baseRoutes.userBaseRoutes}/component-preview`},
};
export default frontendRouteMap;