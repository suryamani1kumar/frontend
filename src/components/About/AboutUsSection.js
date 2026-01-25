import Image from "next/image";
import React from "react";
import styles from "./aboutUsSection.module.scss";
import { siteName } from "@/utils/constants";
const AboutUsSection = () => {
  return (
    <div className="container">
      <div className={styles.main}>
        <div className={styles.imageSection}>
          <Image
            src="/about-us.webp"
            height={400}
            width={400}
            alt="about-us"
            loading="lazy"
            className={styles.img}
          />
        </div>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.description}>
            Welcome to {siteName}, your one-stop destination for seamless travel
            planning and unforgettable journeys. We are a comprehensive travel
            platform dedicated to helping travelers explore the world with ease
            through flight bookings, hotel reservations, sightseeing
            attractions, and expert travel guides.
          </p>
          <p className={styles.description}>
            At {siteName}, we believe travel should be simple, affordable, and
            enriching. Our platform allows you to compare and book flights at
            the best prices, choose from a wide range of hotels and
            accommodations, and discover top tourist attractions and experiences
            across popular destinations worldwide. Whether you’re planning a
            quick weekend getaway, a business trip, or a long vacation, we’ve
            got you covered.
          </p>
          <p className={styles.description}>
            What sets us apart is our focus on trusted travel information and
            local guidance. We provide detailed destination guides, travel tips,
            and curated recommendations to help you make informed decisions and
            experience each place like a local. From must-see landmarks to
            hidden gems, our guides are designed to enhance your travel
            experience.
          </p>
          <p className={styles.description}>
            We are committed to delivering a secure, user-friendly, and reliable
            booking experience, supported by transparent pricing and
            customer-centric services. Our goal is to make travel planning
            stress-free so you can focus on creating memories.
          </p>
          <p className={styles.description}>
            Start your journey with {siteName} and discover smarter ways to book
            flights, find the perfect stay, explore attractions, and travel with
            confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
