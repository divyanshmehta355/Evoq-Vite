import React, { useState } from "react";
import { NavLink as RouterLink, useNavigate } from "react-router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {EVOQ_LOGO} from "../constants/images"; // Replace with your logo path
import { cn } from "../lib/utils";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className={cn("bg-[#010203] p-4 w-full border-b")}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <button onClick={() => navigate("/")}>
            <img src={EVOQ_LOGO} alt="Logo" className="h-12 w-auto" />
          </button>
        </div>

        {/* Menu button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            {sidebarOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </button>
        </div>

        {/* Navigation links (hidden on mobile) */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" title="Home" />
          <NavLink to="/about" title="About" />
          <NavLink to="/services" title="Services" />
          <NavLink to="/contact" title="Contact Us" />
        </div>

        {/* Sidebar for mobile */}
        <div
          className={`fixed top-0 left-0 h-full bg-[#010203] w-64 transform transition-transform duration-300 ease-in-out md:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleSidebar} className="text-white">
              <AiOutlineClose size={28} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-8">
            <NavLink to="/" title="Home" />
            <NavLink to="/about" title="About" />
            <NavLink to="/services" title="Services" />
            <NavLink to="/contact" title="Contact Us" />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, title }) => {
  return (
    <RouterLink
      to={to}
      className={({ isActive }) =>
        `text-white px-3 py-2 rounded ${
          isActive ? "bg-gray-700" : "hover:bg-gray-700"
        }`
      }
    >
      {title}
    </RouterLink>
  );
};

export default Navbar;
