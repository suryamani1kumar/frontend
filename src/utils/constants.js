export const tfn = "+1-000-000-0000";
export const email = "info@tourmingle.com";

export const NavBarItems = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },

  {
    id: 2,
    name: "Blog",
    link: "/blog",
  },
];

export const siteName = "TourMingle";

export function truncateText(text, maxLength = 80) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
