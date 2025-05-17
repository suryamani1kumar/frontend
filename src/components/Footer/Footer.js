import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import styles from "./footer.module.scss"
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
              <Link href="tel:+XXXX XXXX X">XXXX XXXX X</Link>
            </div>
          </div>

          <div className={styles.single_cta}>
            <FaEnvelopeOpen />
            <div className={styles.cta_text}>
              <h4>Mail us</h4>
              <Link href="mailto:+XXXX XXXX X">triploom@info.com</Link>
            </div>
          </div>


        </div>
        <div className={styles.footer_content}>
          <div className="row">

            <div className="col-xl-8 col-lg-8 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
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
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <FaTelegramPlane />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright_area}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; {currentYear}, All Right Reserved{" "}
                  <Link href="/">Triploom</Link>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
