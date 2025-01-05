import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context API/AuthProvider";
import Movies from "../components/Movies";

const AllMovies = () => {
  const { movies } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' for A-Z, 'desc' for Z-A

  // Filter movies based on the search query
  useEffect(() => {
    let updatedMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort the filtered movies
    if (sortOrder === "asc") {
      updatedMovies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      updatedMovies.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredMovies(updatedMovies);
  }, [searchQuery, sortOrder, movies]);

  return (
    <div>
      {/* Search and Sort Controls */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Movie Title"
          className="input input-bordered w-full max-w-xs my-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Sort Dropdown */}
        <div className="dropdown my-8 z-10 ">
          <button className="btn btn-secondary dropdown-toggle">
            Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </button>
          <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button onClick={() => setSortOrder("asc")}>A-Z</button>
            </li>
            <li>
              <button onClick={() => setSortOrder("desc")}>Z-A</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <Movies key={movie._id} movie={movie} />)
        ) : (
          <p>No movies found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
