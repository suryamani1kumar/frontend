import { useRouter } from "next/router";
import { useEffect } from "react";

const TrackingPixel = () => {
  const router = useRouter();
  const fullpageUrl = router.asPath;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const img = new Image();
          img.src = `http://localhost:5000/track?url=${fullpageUrl}&lat=${latitude}&long=${longitude}`;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);

  return null;
};

export default TrackingPixel;
