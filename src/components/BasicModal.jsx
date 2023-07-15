import React from 'react';
import { Backdrop, Box, Modal, Fade } from '@mui/material';

function BasicModal({ open, onClose, children }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { sm: '60%', xs: '90%', md:'70%' }, // Adjust the width for small screens (sm) and extra-small screens (xs)
    height: { sm: '50%', xs: '70%', md:'80%' },
    bgcolor: '#181818',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY:'auto',
    flexDirection: 'column',
    margin: '5px',
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style} className='space-y-20'>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
}

export default BasicModal;
