
import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="hidden md:flex justify-center items-center bg-gray-900 text-white px-4 py-4 text-base">
      <div className="flex space-x-16">
        <span>📞 +91 963 006 2170</span>
        <span>✉️ support@company.com</span>
        <span>✉️ xyzfdds@gmail.com</span>
      </div>
      <Link to="/help" className="hover:underline">
        Help
      </Link>
    </div>
  );
};

export default TopBar;
