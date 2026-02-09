"use client";
import React, { useState } from "react";
import styles from "./engine.module.scss";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHotelLine } from "react-icons/ri";

const Engine = () => {
  const [activeTab, setActiveTab] = useState("hotels");
  return (
    <>
      {/* Tabs */}
      <div className={styles.wrapper}>
        <div className={styles.pill}>
          <button
            className={`${styles.tab} ${activeTab === "hotels" ? styles.active : ""}`}
            onClick={() => setActiveTab("hotels")}
          >
            <RiHotelLine /> <span>Hotels</span>
          </button>

          <button
            className={`${styles.tab} ${
              activeTab === "activities" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("activities")}
          >
            🎟 <span>Attractions & Tours</span>
          </button>
        </div>
      </div>
      <div className={`container ${styles.travelSearch}`}>
        {/* Search Bar */}
        <div className={styles.bar}>
          <div className={styles.field}>
            <span className={styles.icon}>
              <TfiLocationPin />
            </span>
            <div className={styles.text}>
              <input
                type="text"
                placeholder={
                  activeTab === "hotels"
                    ? "Find your spot from 800+ hotels"
                    : "Search city or attraction"
                }
              />
            </div>
          </div>

          <div className={styles.field}>
            <span className={styles.icon}>
              <IoCalendarClearOutline />
            </span>
            <div className={styles.text}>
              <input
                type="text"
                placeholder={
                  activeTab === "hotels"
                    ? "Select dates"
                    : "When are you going?"
                }
              />
            </div>
          </div>

          {/* Guests */}
          <div className={styles.field}>
            <span className={styles.icon}>
              <HiOutlineUser />
            </span>
            <div className={styles.text}>
              <input
                type="text"
                placeholder={
                  activeTab === "hotels" ? "1 Room, 1 Adult" : "2 Adults"
                }
              />
            </div>
          </div>

          {/* Search Button */}
          <button className={styles.searchBtn}>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Engine;
