import TermsCondtionSection from "@/components/TermsConditon/TermsCondtionSection";
import { siteName } from "@/utils/constants";
import React from "react";
export const metadata = {
  title: `Terms and Conditions | ${siteName} – Travel Guides, Flights & Hotel Booking`,
  description: `Read the Terms and Conditions for using ${siteName}. Learn about content usage, bookings, payments, liabilities, and user responsibilities for travel guides, flights, hotels, and attractions.`,
};
const TermsCondition = () => {
  return <TermsCondtionSection />;
};

export default TermsCondition;
