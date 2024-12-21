import React from 'react';
import { MdOndemandVideo, MdOutlineMovie, MdVideoLibrary } from 'react-icons/md'; // Generic icons
import { RiAmazonLine } from 'react-icons/ri'; // Amazon icon

const StreamingPlatformGuide = () => {
  // Data for streaming platforms
  const platforms = [
    {
      id: 1,
      name: "Netflix",
      description: "Popular streaming service offering a wide range of movies, TV shows, and original content.",
      icon: <MdVideoLibrary className="text-red-600 text-6xl mx-auto" />, // Generic video icon
    },
    {
      id: 2,
      name: "Hulu",
      description: "A streaming platform with an extensive library of movies, TV shows, and exclusive series.",
      icon: <MdOndemandVideo className="text-green-500 text-6xl mx-auto" />, // On-demand video icon
    },
    {
      id: 3,
      name: "Disney+",
      description: "Home to Disney classics, Marvel, Star Wars, Pixar, and National Geographic content.",
      icon: <MdOutlineMovie className="text-blue-500 text-6xl mx-auto" />, // Movie icon
    },
    {
      id: 4,
      name: "Amazon Prime Video",
      description: "A popular service offering movies, TV series, and original programming, including exclusive titles.",
      icon: <RiAmazonLine className="text-yellow-500 text-6xl mx-auto" />, // Amazon icon
    }
  ];

  return (
    <div className="py-16 px-6 text-white ">
      <h2 className="text-3xl font-semibold text-center mb-8 text-black">Streaming Platform Guide</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-900">
        {platforms.map((platform) => (
          <div key={platform.id} className="rounded-lg p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div>{platform.icon}</div>
            <h3 className="text-xl font-semibold mt-4 mb-2">{platform.name}</h3>
            <p className="text-gray-300">{platform.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamingPlatformGuide;
