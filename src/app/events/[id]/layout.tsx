import React from "react";

import Footer from "../../components/footer";
import PageHeader from "@/app/components/pageHeader";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <figure className="fixed z-10 w-full ">
        <PageHeader />
      </figure>

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
