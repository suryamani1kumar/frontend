"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp, IoGlobe } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useDeviceType } from "@/hooks/useDevicetype";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { SearchEnable } from "@/redux/reducers/moblieSearchSlice";
import { NavBarItems } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { axiosInstance } from "@/service/axiosInstance";
import { LuSquareMenu } from "react-icons/lu";

const Header = () => {
  const SearchIcon = useSelector((state) => state.toggleSearchIcon); // Get the toggle state from the store
  const pathname = usePathname();
  const sticky = useStickyHeader(40);
  const device = useDeviceType();
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [continent, setContinent] = useState([]);
  const [country, setCountry] = useState([]);
  const toggleDrawerOn = () => {
    setOpenDrawer(true);
  };
  const toggleDrawerOff = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    toggleDrawerOff();
  }, [pathname]);

  // useEffect(() => {
  //   axiosInstance
  //     .get("getLocationsByType?type=continent")
  //     .then((res) => setContinent(res.data.locations));
  //   axiosInstance
  //     .get("getLocationsByType?type=country")
  //     .then((res) => setCountry(res.data.locations));
  // }, []);

  return (
    <header
      className={classNames(styles.headerContainer, {
        [styles.sticky]: sticky,
      })}
    >
      <div className="container flexcontainer">
        <div
          className={
            device === "Desktop"
              ? styles.logo_inner_container
              : styles.logo_inner_container_mobile
          }
        >
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" width={150} height={40} />
          </Link>
        </div>
        {device === "Desktop" && (
          <ul className={styles?.desktop_menu_item}>
            {NavBarItems.map((item) => (
              <Link href={item?.link} key={item.id}>
                {item?.link === "/destinations" ? (
                  <li
                    className={styles.menuItem}
                  >
                    {item?.name}
                    <ul className={styles.submenu}>
                      {continent.map((conn) => (
                        <Link
                          href={`/destinations/${conn.slug}`}
                          key={conn.name}
                        >
                          <li className={styles.submenuItem}>
                            {conn.name}
                            <ul className={styles.submenuInner}>
                              {country
                                .filter((item) => item.parent === conn._id)
                                .map((country) => (
                                  <Link
                                    key={country.name}
                                    href={`/destinations/${conn.slug}/${country.slug}`}
                                  >
                                    <li>{country.name}</li>
                                  </Link>
                                ))}
                            </ul>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li>{item?.name}</li>
                )}
              </Link>
            ))}
          </ul>
        )}
        {device === "Desktop" && (
          <div className={styles?.sideItemContainer}>
            <div className={styles?.side_item_container}>
              <IoSearchSharp />
            </div>
          </div>
        )}
        {device !== "Desktop" && (
          <div
            onClick={toggleDrawerOn}
            style={{ width: "25px", height: "25px" }}
          >
            <LuSquareMenu style={{ width: "100%", height: "100%" }} />
          </div>
        )}
      </div>
      {openDrawer && (
        <Drawer open={openDrawer} onClose={toggleDrawerOff}>
          <div className={styles.menu_container}>
            <div className={styles.menu_header}>
              <Link href={"/"}>
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={180}
                  height={35}
                  style={{ height: "35px" }}
                />
              </Link>
              <span className={styles.close_btn} onClick={toggleDrawerOff}>
                &times;
              </span>
            </div>
            <ul className={styles.menu_list}>
              {NavBarItems.map((item) => (
                <Link href={item?.link} key={item.id}>
                  <li className={styles.menu_item}>{item?.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </Drawer>
      )}
    </header>
  );
};

export default Header;
