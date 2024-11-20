import React from "react";
import agricultureImage from "../image/farming.jpg"; // Agriculture image
import hardwareImage from "../image/harware.jpg"; // Hardware image
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white p-8 md:p-12 lg:p-16">
      {/* Introduction */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About PCTC Group</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          PCTC Group is a second-generation business rooted in agriculture, specializing in crop trading, exporting, and importing.
          With years of experience passed down from previous generations, we have developed an in-depth understanding of the agricultural market.
          Our mission is to offer top-quality products and exceptional service while maintaining sustainability and ethical practices in all our business activities.
          Over the years, we have built a strong reputation and trust in the agricultural community. PCTC Group continues to provide premium agricultural products, as well as reliable and cost-effective solutions for our clients, both locally and internationally.
        </p>
      </section>

      {/* Our Expertise - Agriculture */}
      <section className="mb-16">
        <h3 className="text-3xl text-center font-semibold text-gray-800 mb-6">Our Commitment to Agriculture</h3>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <img
              src={agricultureImage}
              alt="Sustainable Agriculture"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Sustainable Agriculture</h4>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are deeply committed to sustainable agricultural practices. By partnering with local farmers and focusing on environmental stewardship, we ensure that our products are grown using methods that protect the land and water, while also producing healthy, high-quality crops.
              We understand the importance of sustainable practices in ensuring food security and environmental health, which is why we continue to innovate and improve our methods of production and distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise - Hardware */}
      <section className="mb-16">
        <h3 className="text-3xl text-center font-semibold text-gray-800 mb-6">Hardware Expertise</h3>
        <div className="flex flex-col  md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Cement & Cover Blocks</h4>
            <p className="text-lg text-gray-600 leading-relaxed">
              PCTC also specializes in providing high-quality hardware products, including cement and cover blocks, essential for construction and infrastructure projects.
              Our cement products are sourced from leading manufacturers, ensuring durability, while our cover blocks meet industry standards for strength and reliability. We take pride in offering products that are not only of the highest quality but also competitively priced, meeting the demands of both small-scale and large-scale projects.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={hardwareImage}
              alt="Hardware"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="mt-16 bg-gray-100 p-8 rounded-lg">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          We would love to hear from you! Whether you're interested in our agricultural products or hardware solutions, feel free to contact us for more information or inquiries. Our team is always ready to assist you.
        </p>
        <Link
          to="/contact"
          className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-800 transition-all duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default About;
