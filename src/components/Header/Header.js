import React from 'react';
import styles from './header.module.scss';
import { useStickyHeader } from '@/hooks/useStickyHeader';
import classNames from 'classnames';
const Header = () => {
  const sticky = useStickyHeader(40);
  return (
    <div className={'container'}>
      <div className={classNames(styles.header, { [styles.sticky]: sticky })}>
        Triploom
      </div>
    </div>
  );
};

export default Header;
