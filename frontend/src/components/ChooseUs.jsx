import React from "react";
import WhyImage from "../image/whyImage.png";
import { useNavigate } from "react-router-dom";

const ChooseUs = () => {
    const navigate=useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-6 md:p-12 gap-6">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start text-left space-y-4 lg:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
            Why Choose Us <div>As Your <span className="text-green-700">Trusted Partner?</span></div>
          </h2>
          <p className="text-gray-600 leading-6 text-sm md:text-base">
            We are a second-generation business rooted in agriculture, specializing in crop trading, exporting, and importing. With a wealth of knowledge passed down through generations, we are dedicated to providing top-quality products and exceptional service to our clients.
            <br />
            Over the years, we have built a trusted reputation and have become a recognized name in the agricultural market.
          </p>
          <button onClick={()=>{navigate("/about")}} className="bg-green-700 text-white py-2 px-6 rounded shadow hover:bg-green-900 transition-all duration-300">
            Know More
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <img
            src={WhyImage}
            alt="Why Choose Us"
            className="w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 object-cover bg-white"
          />
        </div>
      </div>

      {/* Bottom Div */}
      <div className="w-full bg-green-700 py-4 mt-6 text-white text-center grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-xl font-bold">
          <span className="block text-2xl font-bold">100+</span> Happy Clients
        </div>
        <div className="text-xl font-bold">
          <span className="block text-2xl font-bold">100+</span> Awards
        </div>
        <div className="text-xl font-bold">
          <span className="block text-2xl font-bold">10+</span> Products
        </div>
      </div>
    </>
  );
};

export default ChooseUs;