import React from "react";
import Slider from "react-slick";
import "./Slider.css"; // Custom styles

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieSlider = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="movie-card">
          <img src="/Images/chat endgame.webp" alt="Avengers: Endgame" />
          <p className="movie-info">
            Avengers: Endgame
            <br />
            2019 | Directors: Anthony and Joe Russo
          </p>
        </div>
        <div className="movie-card">
          <img
            src="/Images/chat infinity war .webp"
            alt="Avengers: Infinity War"
          />
          <p className="movie-info">
            Avengers: Infinity War
            <br />
            2018 | Directors: Anthony and Joe Russo
          </p>
        </div>
        <div className="movie-card">
          <img
            src="/Images/chat spiderman.webp"
            alt="Spider-Man: No Way Home"
          />
          <p className="movie-info">
            Spider-Man: No Way Home
            <br />
            2021 | Director: Jon Watts
          </p>
        </div>
        <div className="movie-card">
          <img src="/Images/furious 7.webp" alt="Furious 7" />
          <p className="movie-info">
            Furious 7<br />
            2015 | Director: James Wan
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default MovieSlider;
