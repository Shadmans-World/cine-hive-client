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

        setFavorites((prevFavorites) =>
          prevFavorites.filter((fav) => fav._id !== favoriteId)
        );
      })
      .catch(() =>
        Swal.fire("Error", "An error occurred while deleting the movie.", "error")
      );
  };

  return (
    <div className="overflow-x-auto mx-5 my-8">
      {favorites.length === 0 ? (
        <p>No favorites found</p>
      ) : (
        <table className="table-auto w-full bg-white shadow-md rounded-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((favorite) => (
              <tr key={favorite._id} className="border-b">
                <td className="px-4 py-2">
                  <img
                    src={favorite.poster}
                    alt={favorite.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{favorite.title}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDeleteFavorite(favorite._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyFavorites;
