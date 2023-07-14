"use client";
import React, { useEffect, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from '@heroicons/react/solid';
import BasicModal from './BasicModal';
import Info from './Info';
import YoutubeTrailer from './Youtube';
import requests from "../utils/requests";

function Banner({netflixOriginals}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen(true);}
  const handleClose = () => setOpen(false);

  const [movie, setMovie] = useState(null);
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
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
            <img
                    src={`${requests.url}${movie.backdrop_path || movie.poster_path}`}
                    alt={`${requests.url}${movie.title}`}
                    className="object-cover"
            />
        </div>

      <h1 className="text-white text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>

      <p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-2xl lg:text-2xl'>{movie?.overview}</p>

      <div className="flex space-x-4 items-center gap-x-2">
        <button className="btn bg-white" onClick={handleOpen}><FaPlay className='h-4 w-4 md:h-7 md:w-7'/>Play</button>
        <BasicModal open={open} onClose={handleClose}>
            <YoutubeTrailer id={movie.id} media={movie.media_type} />
            <Info movie={movie} />
        </BasicModal>
        <button className="btn bg-[gray]/70 text-white" onClick={handleOpen}><InformationCircleIcon className='h-4 w-4 md:h-7 md:w-7'/>More Info</button>
      </div>
      
    </div>
  )
}

export default Banner