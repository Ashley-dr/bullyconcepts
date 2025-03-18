import React from "react";
import Navbar from "../components/header";
import Footer from "../components/footer";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
