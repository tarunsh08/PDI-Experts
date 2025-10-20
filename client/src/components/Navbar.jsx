import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { ImInfo } from "react-icons/im";
import { IoMdContacts } from "react-icons/io";
import { FaTools, FaCalendarCheck, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <IoHomeOutline />, link: "/" },
    { name: "About", icon: <ImInfo />, link: "/about" },
    { name: "Contact", icon: <IoMdContacts />, link: "/contact" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-xl z-50 px-4 md:px-8 py-3 shadow-sm border-b border-neutral-200/50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-all duration-300 hover:opacity-80"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
            <FaTools className="text-white text-lg" />
          </div>
          <span className="text-xl font-bold text-neutral-900 tracking-tight">
            PDI<span className="text-orange-400">Mafia</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="flex items-center gap-2 px-4 py-2 text-neutral-700 font-medium text-sm hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 rounded-lg"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden lg:inline">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/book-appointment"
            className="hidden sm:flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <FaCalendarCheck className="text-lg" />
            <span className="hidden md:inline">Book Now</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden text-neutral-800 text-2xl cursor-pointer hover:text-orange-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 pt-4 animate-slideDown">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="flex items-center gap-3 px-4 py-3 text-neutral-700 font-medium hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-neutral-200">
              <Link
                to="/book-appointment"
                className="flex items-center justify-center gap-2 w-full bg-orange-400 hover:bg-orange-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
                onClick={() => setMenuOpen(false)}
              >
                <FaCalendarCheck className="text-lg" />
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;