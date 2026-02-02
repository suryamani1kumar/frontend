"use client";
import React from "react";
import styles from "./contactInformation.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import { primarySiteEmail, primarySitePhone } from "@/utils/constants";
import { useIntersection } from "@/hooks/useIntersection";
const ContactInformation = () => {
  const [ref, isVisible] = useIntersection({ rootMargin: "300px" });
  return (
    <div className={styles.main}>
      <div className={styles.contactInfoSection}>
        <h2 className={styles.title}>Contact Information</h2>
        <hr className={styles.horizontalLine} />
        <div className={styles.informationComponents}>
          <div className={styles.informationComponentsSubSection}>
            <div className={styles.singleInformation}>
              <FaLocationDot className={styles.icons} />
              <span>XXXX Avenue, sw XXXXX, chandigarh</span>
            </div>
            <div className={styles.singleInformation}>
              <FaPhone className={styles.icons} />
              <span>
                {" "}
                <a href={`tel:${primarySitePhone}`}>{primarySitePhone}</a>
              </span>
            </div>
          </div>
          <div className={styles.informationComponentsSubSection}>
            <div className={styles.singleInformation}>
              <FaEnvelopeOpen className={styles.icons} />
              <span>
                {" "}
                <a href={`mailto:${primarySiteEmail}`}>{primarySiteEmail}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className={styles.mapSection}>
        {isVisible && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28018.741636772746!2d77.3240850819992!3d28.619489242958366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53c5ad4b151%3A0x57ac9d630880ceab!2sKhora%20Colony%2C%20Sector%2062A%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1769951872601!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ContactInformation;
