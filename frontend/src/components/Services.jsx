import React from "react";
import importexport from "../image/import&export.png";
import brokerage from "../image/brokerage.png";
import riskmanagement from "../image/riskmangement.png";

const Services = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Our Services
        </h2>
        <div className="space-y-12">
      {/* Service 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Import & Export</h3>
          <p className="text-sm text-gray-700">
            PCTC is an international trading company with a vast global network. We specialize in the export and import of a diverse range of agricultural products, such as wheat, paddy, mustard, mustard oil, and more. 
            <br /><br />
            Our years of expertise ensure the highest quality standards and reliability in every transaction. We maintain strong relationships with farmers and suppliers to guarantee the best produce. 
            Additionally, our logistics and supply chain management are designed to ensure timely and secure delivery of goods worldwide. From documentation to transportation, we manage every step of the process with utmost precision.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={importexport}
            alt="Import & Export"
            className="w-full h-auto object-cover rounded-3xl bg-blend-lighten "
          />
        </div>
      </div>

      {/* Service 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Brokerage</h3>
          <p className="text-sm text-gray-700">
            Prabhu Chaturbhuj Trading is a trusted name in agricultural brokerage, connecting buyers and sellers for commodities like wheat, oilseeds, food grains, and paddy. 
            <br /><br />
            We provide end-to-end assistance, ensuring seamless transactions between parties. Our brokerage services are backed by a team of experts who analyze market trends and commodity pricing to deliver the most competitive deals.
            <br /><br />
            We prioritize transparency and trust, making us a preferred partner for clients looking to navigate the complexities of agricultural commodity trading.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={brokerage}
            alt="Brokerage"
            className="w-full h-auto object-cover rounded-3xl bg-blend-lighten "
          />
        </div>
      </div>

      {/* Service 3 */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Risk Management</h3>
          <p className="text-sm text-gray-700">
            Agricultural markets are inherently volatile, and managing risks is a critical aspect of ensuring stability and profitability. 
            <br /><br />
            At PCTC, we specialize in providing risk management solutions tailored to the unique needs of agricultural businesses. From price fluctuation analysis to supply chain stabilization, our strategies are designed to mitigate risks effectively.
            <br /><br />
            By leveraging advanced analytics and industry expertise, we enable organizations to adapt to market uncertainties and maintain a competitive edge. With our support, clients can focus on growth and long-term success.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={riskmanagement}
            alt="Risk Management"
            className="w-full h-auto object-cover rounded-3xl bg-blend-lighten "
          />
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Services;