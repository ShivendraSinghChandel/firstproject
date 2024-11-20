import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import TopBar from "../components/Topbar";
import Footer from "./Footer";
import { MdAgriculture } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TopBar />

      <nav className="bg-white text-black">
        <div className="container mx-auto flex justify-between items-center px-4 py-4 border-b-2">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:pl-20">
            <MdAgriculture size={50} className="text-green-900" />
            <div>
              <p className="text-3xl font-bold">PCTC</p>
              <p className="text-xs font-medium">Prabhu Chaturbhuj Trading</p>
            </div>
          </Link>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex space-x-12 text-base font-bold">
            <Link to="/home" className="hover:text-gray-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link to="/product" className="hover:text-gray-600">
              Product
            </Link>
            <Link to="/services" className="hover:text-gray-600">
              Services
            </Link>
            <Link to="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>

          {/* Right: Social Media Icons */}
          <div className="hidden md:flex space-x-4 lg:pr-20">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 bg-green-900 text-white p-2 rounded-full"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 bg-green-900 text-white p-2 rounded-full"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 bg-green-900 text-white p-2 rounded-full"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            {/* Overlay background */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMenu}
            ></div>

            {/* Mobile menu */}
            <div className="fixed top-16 right-0 w-full bg-gray-800 text-white z-50 max-h-screen py-4 px-6">
              {/* Logo */}
              <div className="flex items-center justify-center space-x-2 mb-8">
                <MdAgriculture size={40} className="text-green-500" />
                <div>
                  <p className="text-xl font-bold">PCTC</p>
                  <p className="text-xs">Prabhu Chaturbhuj Trading</p>
                </div>
              </div>

              {/* Menu items */}
              <div className="space-y-4">
                <Link
                  to="/home"
                  className="block hover:bg-gray-700 px-4 py-2 rounded-md"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block hover:bg-gray-700 px-4 py-2 rounded-md"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="block hover:bg-gray-700 px-4 py-2 rounded-md"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  to="/product"
                  className="block hover:bg-gray-700 px-4 py-2 rounded-md"
                  onClick={toggleMenu}
                >
                  Product
                </Link>
                <Link
                  to="/contact"
                  className="block hover:bg-gray-700 px-4 py-2 rounded-md"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
