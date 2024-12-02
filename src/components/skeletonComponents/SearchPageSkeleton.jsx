import React from "react";

const SearchResultsSkeleton = () => {
  return (
    <div className="px-4 py-1 space-y-4">
      {/* Categories Skeleton */}
      <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-8 w-24 bg-gray-300 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>

      {/* Videos Skeleton */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex h-auto animate-pulse">
          {/* Thumbnail Skeleton */}
          <div className="w-40 min-w-56 md:w-[42vw] mr-4 h-24 md:h-72 bg-gray-300 rounded-2xl"></div>

          {/* Details Skeleton */}
          <div className="w-2/3 space-y-2">
            <div className="h-4 bg-gray-300 rounded-md w-4/5"></div>
            <div className="h-3 bg-gray-300 rounded-md w-3/5"></div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 rounded-full bg-gray-300"></div>
              <div className="h-3 bg-gray-300 rounded-md w-2/5"></div>
            </div>
            <div className="mt-2">
              <div className="h-3 bg-gray-300 rounded-md w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded-md w-2/4 mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultsSkeleton;
