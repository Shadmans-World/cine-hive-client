import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import UpcomingReleases from '../components/upcomingReleases ';
import StreamingPlatformGuide from '../components/StreamingPlatformGuide ';
import BlogSection from '../components/BlogSection';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if the theme is already saved in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle the theme and save it to localStorage
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light'); // Persist the theme
      return newMode;
    });
  };

  // Apply the theme class to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`home-page ${isDarkMode ? 'dark' : 'light'}`}>
      <Banner />
      <UpcomingReleases></UpcomingReleases>
      <StreamingPlatformGuide/>
      <BlogSection/>
      <button 
        onClick={toggleTheme} 
        className={`ml-5 theme-toggle-btn ${isDarkMode ? 'dark' : ''}`}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Home;
