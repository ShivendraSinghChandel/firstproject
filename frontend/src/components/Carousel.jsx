import React from "react";
import { Carousel } from "@material-tailwind/react";
import img1 from "../image/agriImage1.png";
import img2 from "../image/cementImage.jpg";
import img3 from "../image/pestiImage.jpg";

const CarouselComponent = () => {
  return (
    <Carousel className="w-[100vw] h-[90vh] relative overflow-x-hidden">
      {/* First Slide */}
      <div className="relative h-full w-full">
        <img
          src={img1}
          alt="Agricultural Products"
          className="h-full w-full object-cover opacity-80 transition-opacity duration-500 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-6 space-y-6 text-center">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold w-10/12  leading-tight">
            Explore All Agricultural Products.
          </h1>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 max-w-3xl">
            Empowering You with Every Essential Crop and Harvest – Discover Quality Agricultural Products All in One Place!
          </p>
          <button className="bg-[#075D04] text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-105">
           Learn More
          </button>
        </div>
      </div>

      {/* Second Slide */}
      <div className="relative h-full w-full">
        <img
          src={img2}
          alt="Cement Products"
          className="h-full w-full object-cover opacity-80 transition-opacity duration-500 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-6 space-y-6 text-center">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold w-10/12 leading-tight">
            Discover Premium Cement Products.
          </h1>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 max-w-3xl">
            Build with confidence using our range of high-quality cement products, perfect for all construction needs.
          </p>
          <button className="bg-[#075D04] text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Third Slide */}
      <div className="relative h-full w-full">
        <img
          src={img3}
          alt="Pest Control Products"
          className="h-full w-full object-cover opacity-80 transition-opacity duration-500 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-6 space-y-6 text-center">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl w-10/12 font-bold leading-tight">
            Protect with Reliable Pest Control Solutions.
          </h1>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 max-w-3xl">
            Ensure a safe environment with our effective pest control products, tailored for various needs.
          </p>
          <button className="bg-[#075D04] text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselComponent
