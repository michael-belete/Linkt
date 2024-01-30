"use client";
import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ScrollAnimation = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);
  return <div className="overflow-hidden">{children}</div>;
};

export default ScrollAnimation;
