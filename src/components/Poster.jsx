// import React, { useState } from 'react'
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import BasicModal from './BasicModal';
import YoutubeTrailer from './Youtube';


function Poster({movie}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    // console.log(movie)
    setOpen(true);
    
  }
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    height: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div className='h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:hover:scale-110 md:h-34 md:min-w-[220px]'>
      <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
          className='rounded-sm object-cover md-rounded'
          onClick={handleOpen}
      />
    
    {/* <BasicModal open={open}/> */}
    <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
      >
            <Fade in={open}>
              <Box sx={style} className="text-black">
                {/* <Typography id="transition-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography> */}
                
                <YoutubeTrailer id={movie.id} media={movie.media_type}/>
              </Box>
            </Fade>
      </Modal>
    </div>
  )
}

export default Poster