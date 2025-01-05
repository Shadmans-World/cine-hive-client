import React, { useEffect, useState } from "react";
import Movies from "./Movies";

const FeaturedPage = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetch("https://cine-hive-server.vercel.app/featured")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  return (
    <div>
        <h2 className="text-3xl font-semibold text-center my-8 text-black">Movies with top rating</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
        {featured.map((featured) => (
          <Movies key={featured._id} movie={featured} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPage;
