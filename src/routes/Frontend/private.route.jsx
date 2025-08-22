import { Blog, BlogDetails, ComponentPreview, ContactUs, HelpAndSupport, MoneyBackGuarantee, Pricing, Privacy, Reviews, Terms, Training, UserHome } from "../../pages";
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
      path: frontendRouteMap.MONEYBACKGUARANTEE.path,
      name: "Money Back Guarantee",
      element:<MoneyBackGuarantee />,
    },
    {
      path: frontendRouteMap.HELPANDSUPPORT.path,
      name: "Help And Support",
      element:<HelpAndSupport />,
    },
    {
      path: frontendRouteMap.TRAINING.path,
      name: "Training",
      element:<Training />,
    },
    {
      path: frontendRouteMap.BLOG.path,
      name: "Blog",
      element:<Blog />,
    },
    {
      path: frontendRouteMap.BLOGDETAILS.path,
      name: "Blog Details",
      element:<BlogDetails />,
    },
    {
      path: frontendRouteMap.CONTACTUS.path,
      name: "Contact Us",
      element:<ContactUs />,
    },
    {
      path: frontendRouteMap.TERMS.path,
      name: "Terms",
      element:<Terms />,
    },
    {
      path: frontendRouteMap.PRIVACY.path,
      name: "Privacy",
      element:<Privacy />,
    },
    {
      path: frontendRouteMap.COMPONENTPREVIEW.path,
      name: "Component Preview",
      element:<ComponentPreview />,
    },
  ];
}
