'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,          // Animation duration
      easing: 'ease-out-quart', // Easing type
      once: true,             // Whether animation should happen only once
      offset: 100,            // Offset (px) from the original trigger point
      disable: 'mobile'       // Disable on mobile devices (optional)
    });
  }, []);

  return null;
};

export default AOSInit;