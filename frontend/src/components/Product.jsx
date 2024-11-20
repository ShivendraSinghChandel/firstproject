import React from "react";
import rice from "../image/rice.jpg";
import mustard from "../image/mustard.jpg";
import mustardoil from "../image/mustardoil.jpg";
import pigeonpeas from "../image/pigeonpeas.jpg";
import sugar from "../image/sugar.jpg";
import wheatflour from "../image/wheatflour.jpg";
import cement from "../image/cement.jpg";
import coverblock from "../image/coverblock.jpg";

const Product = () => {
  const products = [
    {
      image: rice,
      title: "Rice (Chawal)",
      description:
        "Our premium quality rice is sourced from the finest fields. Ideal for everyday cooking, with long and fluffy grains that provide a soft texture and pleasant aroma once cooked.",
      benefits:
        "Rich in carbohydrates, calcium, magnesium, and Vitamin B6, promoting digestion and strong bones.",
    },
    {
      image: mustard,
      title: "Mustard (Sarso)",
      description:
        "Rich mustard seeds for cooking and oil extraction, known for their aromatic and pungent flavor.",
      benefits:
        "Rich in antioxidants, omega-3 fatty acids, and minerals like calcium and magnesium for heart health and immunity.",
    },
    {
      image: sugar,
      title: "Sugar (Chini)",
      description:
        "Refined sugar, perfect for sweetening beverages and baking. Processed to meet the highest quality standards.",
      benefits:
        "Provides quick energy and plays a vital role in enhancing the texture and flavor of baked goods.",
    },
    {
      image: mustardoil,
      title: "Mustard Oil (Sarso ka Tel)",
      description:
        "Cold-pressed mustard oil with rich omega-3 fatty acids for cooking and therapeutic uses.",
      benefits:
        "Improves heart health, reduces inflammation, and promotes glowing skin.",
    },
    {
      image: wheatflour,
      title: "Wheat Flour (Atta)",
      description:
        "Finely ground wheat flour, ideal for making chapati, naan, and other dishes, packed with nutrients.",
      benefits:
        "Rich in dietary fiber, magnesium, and protein for healthy digestion and energy.",
    },
    {
      image: pigeonpeas,
      title: "Pigeon Peas (Arhar/Tuvar ki dal)",
      description:
        "Nutty-flavored peas, excellent for dals, soups, and curries, with high protein and dietary fiber.",
      benefits:
        "Supports bone health, digestion, and metabolic function. Perfect for vegetarian diets.",
    },
    {
      image: cement,
      title: "Cement",
      description:
        "High-strength cement for construction projects, ensuring durability and resilience.",
      benefits:
        "Withstands extreme weather and reduces the carbon footprint with sustainable production.",
    },
    {
      image: coverblock,
      title: "Cover Block",
      description:
        "High-quality concrete cover blocks for reinforcing structures with durability and stability.",
      benefits:
        "Protects reinforcement steel from corrosion, enhancing the lifespan of concrete structures.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <p className="text-gray-600 text-sm">
                  <strong>Benefits:</strong> {product.benefits}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
