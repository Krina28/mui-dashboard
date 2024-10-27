import MKTypography from "components/MKTypography";
// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Health Portal",
    image: logoCT,
    route: "/",
  },
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://github.com/Krina28/mui-dashboard" },
        {
          name: "freebies",
          href: "https://github.com/Krina28/mui-dashboard",
        },
        {
          name: "premium tools",
          href: "https://github.com/Krina28/mui-dashboard",
        },
        { name: "blog", href: "https://github.com/Krina28/mui-dashboard" },
      ],
    },
    {
      name: "resources",
    },
    {
      name: "help & support",
    },
    {
      name: "legal",
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}
    </MKTypography>
  ),
};
