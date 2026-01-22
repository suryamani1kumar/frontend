"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import styles from "./search.module.scss";
import Dialog from "@mui/material/Dialog";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchIcon } from "@/redux/reducers/enableSearchIconSlice";
import { SearchEnable } from "@/redux/reducers/moblieSearchSlice";
import { useDeviceType } from "@/hooks/useDevicetype";

const SearchBar = () => {
  const isSearchEnabled = useSelector((state) => state.enableSearch); // Get the toggle state from the store
  const dispatch = useDispatch();
  const searchBarRef = useRef(null);
  const device = useDeviceType();
  const searchInput = useRef(null);
  const mobileSearchInput = useRef(null);
  const [searchinput, setSearchInput] = useState("");

  const handleClose = () => {
    dispatch(SearchEnable(false));
  };

  const updateDistance = useCallback(() => {
    if (searchBarRef.current) {
      const rect = searchBarRef.current.getBoundingClientRect();
      const heightHeader =
        document.getElementsByTagName("header")[0].offsetHeight;
      const absoluteBottom = rect.top + window.scrollY; // Add scrollY to get page-relative position
      if (window.scrollY >= absoluteBottom - heightHeader) {
        dispatch(toggleSearchIcon(true));
      } else {
        dispatch(toggleSearchIcon(false));
      }
    }
  }, []);

  useEffect(() => {
    updateDistance(); // Get initial value

    window.addEventListener("scroll", updateDistance);
    window.addEventListener("resize", updateDistance);

    return () => {
      window.removeEventListener("scroll", updateDistance);
      window.removeEventListener("resize", updateDistance);
    };
  }, []);

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleFocus = () => {
    if (device === "Mobile") {
      searchInput.current.blur();
      dispatch(SearchEnable(true));
      return;
    }
  };

  return (
    <>
      <div className={styles.Banner}>
        <h1>
          Adventure, excitement, and unforgettable experiences
          <br />
          all in one place!
        </h1>
      </div>
      <div className={styles.dek_search_container} ref={searchBarRef}>
        <div className={styles.searchInput}>
          <IoSearch />
          <input
            ref={searchInput}
            type="text"
            name={searchinput}
            placeholder="Places to go, things to do ..."
            onChange={handleInput}
            onFocus={handleFocus}
          />
        </div>

        <button className={styles.searchBtn}>Search</button>
      </div>

      {isSearchEnabled && (
        <Dialog fullScreen open={isSearchEnabled} onClose={handleClose}>
          <div className={styles.search_container}>
            <div className={styles.input_container}>
              <span className={styles.inputback_icon} onClick={handleClose}>
                <IoArrowBackOutline />
              </span>
              <input
                type="text"
                name={searchinput}
                placeholder="Places to go, things to do ..."
                ref={mobileSearchInput}
                onChange={handleInput}
              />
            </div>

            <div className={styles.search_results}>
              <div className={styles.category}>Destinations</div>
              <div className={styles.result_item}>
                <img
                  src="https://dummyimage.com/120x80/cfcfcf/030303"
                  alt="Milan"
                />
                <div className={styles.result_text}>
                  <span className={styles.title}>Milan, Lombardy</span>
                  <span className={styles.subtitle}>Italy</span>
                </div>
              </div>
              <div className={styles.result_item}>
                <img
                  src="https://dummyimage.com/120x80/cfcfcf/030303"
                  alt="Miami"
                />
                <div className={styles.result_text}>
                  <span className={styles.title}>Miami, Florida</span>
                  <span className={styles.subtitle}>United States</span>
                </div>
              </div>

              <div className={styles.category}>Top sights and tours</div>
              <div className={styles.result_item}>
                <span className={styles.result_location_icon}>
                  <IoLocationOutline />
                </span>

                <div className={styles.result_text}>
                  <span className={styles.title}>
                    Scuola Grande di San Rocco
                  </span>
                  <span className={styles.subtitle}>Venice, Italy</span>
                </div>
              </div>

              <div className={styles.category}>Things to do</div>
              <div className={styles.result_item}>
                <span className={styles.result_location_icon}>
                  <IoLocationOutline />
                </span>
                <div className={styles.result_text}>
                  <span className={styles.title}>
                    Quick Wine Tasting in Michalská
                  </span>
                  <span className={styles.subtitle}>Bratislava, Slovakia</span>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default SearchBar;
