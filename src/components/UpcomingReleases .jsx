import React from 'react';

const UpcomingReleases = () => {
  // Hardcoded data for upcoming releases
  const upcomingReleases = [
    {
      id: 1,
      title: "Avengers: Secret Wars",
      releaseDate: "2025-05-01",
      description: "The Avengers must face their greatest threat yet in this epic battle to save the multiverse.",
      image: "https://i.ibb.co.com/b1VhJ5f/chat-Avengers-Secret-Wars.webp"
    },
    


    {
      id: 2,
      title: "Guardians of the Galaxy Vol. 3",
      releaseDate: "2024-12-15",
      description: "The Guardians face new challenges while trying to uncover their pasts and their purpose.",
      image: "https://i.ibb.co.com/RydhWZW/chat-Guardians-of-the-Galaxy-Vol-3.webp"
    },
    {
      id: 3,
      title: "The Flash",
      releaseDate: "2024-06-30",
      description: "Barry Allen must face the consequences of time travel and save the multiverse from collapse.",
      image: "https://i.ibb.co.com/N1VVFny/chat-flash.webp"
    }
  ];

  return (
    <div className="my-8 px-5 text-white">
      <h2 className="text-3xl font-semibold text-center mb-8 text-black">Upcoming Releases</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingReleases.map((movie) => (
          <div key={movie.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{movie.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{new Date(movie.releaseDate).toLocaleDateString()}</p>
              <p className="text-gray-300 mt-4">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingReleases;
