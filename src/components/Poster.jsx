import React from 'react'

function Poster({movie}) {
  return (
    <div className='h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:hover:scale-110 md:h-34 md:min-w-[220px]'>
      <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
          className='rounded-sm object-cover md-rounded'
      />
    </div>
  )
}

export default Poster