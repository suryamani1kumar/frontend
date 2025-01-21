import React from 'react';
import styles from './footer.module.scss';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.FooterMainContainer}>
      <div className={'container'}>
        Copyright © {currentYear} Traveloka. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
