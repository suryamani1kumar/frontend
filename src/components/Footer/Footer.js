import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className={styles.FooterMainContainer}>
        <div className="container flex items-center flex-wrap">
          <div className="w-1/3">
            <p>Company</p>
            <ul>
              <li>
                <Link href={'/about-us'}>About Us</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <p>Support</p>
            <ul>
              <li>
                <Link href={'/contact-us'}>Contact Us</Link>
              </li>
              <li>
                <Link href={'/blog'}>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <p>Policies & Terms</p>
            <ul>
              <li>
                <Link href={'/privacy-policy'}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={'/terms-condition'}>Terms & Condition</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={'text-center'}>
        Copyright © {currentYear} Triploom. All rights reserved
      </div>
    </>
  );
};

export default Footer;
