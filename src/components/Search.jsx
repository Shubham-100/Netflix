import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ onSearchTextChange }) {
  
  const handleSearchTextChange = React.useCallback((event) => {
    if (event.target.value.trim() && event.key === 'Enter') {
      onSearchTextChange(event.target.value)
    }
  })

  return (
    <Paper
      component="form"
      sx={{ ml:10, p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
     <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <InputBase
        onChange={handleSearchTextChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Content"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
    </Paper>
  );
}
