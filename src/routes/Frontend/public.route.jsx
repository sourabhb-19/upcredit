import { ForgotPassword, Login, SignUp, StepForm } from "../../pages/Frontend";
import frontendRouteMap from "./frontendRouteMap";

export default function route() {
  return [
    {
      path: frontendRouteMap.LOGIN.path,
      name: "User Login",
      element:<Login />,
    },
    {
      path: frontendRouteMap.FORGOTPASSWORD.path,
      name: "Forgot Password",
      element:<ForgotPassword />,
    },
    {
      path: frontendRouteMap.SIGNUP.path,
      name: "Sign Up",
      element:<SignUp />,
    },
    {
      path: frontendRouteMap.STEPFORM.path,
      name: "Step Form",
      element:<StepForm />,
    },
  ];
}
