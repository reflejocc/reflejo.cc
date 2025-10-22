export const siteConfig = {
  name: "REFLEJO",
  description: "REFLEJO - creative co-op",
  siteUrl: import.meta.env.PUBLIC_SITE_URL,
  header: {
    logo: {
      src: "/images/logo-reflejo.png",
      alt: "REFLEJO",
      href: "/",
    },
    nav: {
      desktop: [
        { title: "Home", href: "/" },
        { title: "Services", href: "/services" },
        { title: "Blog", href: "/blog" },
        { title: "Join Us ", href: "/joinus" },
        { title: "Contact", href: "/contact" },
        { title: "", href: "/search", icon: "/images/icon/search.svg" },
      ],
      mobile: [
        { title: "Home", href: "/" },
        { title: "Services", href: "/services" },
        { title: "Blog", href: "/blog" },
        { title: "Join Us", href: "/joinus" },
        { title: "Contact", href: "/contact" },
        { title: "Search", href: "/search" },
      ],
    },
  },
};
