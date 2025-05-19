import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import styles from "./footer.module.scss";
import Link from "next/link";
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
              <span>1010 Avenue, sw 54321, chandigarh</span>
            </div>
          </div>

          <div className={styles.single_cta}>
            <FaPhone />
            <div className={styles.cta_text}>
              <h4>Call us</h4>
              <Link href="tel:+91-855-561-4094">+91-855-561-4094</Link>
            </div>
          </div>

          <div className={styles.single_cta}>
            <FaEnvelopeOpen />
            <div className={styles.cta_text}>
              <h4>Mail us</h4>
              <Link href="mailto:triploom@info.com">triploom@info.com</Link>
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
                <Link href="/about-us">about</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
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
              <Link href="/">Triploom</Link>
            </div>

            <ul className={styles.footer_menu}>
              <li>
                <Link href="/terms-condition">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
