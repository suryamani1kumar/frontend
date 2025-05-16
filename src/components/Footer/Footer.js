import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { useDeviceType } from '@/hooks/useDevicetype';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const device = useDeviceType();
  return (
    <footer>
      <div className={styles.FooterMainContainer}>
        <div className={classNames('container')}>
          {device === 'Desktop' && (
            <div className={classNames(styles.footer)}>
              <p>Company</p>
              <p>Support</p>
              <p>Policies & Terms</p>
            </div>
          )}
          <div className={classNames(styles.footer)}>
            <ul>
              <li>
                <Link href={'/about-us'}>About Us</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href={'/contact-us'}>Contact Us</Link>
              </li>
              <li>
                <Link href={'/blog'}>Blog</Link>
              </li>
            </ul>

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
        Copyright © {currentYear} Backpackpluse. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
