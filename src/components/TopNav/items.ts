import { NavItemProps } from "./navItem.types";

const navItems: NavItemProps[] = [
  {
    active: false,
    title: "Overview",
    icon: "ph:book-open",
    url: "",
  },
  {
    active: true,
    title: "Repositories",
    icon: "ph:book-bookmark",
    url: "",
  },
  {
    active: false,
    title: "Projects",
    icon: "icon-park:grid-three",
    url: "",
  },
  {
    active: false,
    title: "Packages",
    icon: "octicon:package-16",
    url: "",
  },
  {
    active: false,
    title: "Stars",
    icon: "ic:baseline-star-outline",
    url: "",
  },
];

export default navItems;
