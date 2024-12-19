import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="cursor-custom">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
