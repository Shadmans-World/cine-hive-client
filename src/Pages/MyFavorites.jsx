import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context API/AuthProvider";

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext);

  
  useEffect(() => {
    if (user) {
      fetch(`https://cine-hive-server.vercel.app/favorites/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
        })
        .catch((error) => {
          console.error("Error fetching favorites:", error);
        });
    }
  }, [user]);

 
  const handleDeleteFavorite = (favoriteId) => {
    fetch(`https://cine-hive-server.vercel.app/favorites/${favoriteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Deleted!", "Your favorite movie has been deleted.", "success");
        
        setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav._id !== favoriteId));
      })
      .catch(() => Swal.fire("Error", "An error occurred while deleting the movie.", "error"));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites.length === 0 ? (
        <p>No favorites found</p>
      ) : (
        favorites.map((favorite) => (
          <div className="card card-side bg-base-100 shadow-xl" key={favorite._id}>
            <figure className="h-full w-[50%]">
              <img
                className="h-full w-full object-cover"
                src={favorite.poster}  
                alt={favorite.title}  
              />
            </figure>
            <div className="card-body w-[50%]">
              <h2 className="card-title">{favorite.title}</h2>  
              <div className="flex flex-wrap gap-2">
                {favorite.genre.map((genre, idx) => (  
                  <p key={idx} className="badge badge-outline">
                    {genre}
                  </p>
                ))}
              </div>
              <p className="text-gray-500 text-[14px]">
                Duration: {favorite.duration} minutes  
              </p>
              <p className="text-gray-500 text-[14px]">
                Release Year: {favorite.releaseYear}  
              </p>
              <p className="text-gray-500 text-[14px]">
                Rating: {favorite.rating}/5  
              </p>
      
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDeleteFavorite(favorite._id)}  
                  className="btn btn-primary ml-2"
                >
                  Delete from Favorites
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyFavorites;
