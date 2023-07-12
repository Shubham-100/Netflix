"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import requests from "../utils/requests";

function Banner({netflixOriginals}) {
  const [movie, setMovie] = useState(null);
  console.log(netflixOriginals?.results)
  var idx = 10;
  
  useEffect(() => {
    if (Array.isArray(netflixOriginals?.results) && netflixOriginals?.results.length > 0) {
      idx = Math.floor(Math.random() * netflixOriginals.results.length);
      setMovie(netflixOriginals.results[idx]);
    }
  }, [netflixOriginals?.results]);

  if (!movie) {
    return null; // Return null or a loading indicator while the movie is being selected
  }

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 -z-10 h-[65vh] w-screen object-cover">
        <img
                //src="https://image.tmdb.org/t/p/original/nb9fc9INMg8kQ8L7sE7XTNsZnUX.jpg"
                src={`${requests.url}${movie.backdrop_path || movie.poster_path}`}
                alt={`${requests.url}${movie.title}`}
                className="object-contain"
            />

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
          
        </div>
    </div>
  )
}

export default Banner