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
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.img}
          />
        </div>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.description}>
            Tourmingle came to life because we felt the internet was running low
            on genuine travel writing. Not the kind that reads like a brochure,
            but the kind that makes you stop scrolling and actually picture
            yourself somewhere. That is what we are here for.
          </p>
          <p className={styles.description}>
            We are a group of people who love travel deeply, and we write about
            it just as deeply. Some of us have spent months living out of a
            single backpack. Others plan every trip down to the last detail.
            What we all share is a genuine curiosity about the world and a
            belief that good writing can bring a place to life before you ever
            set foot in it.
          </p>
          <p className={styles.description}>
            Tourmingle is not a booking platform. We do not sell anything. There
            are no sign up pages waiting for you, no membership walls blocking
            our content, and no forms asking for your details. You land on our
            website, you read, and you leave feeling like you have already been
            somewhere. That is the entire experience we are trying to create.
          </p>
          <p className={styles.description}>
            Every article we publish goes through real thought and real effort.
            We are not here to churn out content. We are here to write things
            worth reading, about places worth visiting, for people who actually
            care about travel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
