import React from "react";
import { Link } from "react-router-dom";
import { MdAgriculture } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Logo Section */}
      <div className="container mx-auto px-6 lg:px-20 mb-8">
        <Link to="/" className="flex items-center space-x-3">
          <MdAgriculture size={50} className="text-white" />
          <div>
            <p className="text-3xl font-bold leading-none">PCTC</p>
            <p className="text-xs font-medium">Prabhu Chaturbhuj Trading</p>
          </div>
        </Link>
      </div>

      {/* Links and Information Section */}
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/home" className="hover:text-gray-300 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300 transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-gray-300 transition-colors duration-200">
                Product
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300 transition-colors duration-200">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/services" className="hover:text-gray-300 transition-colors duration-200">
                Import & Export
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300 transition-colors duration-200">
                Brokerage
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300 transition-colors duration-200">
                Risk Management
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/product" className="hover:text-gray-300 transition-colors duration-200">
                Grocery
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-gray-300 transition-colors duration-200">
                Agriculture
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-gray-300 transition-colors duration-200">
                Hardware
              </Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Near Maharshi School Jogipur Sidhi</li>
            <li>302 BDA Bhopal</li>
            <li>
              Email:{" "}
              <a href="mailto:contact@company.com" className="hover:underline">
                contact@company.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+919630062170" className="hover:underline">
                +91 9630062170
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2024 Hustlers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
