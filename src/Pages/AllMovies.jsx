import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Context API/AuthProvider';
import Movies from '../components/Movies';

const AllMovies = () => {
  const { movies } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Update the filtered movies whenever the search query or the original list changes
  useEffect(() => {
    setFilteredMovies(
      movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, movies]);

  return (
    <div>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by Movie Title"
          className="input input-bordered w-full max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
          filteredMovies.length > 0 ? (
            filteredMovies.map(movie => <Movies key={movie._id} movie={movie} />)
          ) : (
            <p>No movies found for "{searchQuery}"</p>
          )
        }
      </div>
    </div>
  );
};

export default AllMovies;
