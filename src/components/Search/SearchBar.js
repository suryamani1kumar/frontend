import React from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './search.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
  <h1>"Adventure, excitement, and unforgettable experiences—all in one place!"</h1>
      <div className={styles.searchInput}>
        <IoSearch />
        <input placeholder="Places to go, things to do ..." />
      </div>

      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

export default SearchBar;
