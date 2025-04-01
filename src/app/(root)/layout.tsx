/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Navbar from "../components/header";
import Footer from "../components/footer";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="text-center grid mt-64 text-xl">
        Site Down for Maintenance
        <h1>We&rsquo;ll be back soon!</h1>
        <p>
          Our website is currently down for maintenance. Please check back
          later.
        </p>
      </div>
      {/* <figure className="fixed z-10 w-full">
        <Navbar />
      </figure>

      {children}
      <Footer /> */}
    </div>
  );
};

export default layout;
