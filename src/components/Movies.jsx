import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl h-full">
      {/* Image Section */}
      <figure className="h-full w-1/2">
        <img
          className="h-full w-full object-cover"
          src={movie.poster}
          alt={movie.title}
        />
      </figure>

      {/* Content Section */}
      <div className="card-body w-1/2 flex flex-col justify-between">
        {/* Title Section */}
        <h2 className="card-title">{movie.title}</h2>

        {/* Genre Section */}
        <div className="flex flex-col gap-2">
          {movie.genre.map((genre, idx) => (
            <span key={idx} className="badge badge-outline">
              {genre}
            </span>
          ))}
        </div>

        {/* Details Section */}
        <div className="text-gray-500 space-y-2 text-sm">
          <p>Duration: {movie.duration} minutes</p>
          <p>Release Year: {movie.releaseYear}</p>
          <p>Rating: {movie.rating}/5</p>
        </div>

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
