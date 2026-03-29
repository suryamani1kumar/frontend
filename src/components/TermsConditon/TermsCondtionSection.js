import React from "react";
import styles from "./termsConditionSection.module.scss";
import Image from "next/image";
import { primarySiteEmail, siteName } from "@/utils/constants";
import Link from "next/link";
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
          <h2>Introduction</h2>
          <p className={styles.description}>
            Salutations to our precious readers! Before exploring our platform,
            we would like you to take a moment to go through these Terms &
            Conditions. These terms exist so that you have a clear understanding
            of what Tourmingle is, how it works, and what you can expect when
            you visit us. Throughout this document, references to "
            <Link href="/">{siteName}</Link>," "we," and "our" mean
            Tourmingle, while "you," "your," and "users" refer to anyone reading
            or browsing our website. Going through this page will give you a
            proper sense of what we stand for and what we ask of our readers in
            return. Carrying on with your visit means you are comfortable with
            everything written here. If anything does not feel right to you, we
            would kindly ask that you step away from the platform.
          </p>
          <h2 className={styles.childTitle}>What We Offer</h2>
          <p className={styles.description}>
            Tourmingle is a travel blog, plain and simple. We put together
            destination guides, travel tips, cultural pieces, and articles that
            we genuinely hope make travel feel more accessible and exciting for
            everyone who reads them. What we are not is a travel agency or a
            booking service. We do not sell tickets, arrange hotels, or handle
            any kind of transaction. There are no user accounts to create, no
            forms to fill out, and no data to submit anywhere on our platform.
            When you visit Tourmingle, you are here to read, and that is the
            only thing we will ever ask of you.
          </p>
          <h2 className={styles.childTitle}>Accuracy of Information</h2>
          <p className={styles.description}>
            Every article on Tourmingle is written with care and a genuine
            intention to be helpful and accurate. That said, travel is a moving
            target. Things change quickly out in the world, and what was true
            when an article was written may not reflect the situation on the
            ground today. A few situations where this can happen include the
            following:
          </p>
          <ul>
            <li>
              If visa rules, entry requirements, or travel regulations at a
              particular destination have been recently changed or updated by
              the relevant authorities.
            </li>
            <li>
              If a destination is going through political shifts, environmental
              changes, or safety related developments that may affect the
              experience of travellers visiting that place.
            </li>
            <li>
              If prices, availability, or any operational details mentioned
              within an article have shifted since the piece was originally
              written and published.
            </li>
          </ul>
          <p className={styles.description}>
            We always encourage our readers to double check anything important
            through official government portals, embassy websites, or by
            speaking with a licensed travel professional before making real
            plans. Tourmingle puts its content out in good faith, but we cannot
            take responsibility for decisions made purely on the basis of what
            you read here.
          </p>
          <h2 className={styles.childTitle}>Intellectual Property</h2>
          <p className={styles.description}>
            Everything on Tourmingle, from the articles and photographs to the
            illustrations and design, has been created with time, thought, and
            genuine effort. It belongs to us or to the contributors behind it,
            and it is protected under copyright law. You are more than welcome
            to share a link to any piece you enjoy, or quote a short passage as
            long as you give us credit and link back to the original. What we do
            ask is that you do not copy full articles and publish them
            elsewhere, use our content to make money without having a
            conversation with us first, or use any kind of automated tool to
            scrape or duplicate content from our platform.
          </p>

          <h2 className={styles.childTitle}>External Links</h2>
          <p className={styles.description}>
            Some of our articles include links pointing toward other websites,
            added purely so our readers can explore a topic further if they wish
            to. We have no control over those external websites, how they are
            run, or what their policies say. Clicking on one of those links is
            entirely your own decision, and we would encourage you to take a
            quick look at the terms and privacy policy of any site you end up
            on. We hold no responsibility for anything that happens as a result
            of visiting a website linked from ours, and the fact that a link
            appears on our platform does not mean we are endorsing that website
            or anything it contains.
          </p>

          <h2 className={styles.childTitle}>Limitation of Liability</h2>
          <p className={styles.description}>
            We do everything we can to keep Tourmingle accurate, useful, and
            running well. But as an informational platform, we have to be clear
            that things can occasionally go wrong, and our responsibility has
            its limits. Tourmingle, along with its owners, editors, writers, and
            contributors, cannot be held liable for any inconvenience, loss, or
            damage that comes from using our platform, trusting our content for
            a significant decision, any downtime or disruption to the website,
            or any mistakes or gaps in the material we publish. The platform is
            made available as it is, and while we are always working to improve
            it, we cannot promise it will be flawless at every moment.
          </p>

          <h2 className={styles.childTitle}>Changes to Terms & Conditions</h2>
          <p className={styles.description}>
            These Terms & Conditions may be revised and updated from time to
            time as Tourmingle continues to grow. Whenever that happens, the
            updated version will go live on this page right away. We suggest
            coming back to check this page every now and then so nothing takes
            you by surprise. If the changes are significant, we will make sure
            to highlight them clearly on the website. For any questions or
            concerns about anything written here, please feel free to write to
            us at <Link href="mailto:info@tourmingle.com">info@tourmingle.com</Link> and we will get back to you as soon as we
            possibly can.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsCondtionSection;
