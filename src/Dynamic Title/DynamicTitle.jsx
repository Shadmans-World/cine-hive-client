import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = 'CineHive'; // Default title

    // Set dynamic title based on route
    if (location.pathname === '/') {
      title = 'Home - CineHive';
    } else if (location.pathname === '/allmovies') {
      title = 'All Movies - CineHive';
    } else if (location.pathname === '/addmovies') {
      title = 'Add Movies - CineHive';
    } else if (location.pathname.startsWith('/details')) {
      title = 'Movie Details - CineHive';
    } else if (location.pathname === '/upcoming-releases') {
      title = 'Upcoming Releases - CineHive';
    } else if (location.pathname.startsWith('/update-movie')) {
      title = 'Update Movie - CineHive';
    } else if (location.pathname === '/myfavorites') {
      title = 'My Favorites - CineHive';
    }

    // Set the document title
    document.title = title;
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default DynamicTitle;
