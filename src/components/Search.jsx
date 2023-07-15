import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import requests from '../utils/requests'

export default function Search() {
  const [query, setQuery] = React.useState("");
  const [content, setContent] = React.useState([]);

  const handleSearchTextChange = async (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  }

  const search = async () => {
    //const api = await fetch(`'https://api.themoviedb.org/3/search/movie?api_key=8c9ffd11ba7d32ff77538291e8db2d90&query=john`);
    const api = await fetch(`${requests.BASE_URL}/search/movie?api_key=${requests.API_KEY}&query=${query}`);
    const data = await api.json();
    setContent(data.results);
    console.log(data.results);
 };
  
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
        onClick={search}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Content"
        inputProps={{ 'aria-label': 'search google maps' }}
      />

      {
          content && content.map((movie)=>(
          <MovieCard key = {movie.id} id={movie.id} title={movie.name || movie.title} media={movie.media_type} date={movie.first_air_date || movie.release_date} vote={movie.vote_average} image={movie.poster_path} overview={movie.overview}/>))
      }
      
    </Paper>
  );
}
