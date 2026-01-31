export const tfn = "+1-000-000-0000";
export const email = "info@tourmingle.com";

export const NavBarItems = [
  {
    id: 1,
    name: "About",
    link: "/about-us",
  },

  {
    id: 2,
    name: "Blog",
    link: "/blog",
  },
];

export const siteName = "TourMingle";
export const primarySiteEmail = "info@tourmingle.com";
export const primarySitePhone = "+1-000-000-0000";
export function truncateText(text, maxLength = 80) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
