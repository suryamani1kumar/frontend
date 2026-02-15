import React from "react";
import styles from "./contactUsSection.module.scss";
import Image from "next/image";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import ContactInformation from "./ContactInformation/ContactInformation";
const ContactUsSection = () => {
  return (
    <div className="container">
      <div className={styles.main}>
        <div className={styles.imageSection}>
          <Image
            src="/contact-us.webp"
            height={400}
            width={400}
            alt="privacy-policy"
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.img}
          />
        </div>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.contactSection}>
          <ContactUsForm />
          {/* <ContactInformation /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
