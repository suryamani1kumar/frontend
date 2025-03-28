import React, { useState } from "react";
import styles from "./header.module.scss";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useDeviceType } from "@/hooks/useDevicetype";
import Drawer from "@mui/material/Drawer";

const Header = () => {
  const sticky = useStickyHeader(40);
  const device = useDeviceType();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <header
      className={classNames(styles.headerContainer, {
        [styles.sticky]: sticky,
      })}
    >
      <div className="container flexcontainer">
        <div>
          <Link href={"/"}>
            <Image
              src="https://dummyimage.com/130x40/878487/fff"
              height={40}
              width={130}
              alt="logo"
            />
          </Link>
        </div>
        {device !== "Desktop" && (
          <div className="flexcontainer">
            <div className={styles.Headsearch}>
              <IoSearchSharp />
            </div>
            <div className={styles.sideMenu} onClick={toggleDrawer}>
              <IoMenu />
            </div>
          </div>
        )}
      </div>
      {openDrawer && (
        <Drawer open={openDrawer} onClose={toggleDrawer}>
          <div className={styles.menu_container}>
            <div className={styles.menu_header}>
              <Link href={"/"}>
                <Image
                  src="https://dummyimage.com/130x40/878487/fff"
                  height={40}
                  width={130}
                  alt="logo"
                />
              </Link>
              <span className={styles.close_btn}>&times;</span>
            </div>
            <ul className={styles.menu_list}>
              <li className={styles.menu_item}>
                <i>✈️</i> Flights
              </li>
              <li className={styles.menu_item}>
                <i>🏨</i> Hotels
              </li>
              <li className={styles.menu_item}>
                <i>🏖️</i> Vacation
              </li>
              <li className={styles.menu_item}>
                <i>🚗</i> Car Rental
              </li>
              <li className={styles.menu_item}>
                <i>🔗</i> Transfers
              </li>
            </ul>
          </div>
        </Drawer>
      )}
    </header>
  );
};

export default Header;
