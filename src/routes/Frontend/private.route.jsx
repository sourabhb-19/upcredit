import { ComponentPreview, UserHome } from "../../pages";
import frontendRouteMap from "./frontendRouteMap";

export default function route() {
  return [
    {
      path: frontendRouteMap.HOME.path,
      name: "Home",
      element:<UserHome />,
    },
    {
      path: frontendRouteMap.COMPONENTPREVIEW.path,
      name: "Component Preview",
      element:<ComponentPreview />,
    },
  ];
}
