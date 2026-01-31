import React from "react";
import styles from "./privacyPolicySection.module.scss";
import Image from "next/image";
import {
  primarySiteEmail,
  primarySitePhone,
  siteName,
} from "@/utils/constants";
const PrivacyPolicySection = () => {
  return (
    <div className="container">
      <div className={styles.main}>
        <div className={styles.imageSection}>
          <Image
            src="/privacy-policy.webp"
            height={400}
            width={400}
            alt="privacy-policy"
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.img}
          />
        </div>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.description}>
            At <strong>{siteName}</strong>, your privacy is our top priority.
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you visit our website, use our services,
            or interact with us online.
          </p>
          <h2 className={styles.childTitle}>1. Information We Collect</h2>
          <p className={styles.description}>
            We may collect the following information to provide a better user
            experience and improve our services:
          </p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>
              <strong>Personal Information:</strong> Name, email address, phone
              number, billing information (when applicable).
            </li>
            <li className={styles.listingContent}>
              <strong>Non-Personal Information:</strong> IP address, browser
              type, operating system, pages visited, and time spent on our
              website.
            </li>
            <li className={styles.listingContent}>
              <strong>Cookies and Tracking:</strong> We use cookies and similar
              technologies to enhance website performance and track user
              behavior.
            </li>
          </ul>
          <h2 className={styles.childTitle}>2. How We Use Your Information</h2>
          <p className={styles.description}>Your information helps us:</p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>
              Provide and maintain our services
            </li>
            <li className={styles.listingContent}>
              Improve user experience and website performance
            </li>
            <li className={styles.listingContent}>
              Send updates, newsletters, and promotional offers (only if
              opted-in)
            </li>
            <li className={styles.listingContent}>
              Ensure security and prevent fraudulent activities
            </li>
          </ul>
          <h2 className={styles.childTitle}>
            3. How We Protect Your Information
          </h2>
          <p className={styles.description}>
            We adopt industry-standard measures to safeguard your data,
            including:
          </p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>
              Secure servers and encryption protocols
            </li>
            <li className={styles.listingContent}>Regular security audits</li>
            <li className={styles.listingContent}>
              Limited access to personal data by authorized personnel only
            </li>
          </ul>
          <h2 className={styles.childTitle}>4. Sharing of Information</h2>
          <p className={styles.description}>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with:
          </p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>
              Trusted service providers who assist in operating our website and
              providing services
            </li>
            <li className={styles.listingContent}>
              Legal authorities if required by law or to protect our rights
            </li>
          </ul>
          <h2 className={styles.childTitle}>5. Your Rights</h2>
          <p className={styles.description}>You have the right to:</p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>
              Access and update your personal information
            </li>
            <li className={styles.listingContent}>
              Request deletion of your data
            </li>
            <li className={styles.listingContent}>
              Opt-out of marketing communications
            </li>
          </ul>
          <h2 className={styles.childTitle}>6. Third-Party Links</h2>
          <p className={styles.description}>
            Our website may contain links to external sites. We are not
            responsible for the privacy practices or content of those websites.
            Please review their privacy policies separately.
          </p>

          <h2 className={styles.childTitle}>
            7. Changes to This Privacy Policy
          </h2>
          <p className={styles.description}>
            We may update this Privacy Policy periodically. Any changes will be
            reflected on this page with the <strong>last updated</strong> date.
            We encourage you to review this policy regularly.
          </p>

          <h2 className={styles.childTitle}>8. Contact Us</h2>
          <p className={styles.description}>
            If you have questions or concerns about this Privacy Policy, please
            contact us at:
          </p>
          <p className={styles.description}>
            Email:{" "}
            <strong>
              <a href={`mailto:${primarySiteEmail}`}>{primarySiteEmail}</a>
            </strong>
            <br />
            Phone:{" "}
            <strong>
              <a href={`tel:${primarySitePhone}`}>{primarySitePhone}</a>
            </strong>
          </p>
          <p className={styles.description}>
            <em>Last Updated : January 31, 2026</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;
