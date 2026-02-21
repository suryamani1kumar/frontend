import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { siteName } from "@/utils/constants";
import FacebookIcon from "../icons/socialmedia/Facebook";
import InstagramIcon from "../icons/socialmedia/InstagramIcon";
import XIcon from "../icons/socialmedia/XIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer_section}>
      <div className="container">
        <div className={styles.footer_row}>
          <div className={styles.left_section}>
            © {currentYear} {siteName}
          </div>

          <ul className={styles.footer_menu}>
            <li>
              <Link href="/terms-and-condition" target="_blank">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
          <div className={styles.socialMediaSection}>
            <FacebookIcon size={28} className={styles.socialMediaIcons} />
            <InstagramIcon size={28} className={styles.socialMediaIcons} />
            <XIcon size={28} className={styles.socialMediaIcons} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
