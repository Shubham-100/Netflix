// import React, { useState } from 'react'
import * as React from 'react';
import BasicModal from './BasicModal';
import Info from './Info';
import YoutubeTrailer from './Youtube';
import {useState} from 'react';
import {
  CheckIcon,
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  XIcon,
} from '@heroicons/react/outline'

function Poster({movie}) {
  const [muted, setMuted] = useState(true)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log(movie)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  return (
    <div className='h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:hover:scale-110 md:h-34 md:min-w-[220px]'>
      <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
          className='rounded-sm object-cover md-rounded'
          onClick={handleOpen}
      />
    
      <BasicModal open={open} onClose={handleClose}>
        <YoutubeTrailer id={movie.id} media={movie.media_type} />
        <Info movie={movie}/>
      </BasicModal>
    </div>
  )
}

export default Poster