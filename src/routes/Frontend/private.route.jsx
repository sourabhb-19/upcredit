import { ComponentPreview, Pricing, Reviews, UserHome } from "../../pages";
import frontendRouteMap from "./frontendRouteMap";

export default function route() {
  return [
    {
      path: frontendRouteMap.HOME.path,
      name: "Home",
      element:<UserHome />,
    },
    {
      path: frontendRouteMap.PRICING.path,
      name: "Pricing",
      element:<Pricing />,
    },
    {
      path: frontendRouteMap.REVIEWS.path,
      name: "Reviews",
      element:<Reviews />,
    },
    {
      path: frontendRouteMap.COMPONENTPREVIEW.path,
      name: "Component Preview",
      element:<ComponentPreview />,
    },
  ];
}
