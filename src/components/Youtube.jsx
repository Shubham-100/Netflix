import React, {useState, useEffect} from 'react';

import YouTube from 'react-youtube';

export default function YoutubeTrailer({id, media}) {

  const options = {
    
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  const [link, setLink] = useState("");

  const getYTLink = async () => {
    const api = await fetch(`https://api.themoviedb.org/3/${media === 'tv' ? 'tv' : 'movie'}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const data = await api.json();
    setLink(data.results[0]?.key);
    console.log(data);
  };

  useEffect(()=>{
    getYTLink();
  });

  return (
    <React.Fragment>
      <YouTube videoId={link} opts={options} style={{position: 'relative', top:0, left:0, width:'100%', height:'80%', flex: '1 0 auto'}}/>
    </React.Fragment>
  );
}