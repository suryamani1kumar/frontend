import React from "react";
import AboutUsSection from "@/components/About/AboutUsSection";
import { siteName } from "@/utils/constants";
export const metadata = {
  title: `About Us | ${siteName}  - Flights, Hotels & Travel Guides`,
  description: `Discover ${siteName}, your ultimate travel companion. Book flights, hotels, explore attractions, and get expert travel guides for unforgettable trips worldwide.`,
  keywords:
    "Travel, Flight Booking, Hotel Booking, Tourist Attractions, Travel Guides, Vacation, Trips",
};
const AboutUs = () => {
  return <AboutUsSection />;
};

export default AboutUs;
