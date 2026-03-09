"use client";

import React, { useState } from "react";
import styles from "./faq.module.scss";
import { GoChevronDown } from "react-icons/go";
import { IoChevronUp } from "react-icons/io5";

const Faq = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h3>Frequently Asked Questions</h3>
      <div className={styles.accordion}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.title}
              onClick={() => toggleAccordion(index)}
            >
              {item.ques}
              <span className={styles.icon}>
                {activeIndex === index ? <IoChevronUp /> : <GoChevronDown />}
              </span>
            </button>

            <div
              className={`${styles.content} ${
                activeIndex === index ? styles.show : ""
              }`}
              dangerouslySetInnerHTML={{ __html: item.ans }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
