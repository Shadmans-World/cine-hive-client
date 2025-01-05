import React from "react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Must-Watch Movies of 2025",
    excerpt: "Discover the most anticipated movies of 2025 that you can't miss!",
    link: "/blog/top-10-movies-2025",
  },
  {
    id: 2,
    title: "Behind the Scenes: How Movies are Made",
    excerpt: "Explore the fascinating process of filmmaking, from script to screen.",
    link: "/blog/behind-the-scenes",
  },
  {
    id: 3,
    title: "Best Cinematic Soundtracks of All Time",
    excerpt: "Immerse yourself in the melodies of cinema's most iconic soundtracks.",
    link: "/blog/best-soundtracks",
  },
];

const BlogSection = () => {
  return (
    
      <div className="bg-gray-900 text-white py-12 my-8 mx-5 px-5">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-500 text-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className=" mb-4">{blog.excerpt}</p>
              <a
                href={"#"}
                className=" hover:underline font-medium"
                
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default BlogSection;
