import React from "react";
import styles from "./termsConditionSection.module.scss";
import Image from "next/image";
import { primarySiteEmail, siteName } from "@/utils/constants";
const TermsCondtionSection = () => {
  return (
    <div className="container">
      <div className={styles.main}>
        <div className={styles.imageSection}>
          <Image
            src="/terms-condition.webp"
            height={400}
            width={400}
            alt="terms-condition"
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.img}
          />
        </div>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <p className={styles.description}>
            Welcome to {siteName}. By accessing or using our website, you agree
            to comply with and be bound by the following Terms and Conditions.
            Please read them carefully before using our services.
          </p>
          <h2 className={styles.childTitle}>1. About Us</h2>
          <p className={styles.description}>
            {siteName} is an online travel information and booking platform that
            currently provides travel-related content, blogs, guides, and
            informational resources. In the future, our platform may include
            services such as flight bookings, hotel reservations, tourist
            attraction tickets, and guide bookings.
          </p>
          <h2 className={styles.childTitle}>2. Acceptance of Terms</h2>
          <p className={styles.description}>
            By accessing this website, you confirm that you are at least 18
            years old and agree to these Terms and Conditions. If you do not
            agree, please discontinue using the website.
          </p>
          <h2 className={styles.childTitle}>3. Use of Website Content</h2>
          <p className={styles.description}>
            All content published on <strong>{siteName}</strong>, including
            articles, travel guides, images, graphics, logos, and text, is{" "}
            <strong>for informational purposes only.</strong>
          </p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>
              You may not copy, reproduce, distribute, or modify any content
              without prior written permission.
            </li>
            <li className={styles.listingContent}>
              Content is provided “as is” and may be updated or changed without
              notice.
            </li>
          </ul>
          <h2 className={styles.childTitle}>
            4. Travel Information Disclaimer
          </h2>
          <p className={styles.description}>
            Travel information such as prices, availability, itineraries,
            destinations, and recommendations may change at any time.
          </p>
          <p className={styles.description}>
            <strong>{siteName}</strong> does not guarantee the accuracy,
            completeness, or reliability of any travel information published on
            the website.
          </p>
          <p className={styles.description}>
            Users are advised to verify details directly with airlines, hotels,
            tour operators, or service providers before making travel decisions.
          </p>
          <h2 className={styles.childTitle}>5. Future Booking Services</h2>
          <p className={styles.description}>
            In the future, <strong>{siteName}</strong> may offer:
          </p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>Flight search and booking</li>
            <li className={styles.listingContent}>Hotel reservations</li>
            <li className={styles.listingContent}>
              Tourist attraction tickets
            </li>
            <li className={styles.listingContent}>
              Travel guide or tour bookings
            </li>
          </ul>
          <p className={styles.description}>
            When these services become available:
          </p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>
              Additional terms may apply.
            </li>
            <li className={styles.listingContent}>
              Payments may be processed via third-party providers.
            </li>
            <li className={styles.listingContent}>
              <strong>{siteName}</strong> may act only as an intermediary
              between users and service providers
            </li>
          </ul>
          <h2 className={styles.childTitle}>6. Third-Party Links & Services</h2>
          <p className={styles.description}>
            Our website may contain links to third-party websites or services.
          </p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>
              We do not control or endorse third-party content.
            </li>
            <li className={styles.listingContent}>
              We are not responsible for any loss or damage caused by
              third-party services
            </li>
            <li className={styles.listingContent}>
              Users access third-party websites at their own risk
            </li>
          </ul>
          <h2 className={styles.childTitle}>7. User Responsibilities</h2>
          <p className={styles.description}>
            By using this website, you agree:
          </p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>
              Not to misuse or attempt to disrupt the website
            </li>
            <li className={styles.listingContent}>
              Not to submit false or misleading information
            </li>
            <li className={styles.listingContent}>
              Not to engage in illegal or harmful activities
            </li>
          </ul>
          <h2 className={styles.childTitle}>8. Intellectual Property Rights</h2>
          <p className={styles.description}>
            All intellectual property rights related to this website belong to
            <strong>{siteName}</strong> unless otherwise stated.
          </p>
          <p className={styles.description}>
            Unauthorized use of our trademarks, branding, or content is strictly
            prohibited.
          </p>
          <h2 className={styles.childTitle}>9. Limitation of Liability</h2>
          <p className={styles.description}>
            To the maximum extent permitted by law, <strong>{siteName}</strong>{" "}
            shall not be liable for:
          </p>
          <ul className={styles.listing}>
            <li className={styles.listingContent}>
              Any direct or indirect losses
            </li>
            <li className={styles.listingContent}>
              Travel disruptions or cancellations
            </li>
            <li className={styles.listingContent}>
              Errors in pricing, availability, or content
            </li>
            <li className={styles.listingContent}>
              Losses caused by third-party providers
            </li>
          </ul>
          <h2 className={styles.childTitle}>10. Privacy Policy</h2>
          <p className={styles.description}>
            Your use of this website is also governed by our Privacy Policy,
            which explains how we collect, use, and protect your data.
          </p>
          <h2 className={styles.childTitle}>11. Modifications to Terms</h2>
          <p className={styles.description}>
            We reserve the right to update or modify these Terms and Conditions
            at any time. Changes will be effective immediately upon posting.
          </p>
          <p className={styles.description}>
            Continued use of the website indicates acceptance of the updated
            terms.
          </p>
          <h2 className={styles.childTitle}>12. Governing Law</h2>
          <p className={styles.description}>
            These Terms and Conditions shall be governed by and interpreted in
            accordance with the laws of India.
          </p>
          <h2 className={styles.childTitle}>13. Contact Information</h2>
          <p className={styles.description}>
            For any questions regarding these Terms and Conditions, please
            contact us at:
          </p>
          <p className={styles.description}>
            Email:{" "}
            <strong>
              <a href={`mailto:${primarySiteEmail}`}>{primarySiteEmail}</a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsCondtionSection;
