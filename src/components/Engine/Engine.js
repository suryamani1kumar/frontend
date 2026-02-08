"use client";
import React, { useState } from "react";
import styles from "./engine.module.scss";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";

const Engine = () => {
  const [activeTab, setActiveTab] = useState("hotels");
  return (
    <div className={styles.travelSearch}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "hotels" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("hotels")}
        >
          🏨 Hotels
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "activities" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("activities")}
        >
          🎟 Activities
        </button>
      </div>

      {/* Search Bar */}
      <div className={styles.bar}>
        {/* Location */}
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

        {/* Date */}
        <div className={styles.field}>
          <span className={styles.icon}>
            <IoCalendarClearOutline />
          </span>
          <div className={styles.text}>
            <input
              type="text"
              placeholder={
                activeTab === "hotels" ? "Select dates" : "When are you going?"
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
  );
};

export default Engine;
