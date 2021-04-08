import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <main className="bg-white dark:bg-gray-900">{children}</main>;
};

export default Layout;
