"use client";
import { useEffect, useState } from "react";

export function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        // const userAgent = navigator.userAgent.toLowerCase();
        // const mobileDevices =
        //   /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

        const isMobileViewport = window.innerWidth < 640;

        setIsMobile(isMobileViewport);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return { isMobile };
}
