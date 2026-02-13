import { NextResponse } from "next/server";

const removedPaths = [
  "/my-top-three-fall-road-trips",
  "/imprint",
  "/it-will-it-be-safe-to-travel-again",
  "/author/infotourmingle-com",
  "/exploring-indigenous-culture-in-canada",
  "/the-top-luxury-villa-around-the-world",
  "/hotel-sky-sandton-vibrant-and-smart",
  "/terms-condition",
];

export function middleware(request) {
  const path = request.nextUrl.pathname.replace(/\/$/, ""); // remove trailing slash

  if (
    path.startsWith("/tag") ||
    path.startsWith("/category") ||
    removedPaths.includes(path)
  ) {
    return new NextResponse("This page has been permanently removed.", {
      status: 410,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/tag/:path*",
    "/category/:path*",
    "/my-top-three-fall-road-trips",
    "/imprint",
    "/it-will-it-be-safe-to-travel-again",
    "/author/:path*",
    "/exploring-indigenous-culture-in-canada",
    "/the-top-luxury-villa-around-the-world",
    "/hotel-sky-sandton-vibrant-and-smart",
    "/terms-condition",
  ],
};
