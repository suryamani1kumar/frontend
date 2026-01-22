"use client"
import { sumbitData } from "@/service/postData";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const TrackingPixel = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const fullpageUrl = router.asPath;
  const activityRef = useRef({
    pageUrl: "",
    lat: "",
    long: "",
    referrer: "",
    timeStart: Date.now(),
    timeEnd: "",
    device: "",
    userAgent: "",
    eventTrigger: [],
    screenWidth: "",
    screenHeight: "",
  });

  const debounce = (func, timer) => {
    let clearTimer;
    return function (...args) {
      clearTimeout(clearTimer);
      clearTimer = setTimeout(() => {
        func.apply(this, args);
      }, timer);
    };
  };

  const logEvent = (extraData = {}) => {
    activityRef.current.eventTrigger.push(extraData);
  };

  useEffect(() => {
    // Initialize on mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          activityRef.current.lat = latitude;
          activityRef.current.long = longitude;
        },
        (error) => {
          console.warn("Geolocation error:", error);
        }
      );
    }

    activityRef.current.pageUrl = fullpageUrl;
    activityRef.current.referrer = document.referrer;
    activityRef.current.device = "desktop";
    activityRef.current.userAgent = "google";
    activityRef.current.screenWidth = window.innerWidth;
    activityRef.current.screenHeight = window.innerHeight;

    const handleClick = (e) => {
      if (
        e.target?.tagName === "BUTTON" ||
        e.target?.tagName === "A" ||
        e.target?.tagName === "IMG"
      ) {
        logEvent({
          event: "click",
          target: e.target.outerHTML,
        });
      }
    };

    const handleInput = debounce((e) => {
      logEvent({ event: "input", target: e.target.outerHTML });
    }, 200);

    const handleCopy = (e) => {
      logEvent({ event: "copy", target: e.target.outerHTML });
    };

    const handleScroll = debounce(() => {
      logEvent({ event: "scroll", scrollY: window.scrollY });
    }, 200);

    const handleResize = debounce(() => {
      activityRef.current.screenWidth = window.innerWidth;
      activityRef.current.screenHeight = window.innerHeight;
    }, 200);

    const dataSend = () => {
      activityRef.current.timeEnd = Date.now();
      navigator.sendBeacon(
        dispatch(
          sumbitData({
            url: `track`,
            requestBody: { ...activityRef.current },
          })
        )
      );
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("copy", handleCopy);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document
      .querySelectorAll("input, textarea, select")
      .forEach((el) => el.addEventListener("input", handleInput));

    window.addEventListener("beforeunload", dataSend);
    // router.events.on("routeChangeStart", dataSend);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("copy", handleCopy);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document
        .querySelectorAll("input, textarea, select")
        .forEach((el) => el.removeEventListener("input", handleInput));
      window.removeEventListener("beforeunload", dataSend);
      router.events.off("routeChangeStart", dataSend);
    };
  }, [fullpageUrl]);

  return null;
};

export default TrackingPixel;
