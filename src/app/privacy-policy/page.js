import PrivacyPolicySection from "@/components/Privacypolicy/PrivacyPolicySection";
import { siteName } from "@/utils/constants";
import React from "react";
export const metadata = {
  title: `Privacy Policy - ${siteName} | Safe & Secure Browsing`,
  description: `Learn how ${siteName} collects, uses, and protects your personal information. Read our Privacy Policy to stay informed and secure.`,
};
const PrivacyPolicy = () => {
  return <PrivacyPolicySection />;
};

export default PrivacyPolicy;
