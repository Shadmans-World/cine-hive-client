import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  return (
    <div className="card bg-base-100 shadow-xl h-[400px] w-[220px] flex flex-col">
      {/* Image Section */}
      <figure className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src={movie.poster}
          alt={movie.title}
        />
      </figure>

      {/* Content Section */}
      <div className="card-body flex-1 flex flex-col justify-between">
        {/* Title Section */}
        <h2 className="card-title">
          {movie.title.split(" ").slice(0, 3).join(" ")}...
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {movie.summary.split(" ").slice(0, 5).join(" ")}...
        </p>

        {/* Action Section */}
        <div className="card-actions justify-end">
          <Link to={`/details/${movie._id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movies;
