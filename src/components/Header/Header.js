import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useDeviceType } from "@/hooks/useDevicetype";
import Drawer from "@mui/material/Drawer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { SearchEnable } from "@/redux/reducers/moblieSearchSlice";

const Header = () => {
  const SearchIcon = useSelector((state) => state.toggleSearchIcon); // Get the toggle state from the store
  const router = useRouter();
  const sticky = useStickyHeader(40);
  const device = useDeviceType();
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawerOn = () => {
    setOpenDrawer(true);
  };
  const toggleDrawerOff = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", toggleDrawerOff);
    return () => {
      router.events.off("routeChangeComplete", toggleDrawerOff);
    };
  }, [router]);

  const searchHandle = () => {
    if (device === "Mobile") {
      dispatch(SearchEnable(true));
      return;
    }
    
    if (device === "Desktop" || device === "Tablet") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
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

        <div className="flexcontainer">
          {SearchIcon && (
            <div className={styles.Headsearch}>
              <IoSearchSharp onClick={searchHandle} />
            </div>
          )}

          {device !== "Desktop" && (
            <div className={styles.sideMenu} onClick={toggleDrawerOn}>
              <IoMenu />
            </div>
          )}
        </div>
      </div>
      {openDrawer && (
        <Drawer open={openDrawer} onClose={toggleDrawerOff}>
          <div className={styles.menu_container}>
            <div className={styles.menu_header}>
              <Link href={"/"}>
                <Image
                  src="https://dummyimage.com/180x50/878487/fff"
                  height={0}
                  width={0}
                  alt="logo"
                />
              </Link>
              <span className={styles.close_btn} onClick={toggleDrawerOff}>
                &times;
              </span>
            </div>
            <ul className={styles.menu_list}>
              <li className={styles.menu_item}>
                <Link href={"/blog"}>Blog</Link>
              </li>
            </ul>
          </div>
        </Drawer>
      )}
    </header>
  );
};

export default Header;
