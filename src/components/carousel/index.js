"use client";
import { useDeviceType } from "@/hooks/useDevicetype";
import React, { useEffect, useRef, useState } from "react";
import styles from "./attracard.module.scss";
import classNames from "classnames";

const Carousel = ({ children }) => {
  const device = useDeviceType();
  const [showButtons, setShowButtons] = useState(false);

  const tabsContainerRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const hasOverflow = container.scrollWidth > container.clientWidth;
    setShowButtons(hasOverflow);
  }, [children, device]);

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - tabsContainerRef.current.offsetLeft;
    scrollLeft = tabsContainerRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePrevButton = () => {
    const card = tabsContainerRef.current;
    if (card) {
      const width = card.clientWidth;
      card.scrollLeft -= width;
    }
  };

  const handleNextButton = () => {
    const card = tabsContainerRef.current;
    if (card) {
      const width = card.clientWidth;
      card.scrollLeft += width;
    }
  };
  return (
    <div className={styles.carousel_container}>
      <div
        className={styles.swiperRootContainer}
        ref={tabsContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.wrapper}>{children}</div>
      </div>
      {device !== "Mobile" && showButtons && (
        <>
          <button
            className={classNames(
              styles.carousel_button,
              styles.left_carousel_button,
            )}
            onClick={handlePrevButton}
          >
            <span className={styles.arrow}>&#x276E;</span>
          </button>
          <button
            className={classNames(
              styles.carousel_button,
              styles.right_carousel_button,
            )}
            onClick={handleNextButton}
          >
            <span className={styles.arrow}>&#x276F;</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
