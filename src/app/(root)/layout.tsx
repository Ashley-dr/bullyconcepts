import React from "react";
import Navbar from "../components/header";
import Footer from "../components/footer";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <figure className="fixed z-10 w-full">
        <Navbar />
      </figure>

      {children}
      <Footer />
    </div>
  );
};

export default layout;
