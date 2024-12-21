import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Context API/AuthProvider";

const MovieDetails = () => {
  const movie = useLoaderData();
  const { user, setMovies, movies } = useContext(AuthContext);
  const navigate = useNavigate();
  const [deleting, setDeleting] = useState(false);
  const [isAddingFavorite, setIsAddingFavorite] = useState(false);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDeleting(true);
        fetch(`https://cine-hive-server.vercel.app/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const newMovieList = movies.filter((movie) => movie._id !== _id);
              setMovies(newMovieList);
              Swal.fire("Deleted!", "Your movie has been deleted.", "success");
              navigate("/allmovies");
            } else {
              Swal.fire("Error!", "Failed to delete the movie.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting the movie:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the movie.",
              "error"
            );
          })
          .finally(() => setDeleting(false));
      }
    });
  };

  const handleAddToFavorites = () => {
    if (!user) {
      Swal.fire("Error", "Please login to add to favorites", "error");
      return;
    }

    setIsAddingFavorite(true);

    const favoriteMovie = {
      movieId: movie._id,
      userEmail: user.email,
      title: movie.title,
      genre: movie.genre,
      duration: movie.duration,
      releaseYear: movie.releaseYear,
      rating: movie.rating,
      poster: movie.poster,
    };

    fetch("https://cine-hive-server.vercel.app/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Added!",
            "The movie has been added to your favorites.",
            "success"
          );
        } else {
          Swal.fire(
            "Error",
            "This movie is already in your favorites.",
            "error"
          );
        }
      })
      .catch((error) => {
        Swal.fire(
          "Error",
          "An error occurred while adding the movie.",
          "error"
        );
        console.error("Error adding to favorites:", error);
      })
      .finally(() => setIsAddingFavorite(false));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="card card-side bg-base-100 shadow-xl w-[1000px]  mx-auto h-max">
        <figure className="h-full w-[50%] p-3">
          <img
            className="h-full w-full object-contain"
            src={movie.poster}
            alt={movie.title}
          />
        </figure>
        <div className="card-body w-[50%]">
          <h2 className="card-title text-4xl font-bold">{movie.title}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genre.map((genre, idx) => (
              <p key={idx} className="badge badge-outline badge-lg">
                {genre}
              </p>
            ))}
          </div>
          <p className="text-gray-600 text-[16px] mb-2">
            Duration:{" "}
            <span className="font-semibold">{movie.duration} minutes</span>
          </p>
          <p className="text-gray-600 text-[16px] mb-2">
            Release Year:{" "}
            <span className="font-semibold">{movie.releaseYear}</span>
          </p>

          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Rating:</span>
            <div className="flex text-xl">{movie.rating}/5</div>
          </div>

          <p className="text-gray-700 leading-relaxed">{movie.summary}</p>

          <div className="card-actions justify-between gap-4 mt-4">
            <button
              onClick={() => handleDelete(movie._id)}
              className={`btn btn-primary btn-lg w-44 ${deleting ? "btn-disabled" : ""}`}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
            </button>

            <button
              onClick={handleAddToFavorites}
              className={`btn btn-secondary btn-lg w-44 ${isAddingFavorite ? "btn-disabled" : ""}`}
              disabled={isAddingFavorite}
            >
              {isAddingFavorite ? "Adding..." : "Add to Favorite"}
            </button>

            <button
              onClick={() => navigate(`/update-movie/${movie._id}`)}
              className="btn btn-primary btn-lg w-44"
            >
              Update Movie
            </button>
          </div>
        </div>
      </div>

      <Link to="/allmovies">
        <button className="btn btn-primary mt-4">See All Movies</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
