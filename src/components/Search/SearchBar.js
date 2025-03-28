import React from "react";
import { IoSearch } from "react-icons/io5";
import styles from "./search.module.scss";
import Dialog from "@mui/material/Dialog";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const SearchBar = () => {
  const [openMobile, setOpenMobile] = React.useState(false);

  const handleClickOpen = () => {
    setOpenMobile(true);
  };

  const handleClose = () => {
    setOpenMobile(false);
  };
  return (
    <>
      <div className={styles.dek_search_container}>
        <div className={styles.searchInput}>
          <IoSearch />
          <input placeholder="Places to go, things to do ..." />
        </div>

        <button className={styles.searchBtn} onClick={handleClickOpen}>
          Search
        </button>
      </div>

      {openMobile && (
        <Dialog fullScreen open={open} onClose={handleClose}>
          <div className={styles.search_container}>
            <div className={styles.input_container}>
              <span className={styles.inputback_icon} onClick={handleClose}>
                <IoArrowBackOutline />
              </span>
              <input type="text" placeholder="Starting From" />
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
