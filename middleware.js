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
  "/luxury-the-only-one-cape-town-65-foot-princess-yacht",
  "/sky-villa-boutique-hotel-plettenberg-bay",
  "/the-houghton-hotel-a-hidden-gem",
  "/ebb-tide-apartments-in-camps-bay",
  "/top-luxury-vacation-spots-in-the-world",
  "/dmca",
  "/discover-the-time-to-visit-the-okavango-delta",
  "/in-the-name-of-love-top-anniversary-destinations"
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
    "/luxury-the-only-one-cape-town-65-foot-princess-yacht",
    "/sky-villa-boutique-hotel-plettenberg-bay",
    "/the-houghton-hotel-a-hidden-gem",
    "/ebb-tide-apartments-in-camps-bay",
    "/top-luxury-vacation-spots-in-the-world",
    "/dmca",
    "/discover-the-time-to-visit-the-okavango-delta",
    "/in-the-name-of-love-top-anniversary-destinations"
  ],
};
