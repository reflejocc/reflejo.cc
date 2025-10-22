import { socialConfig } from "./social";

export const footerConfig = {
  social: {
    title: "Ask us anything",
    description: "hablamos español",
    items: socialConfig.social,
  },
  quickLinks: {
    title: "Quick Links",
    items: [
      { title: "Home", href: "/" },
      { title: "Services", href: "/services" },
      { title: "Blog", href: "/blog" },
      // { title: "Join Us", href: "/joinus" },
      { title: "Contact", href: "/contact" },
      // { title: "Search", href: "/search" },
    ],
  },
  legal: {
    title: "Legal",
    items: [
      { title: "Terms", href: "/legal/terms" },
      { title: "Privacy Policy", href: "/legal/privacy" },
    ],
  },
  contact: {
    title: "FOR THE OLDHEADS",
    items: socialConfig.contact,
  },
  brand: {
    logo: "/images/logo-reflejo.png",
    alt: "REFLEJO",
  },
  bottom: {
    copyright: "©2025 All Right Reserved.",
    backToTop: {
      text: "Back to top ↑",
    },
  },
};
