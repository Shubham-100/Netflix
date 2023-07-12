import React from 'react'
import requests from "../utils/requests";

function Poster({movies}) {
  return (
    <div>
        {/* <img
                    src={`${requests.url}${movies.backdrop_path || movies.poster_path}`}
                    alt={`${requests.url}${movies.title}`}
                    className=""
        /> */}
        Movie
    </div>
  )
}

export default Poster