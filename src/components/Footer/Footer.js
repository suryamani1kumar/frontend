import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { siteName } from "@/utils/constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer_section}>
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
