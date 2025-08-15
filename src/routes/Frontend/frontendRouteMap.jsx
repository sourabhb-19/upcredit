import { baseRoutes } from "../../helpers/baseRoutes";

const frontendRouteMap = {
  LOGIN: { path: `${baseRoutes.userBaseRoutes}/`},
  SIGNUP: { path: `${baseRoutes.userBaseRoutes}/sign-up`},
  STEPFORM: { path: `${baseRoutes.userBaseRoutes}/step-form`},
  FORGOTPASSWORD: { path: `${baseRoutes.userBaseRoutes}/forgot-password`},
  HOME: { path: `${baseRoutes.userBaseRoutes}/home`},
  COMPONENTPREVIEW: { path: `${baseRoutes.userBaseRoutes}/component-preview`},
};
export default frontendRouteMap;