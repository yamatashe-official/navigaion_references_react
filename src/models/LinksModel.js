export const LinksModel = ({
  name = "",
  url = "",
  description = "",
  icon = "",
}) => {
  return {
    name,
    url,
    description,
    icon,
  };
};

export const sampleLinks = [
  LinksModel({
    name: "Home",
    url: "/",
    description: "Home Page",
    icon: "/assets/icons/house-solid.svg",
  }),
  LinksModel({
    name: "Products",
    url: "/",
    description: "Product Page",
    icon: "/assets/icons/gem-solid.svg",
  }),
  LinksModel({
    name: "About",
    url: "/",
    description: "About Page",
    icon: "/assets/icons/address-card-solid.svg",
  }),
  LinksModel({
    name: "Contact",
    url: "/",
    description: "Contact Page",
    icon: "/assets/icons/comment-solid.svg",
  }),
];
