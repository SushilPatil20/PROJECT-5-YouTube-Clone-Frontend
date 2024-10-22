import React from "react";

const categories = [
  "All",
  "Indian Idol",
  "Mixes",
  "Game Shows",
  "Live",
  "Arijit Singh",
  "Alka Yagnik",
  "Middle Eastern Music",
  "Rahat Fateh Ali Khan",
  "News",
  "Podcasts",
  "Shreya Ghoshal",
  "Movie musicals",
];

const CategoriesListing = () => {
  return (
    <div className="h-fit flex items-center overflow-x-auto sticky top-0 bg-white py-3 no-scrollbar">
      {categories.map((category, index) => (
        <p
          key={index}
          className="mr-3 min-w-fit text-black bg-gray-100 hover:bg-gray-200 font-semibold px-4 py-1 rounded-md text-sm"
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default CategoriesListing;
