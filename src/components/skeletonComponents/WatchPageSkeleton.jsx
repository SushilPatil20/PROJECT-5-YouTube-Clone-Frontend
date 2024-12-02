import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const WatchPageSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full px-2 sm:px-4">
      {/* Video Player Skeleton */}
      <div className="lg:w-[68%] w-full">
        <div className="w-full h-[250px] sm:h-[390px] md:h-[490px] mb-2 mt-6">
          <Skeleton height="100%" borderRadius="10px" />
        </div>

        {/* Title and Actions Skeleton */}
        <div className="space-y-3">
          <Skeleton height={25} width="70%" />
          <div className="flex space-x-4">
            <Skeleton circle height={40} width={40} />
            <div className="space-y-2">
              <Skeleton height={18} width="50%" />
              <Skeleton height={14} width="30%" />
            </div>
            <Skeleton height={40} width={80} />
          </div>
        </div>

        {/* Description Skeleton */}
        <div className="mt-4 space-y-2">
          <Skeleton height={20} width="90%" />
          <Skeleton height={15} width="95%" />
          <Skeleton height={15} width="80%" />
        </div>

        {/* Comments Section Skeleton */}
        <div className="mt-6 space-y-4">
          <Skeleton height={20} width="30%" />
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex space-x-4">
              <Skeleton circle height={40} width={40} />
              <div className="flex-1">
                <Skeleton height={15} width="50%" />
                <Skeleton height={12} width="80%" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Videos Skeleton */}
      <div className="lg:w-[32%] w-full mt-6 lg:mt-0 lg:pl-4">
        <Skeleton height={25} width="50%" />
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex space-x-4 mt-4">
            <Skeleton height={80} width={120} />
            <div className="flex-1 space-y-2">
              <Skeleton height={15} width="70%" />
              <Skeleton height={15} width="50%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPageSkeleton;
