import React from 'react';
import rice from "../image/rice.jpg";
import mustard from "../image/mustard.jpg";
import mustardoil from "../image/mustardoil.jpg";
import pigeonpeas from "../image/pigeonpeas.jpg";
import sugar from "../image/sugar.jpg";
import wheatflour from "../image/wheatflour.jpg";
import cement from "../image/cement.jpg";
import coverblock from "../image/coverblock.jpg";

const HomeProduct = () => {
    const products = [
        { image: rice, name: "Rice (Chawal)" },
        { image: mustard, name: "Mustard (Sarso)" },
        { image: sugar, name: "Sugar (Chini)" },
        { image: mustardoil, name: "Mustard Oil (Sarso ka tel)" },
        { image: wheatflour, name: "Wheat Flour (Gehu ka Ataa)" },
        { image: pigeonpeas, name: "Pigeon Peas (Arhar/Tuvar ki dal)" },
        { image: cement, name: "Cement" },
        { image: coverblock, name: "Cover Block" },
    ];

    return (
        <div className=" bg-gray-200 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 lg:mx-10">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
                    >
                        <img
                            src={product.image}
                            alt={`${product.name} image is loading`}
                            className="w-full h-48 object-cover mb-4 rounded-t-lg"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 text-center px-4 pb-4">
                            {product.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeProduct;
