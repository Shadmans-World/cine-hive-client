import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-16 py-8 mt-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* CineHive Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold">CineHive</h2>
          <p className="mt-2 text-gray-400">
            Discover, explore, and manage your favorite movies in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li className="mr-2">
              <NavLink to="/" className="text-gray-400 hover:text-white transition">
                Home
              </NavLink>
            </li>
            <li className="mr-2">
              <NavLink to="/allmovies" className="text-gray-400 hover:text-white transition">
                All Movies
              </NavLink>
            </li>
            <li className="mr-2">
              <NavLink to="/addmovies" className="text-gray-400 hover:text-white transition">
                Add Movies
              </NavLink>
            </li>
            <li className="mr-2">
              <NavLink to="/myfavorites" className="text-gray-400 hover:text-white transition">
                My Favorites
              </NavLink>
            </li>
            <li className="mr-2">
              <NavLink to="/upcoming-releases" className="text-gray-400 hover:text-white transition">
                Upcoming Releases
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-right">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="mt-2 flex justify-center sm:justify-end space-x-4">
            <a
              href="https://www.facebook.com/shadman.shoumik.shaon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a
              href="https://x.com/ShadmanShaon99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://www.instagram.com/shadman_ars/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-600">
        © 2024 CineHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
