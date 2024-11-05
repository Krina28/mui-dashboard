import Icon from "@mui/material/Icon";
import AdvancedSearch from "layouts/pages/advanced";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "advanced search",
        route: "/advanced-search",
        component: <AdvancedSearch />,
      },
      {
        name: "about us",
        route: "/pages/landing-pages/about-us",
        component: <AdvancedSearch />,
      },
      {
        name: "contact us",
        route: "/pages/landing-pages/contact-us",
        component: <AdvancedSearch />,
      },
    ],
  }
];

export default routes;
