import React, {useState, useEffect} from 'react';

import YouTube from 'react-youtube';

export default function YoutubeTrailer({id, media}) {

  const options = {
    height: '100%',
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
      <YouTube videoId={link} opts={options} style={{position: 'absolute', left: 0, top: 0}}/>
    </React.Fragment>
  );
}