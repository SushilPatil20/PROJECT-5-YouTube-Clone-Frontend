import React from "react";
import CategoriesListing from "./CategoriesListing";
import { Link, useNavigate } from "react-router-dom";
import { carts } from "../../utils/helpers";

const VideoListing = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-6 relative">
      <CategoriesListing />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-2 gap-4">
        {carts.map((cart, index) => (
          <div onClick={() => navigate(`/watch/${cart.id}`)} key={index}>
            <div className="min-h-72 mx-auto cursor-pointer sm:w-fit md:w-full md:mb-4">
              <div>
                <img
                  className="rounded-lg"
                  src={cart.thumbnail}
                  alt={cart.title}
                />
              </div>
              <div className="py-3 space-y-1">
                <p className="md:text-sm font-semibold line-clamp-1">
                  {cart.title}
                </p>
                <p className="text-gray-600m text-sm">{cart.channel}</p>
                <small className="text-gray-600">{cart.views}</small>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default VideoListing;
