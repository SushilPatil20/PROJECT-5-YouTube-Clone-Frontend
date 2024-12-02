import React from "react";

const VideoManagementTableSkeleton = () => {
  return (
    <div className="max-w-7xl animate-pulse">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="h-6 w-24 bg-gray-300 rounded"></div>
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </div>

      {/* Video Table Section */}
      <div className="overflow-x-auto h-96 border">
        {/* Table Header */}
        <table className="w-full bg-white">
          <thead>
            <tr>
              {[
                "Video",
                "Date",
                "Views",
                "Comments",
                "Likes",
                "Dislikes",
                "Actions",
              ].map((header, index) => (
                <th
                  key={index}
                  className="p-2 text-sm font-semibold border-b bg-gray-200"
                >
                  <div className="h-4 bg-gray-300 rounded w-20 mx-auto"></div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td className="p-3 text-center border-b">
                  <div className="h-14 w-26 bg-gray-300 rounded-md mx-auto"></div>
                </td>
                {Array.from({ length: 6 }).map((_, i) => (
                  <td key={i} className="p-2 text-center border-b">
                    <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-4 w-4 bg-gray-300 rounded-full mx-1"
          ></div>
        ))}
      </div>

      {/* Modal Placeholder */}
      <div className="hidden">
        {/* Video Upload Modal Skeleton */}
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="w-96 bg-white rounded-md p-4">
            <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-10 bg-gray-300 rounded"></div>
              ))}
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoManagementTableSkeleton;
