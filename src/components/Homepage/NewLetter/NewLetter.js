"use client";
import React from "react";
import styles from "./NewsLetter.module.scss";
const NewLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className={styles.newLetterSection}>
        <h4 className={styles.newLetterHeading}>News Letter</h4>
        <p className={styles.newLetterSubHeading}>
          Join our newsletter to get fresh travel guides, expert tips, and new
          blog updates delivered straight to your inbox.
        </p>
        <div className="flex justify-center p-4">
          <form className={styles.formSection} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
