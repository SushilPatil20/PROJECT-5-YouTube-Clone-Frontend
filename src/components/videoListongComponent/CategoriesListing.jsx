import React from "react";
import { categories } from "../../utils/helpers";

const CategoriesListing = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex h-full w-full items-center overflow-x-auto sticky top-0 bg-white py-4 no-scrollbar z-2">
      {categories.map((category, index) => (
        <p
          key={index}
          className={`mr-3 min-w-fit text-black font-semibold px-4 py-1 rounded-md text-sm cursor-pointer ${
            selectedCategory === category
              ? "bg-black text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedCategory(category)} // Change category on click
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default CategoriesListing;
