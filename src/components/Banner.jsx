import React from 'react';
import MovieSlider from './MovieSlider';
import FeaturedPage from './FeaturedPage';


const Banner = () => {
   
    return (
        <div>
            <MovieSlider/>
            {/* Featured Movies */}
            <FeaturedPage/>
        </div>
    );
};

export default Banner;