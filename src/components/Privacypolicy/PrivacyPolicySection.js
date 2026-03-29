import React from "react";
import styles from "./privacyPolicySection.module.scss";
import Image from "next/image";
import {
  primarySiteEmail,
  primarySitePhone,
  siteName,
} from "@/utils/constants";
import Link from "next/link";
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
            Welcome to Tourmingle! We are glad you took a moment to read through
            our Privacy Policy. This document is here to give you a complete and
            honest picture of how we approach your privacy while you are
            browsing our platform. Throughout this document, "
            <Link href="/">{siteName}</Link>," "we," and "our" refer to
            Tourmingle, while "you," "your," and "users" refer to you as someone
            visiting our website. Reading through this page will help you
            understand exactly where we stand when it comes to your personal
            information. By continuing to use our platform, you are indicating
            that you are comfortable with the terms laid out here. If anything
            does not sit well with you, we would ask that you refrain from using
            the platform.
          </p>
          <h2 className={styles.childTitle}>
            How We Do Not Use Your Information
          </h2>
          <p className={styles.description}>
            Since we collect nothing from our readers, we naturally use nothing
            either. We do not send out promotional emails or push notifications,
            we do not serve targeted advertisements based on how you browse, we
            do not pass your information along to any third-party partners or
            affiliates, we do not build profiles or databases based on user
            behaviour, and we do not reach out to our readers for marketing
            purposes of any kind. Your time on Tourmingle is entirely your own,
            from the moment you arrive to the moment you leave.
          </p>

          <h2 className={styles.childTitle}>Cookies</h2>
          <p className={styles.description}>
            It is possible that when you visit Tourmingle, standard browser
            cookies are used in a limited and anonymous way to help us
            understand how the website is being used and to keep things running
            smoothly for everyone. These cookies do not hold any information
            that could identify you personally. They exist only to give us a
            general sense of how the platform is performing and where we can
            make things better for our readers. If you would rather not have
            cookies stored on your device, you can adjust your browser settings
            at any time to block or limit them. Just keep in mind that some
            parts of the website may not display or function in quite the same
            way if you do. Your browser's help section will have straightforward
            guidance on how to manage your cookie settings.
          </p>

          <h2 className={styles.childTitle}>External Links</h2>
          <p className={styles.description}>
            Our articles sometimes include links to other websites, placed there
            to give our readers somewhere to go if they want to dig deeper into
            a topic. We have no say in how those external websites operate or
            what their privacy practices look like, so we recommend having a
            read through their privacy policies before you interact with them in
            any meaningful way. We are not responsible for any data collection
            or privacy-related issues that arise from visiting a third party
            website linked from our platform, and linking to a website from
            Tourmingle does not mean we are endorsing it or the way it handles
            your information.
          </p>

          <h2 className={styles.childTitle}>Your Rights as a Reader</h2>
          <p className={styles.description}>
            Even though Tourmingle holds no personal data about its readers, we
            feel it is still worth acknowledging your rights as an individual,
            because they matter regardless of the platform you are on. Based on
            widely recognised data protection principles, you are entitled to
            the following:
          </p>
          <p className={styles.description}>
            Right to Access: You have the right to find out what information is
            being held about you. Since Tourmingle collects nothing from its
            users, there is simply nothing on file.
          </p>
          <p className={styles.description}>
            Right to Rectification: You have the right to have any incorrect
            personal details corrected. Since we hold no personal data at all,
            this right is automatically honoured on our platform.
          </p>
          <p className={styles.description}>
            Right to Restriction of Processing: You have the right to limit how
            your personal data is used. Since we process no personal data
            whatsoever, this right is fully respected without you needing to do
            anything.
          </p>
          <p className={styles.description}>
            Right to Object: You have the right to object to how your personal
            data is being handled. As Tourmingle does not handle any personal
            data, this right is upheld completely at all times.
          </p>
          <p className={styles.description}>
            Right to Data Portability: You have the right to receive your
            personal data in a usable format. Since we hold nothing about you,
            there is nothing to hand over.
          </p>
          <h2 className={styles.childTitle}>Changes to Privacy Policy</h2>
          <p className={styles.description}>
            We may revisit and update this Privacy Policy from time to time as
            circumstances change. Any updates will take effect on our platform
            the moment they are published. We recommend checking back on this
            page occasionally to stay on top of any changes. If something
            significant shifts, we will flag it clearly on the website. If you
            ever have a question about anything in this document, please reach
            out to us at <Link href="mailto:info@tourmingle.com">{primarySiteEmail}</Link>, and we will make sure your concern
            is addressed promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;
