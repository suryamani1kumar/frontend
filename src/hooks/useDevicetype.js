import { useState, useEffect } from 'react';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('Desktop');

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < 768) {
        setDeviceType('Mobile');
      } else {
        setDeviceType('Desktop');
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return deviceType;
};
