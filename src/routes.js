import Icon from "@mui/material/Icon";
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "advanced search",
        route: "/",
        component: <AboutUs />,
      },
      {
        name: "about us",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />,
      },
      {
        name: "contact us",
        route: "/pages/landing-pages/contact-us",
        component: <ContactUs />,
      },
    ],
  }
];

export default routes;
