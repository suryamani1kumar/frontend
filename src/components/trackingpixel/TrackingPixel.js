import { useRouter } from "next/router";
import { useEffect } from "react";

const TrackingPixel = () => {
  const router = useRouter();
  const fullpageUrl = router.asPath;

 useEffect(() => {
    const startTime = Date.now();
    const pixel = () => {
      const ref = document.referrer;
      const time = Math.round((Date.now() - startTime) / 1000);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const img = new Image();
            img.src = `${process.env.NEXT_PUBLIC_HOSTNAME}?pageUrl=${fullpageUrl}&lat=${latitude}&long=${longitude}&referrer=${ref}&timespend=${time}&device=${"desktop"}&userAgent=${"google"}`;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    };
    window.addEventListener("beforeunload", pixel);
    return () => {
      window.removeEventListener("beforeunload", pixel);
    };
  }, []);

  return null;
};

export default TrackingPixel;
