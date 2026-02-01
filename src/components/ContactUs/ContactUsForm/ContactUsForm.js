"use client";
import React, { useRef } from "react";
import styles from "./contactUsForm.module.scss";
const ContactUsForm = () => {
  const emailRef = useRef("");
  const messageRef = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    console.log(email, message);
  };
  return (
    <div className={styles.main}>
      <div className={styles.formSection}>
        <h2 className={styles.title}>Get In Touch</h2>
        <hr className={styles.horizontalLine} />
        <form
          className={styles.formFeildSection}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className={styles.labelSection}>Email*</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className={styles.inputFieldSection}
            required
            ref={emailRef}
          />
          <label className={styles.labelSection}>Your Message</label>
          <textarea
            ref={messageRef}
            className={styles.textAreaField}
            placeholder="Enter Your Feedback"
          />
          <div className={styles.buttonSection}>
            <button className={styles.submitButton} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
