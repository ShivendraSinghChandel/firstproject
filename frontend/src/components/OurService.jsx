import React from "react";
import importexport from "../image/import&export.png";
import brokerage from "../image/brokerage.png";
import riskmanagement from "../image/riskmangement.png";
import { Link } from "react-router-dom";

const OurService = () => {
  return (
    <section className="bg-white">
      <div className="py-12 px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Main Heading Section */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
          <p className="text-gray-600 mt-4 text-sm sm:text-base lg:px-24 font-medium leading-relaxed">
            Our expertise spans a wide range of products, including wheat,
            paddy, mustard, mustard oil, and even cement. With years of
            knowledge passed down through generations, we bring unparalleled
            quality and dedication to every transaction. Our longstanding
            reputation as a trusted name in the market reflects our commitment
            to excellence and reliability across industries.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md transition-transform transform hover:scale-105 duration-300 flex flex-col">
            <img
              src={importexport}
              alt="Import & Export"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Import & Export
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                PCTC is an international trading company with an extensive
                global network. We specialize in the export and import of
                various agricultural products, including wheat, paddy, mustard,
                mustard oil, and more.
              </p>

              <button className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition-colors">
                <Link to={"/about"}>Learn More</Link>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md transition-transform transform hover:scale-105 duration-300 flex flex-col">
            <img
              src={brokerage}
              alt="Brokerage"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Brokerage
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Prabhu Chaturbhuj Trading is a leading name in the brokerage of
                a wide array of agricultural products, including wheat,
                oilseeds, food grains, and paddy.
              </p>
              <button className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition-colors">
                <Link to={"/about"}>Learn More</Link>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md transition-transform transform hover:scale-105 duration-300 flex flex-col">
            <img
              src={riskmanagement}
              alt="Risk Management"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Risk Management
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Risk management in the agricultural commodity market is crucial,
                as it is one of the most volatile markets. At PCTC, we help
                organizations navigate these challenges by providing strategies
                to adapt and effectively manage risks.
              </p>
              <button className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition-colors">
                <Link to={"/about"}>Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
