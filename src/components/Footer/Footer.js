import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import styles from "./footer.module.scss";
import Link from "next/link";
import { email, siteName, tfn } from "@/utils/constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer_section}>
      <div className="container">
        <div className={styles.footer_cta}>
          <div className={styles.single_cta}>
            <FaLocationDot />
            <div className={styles.cta_text}>
              <h4>Find us</h4>
              <span>XXXX Avenue, sw XXXXX, chandigarh</span>
            </div>
          </div>

          <div className={styles.single_cta}>
            <FaPhone />
            <div className={styles.cta_text}>
              <h4>Call us</h4>
              <Link href={`tel:${tfn}`}>{tfn}</Link>
            </div>
          </div>

          <div className={styles.single_cta}>
            <FaEnvelopeOpen />
            <div className={styles.cta_text}>
              <h4>Mail us</h4>
              <Link href={`mailto:${email}`}>{email}</Link>
            </div>
          </div>
        </div>
        <div className={styles.footer_content}>
          <div className={styles.footer_linklist}>
            <h3 className={styles.footer_heading}>Useful Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  about
                </Link>
              </li>
              <li>
                <Link href="/blog" target="_blank" rel="noopener noreferrer">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer_subscribe}>
            <h3 className={styles.footer_heading}>Subscribe</h3>
            <p>
              Don’t miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
            <div className={styles.subscribe_form}>
              <form>
                <input type="text" placeholder="Email Address" />
                <button>
                  <FaTelegramPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className="container">
          <div className={styles.copyright_area}>
            <div className={styles.copyright_text}>
              Copyright &copy; {currentYear}, All Right Reserved{" "}
              <Link href="/">{siteName}</Link>
            </div>

            <ul className={styles.footer_menu}>
              <li>
                <Link
                  href="/terms-and-condition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
