import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React , { useRef } from 'react';
import Poster from './Poster'

function Row({title, movies}) {
    //console.log(movies)
    const containerRef = useRef(null);
    const scrollDistance = 500; 

    const handleScrollLeft = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft -= scrollDistance;
        }
      };
    
      const handleScrollRight = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += scrollDistance;
        }
      };

  return (
    <div className='h-40 space-y-2 md:space-y-4'>
        <h2 className='w-56 cursor-pointer text-sm text-[#e5e5e5] hover:text-white transition duration-.2s md:text-2xl'>{title}</h2>
        <div className='group relative md:-ml-2'>
            <ChevronLeftIcon className='absolute top-0 bottom-0 cursor-pointer left-2 z-40 opacity-0 h-9 w-9 transition hover:scale-125 group-hover:opacity-100' onClick={handleScrollLeft}/>
            <div className='flex gap-2 md:gap-4 overflow-hidden scroll-smooth' ref={containerRef}>
                {
                    movies && movies?.results.map((movie)=>
                        <Poster key={movie.id} movie={movie}/>
                    )
                }
            </div>
            <ChevronRightIcon className='absolute top-0 bottom-0 cursor-pointer right-2 z-40 opacity-0 h-9 w-9 transition hover:scale-125 group-hover:opacity-100' onClick={handleScrollRight}/>
        </div>
    </div>
  );
}

export default Row