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
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        {
          name: "freebies",
          href: "https://www.creative-tim.com/templates/free",
        },
        {
          name: "premium tools",
          href: "https://www.creative-tim.com/templates/premium",
        },
        { name: "blog", href: "https://www.creative-tim.com/blog" },
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
